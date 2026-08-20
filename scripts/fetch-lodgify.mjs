// ─────────────────────────────────────────────────────────────
// Lodgify build-time fetch — pulls rates + 90-day availability
// for all casas and writes src/data/lodgify.json.
// Run: npm run lodgify   (also runs automatically before build)
// Fails soft: if the API is down or key missing, the existing
// JSON (or a stub) is kept and the site still builds.
// ─────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../src/data/lodgify.json');

// slug → Lodgify property id (from GET /v2/properties, 2026-06-10)
const CASAS = {
  'casa-mia':   { propertyId: 715038, unit: '1A' },
  'casa-keiki': { propertyId: 791142, unit: '1B' },
  'casa-linda': { propertyId: 715050, unit: '2A' },
  'casa-yada':  { propertyId: 715048, unit: '2B' },
  'casa-bel':   { propertyId: 715045, unit: '3A' },
  'casa-peach': { propertyId: 715047, unit: '3B' },
};

// read LODGIFY_API_KEY from .env (build-time only; never shipped to client)
function readKey() {
  if (process.env.LODGIFY_API_KEY) return process.env.LODGIFY_API_KEY;
  try {
    const env = readFileSync(resolve(__dirname, '../.env'), 'utf8');
    const m = env.match(/^LODGIFY_API_KEY="?([^"\n]+)"?/m);
    return m?.[1] ?? null;
  } catch { return null; }
}

const iso = (d) => d.toISOString().slice(0, 10);

async function main() {
  const key = readKey();
  if (!key) {
    console.warn('[lodgify] no API key found — keeping existing data');
    ensureStub();
    return;
  }

  const headers = { 'X-ApiKey': key, Accept: 'application/json' };
  const start = new Date();
  const end = new Date(Date.now() + 90 * 86400 * 1000);

  const data = { fetchedAt: new Date().toISOString(), casas: {} };

  // rates (one properties call covers all)
  let props = [];
  try {
    const r = await fetch('https://api.lodgify.com/v2/properties', { headers });
    if (!r.ok) throw new Error(`properties ${r.status}`);
    props = (await r.json()).items ?? [];
  } catch (e) {
    console.warn(`[lodgify] properties fetch failed (${e.message}) — keeping existing data`);
    ensureStub();
    return;
  }

  for (const [slug, { propertyId, unit }] of Object.entries(CASAS)) {
    const prop = props.find((p) => p.id === propertyId);
    const entry = {
      propertyId,
      unit,
      priceMXN: prop?.original_min_price ?? null,
      priceUSD: prop?.min_price ? Math.round(prop.min_price) : null,
      currency: prop?.currency_code ?? 'MXN',
      periods: [],
    };

    try {
      const r = await fetch(
        `https://api.lodgify.com/v2/availability/${propertyId}?start=${iso(start)}&end=${iso(end)}`,
        { headers }
      );
      if (r.ok) {
        const av = await r.json();
        entry.periods = (av?.[0]?.periods ?? []).map((p) => ({
          start: p.start,
          end: p.end,
          available: p.available === 1,
        }));
      }
    } catch { /* availability is optional — rates still useful */ }

    data.casas[slug] = entry;
    console.log(`[lodgify] ${slug}: $${entry.priceMXN} MXN (~$${entry.priceUSD} USD), ${entry.periods.length} periods`);
  }

  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log(`[lodgify] wrote ${OUT}`);
}

function ensureStub() {
  if (existsSync(OUT)) return;
  mkdirSync(dirname(OUT), { recursive: true });
  const stub = { fetchedAt: null, casas: {} };
  for (const [slug, { propertyId, unit }] of Object.entries(CASAS)) {
    stub.casas[slug] = { propertyId, unit, priceMXN: null, priceUSD: null, currency: 'MXN', periods: [] };
  }
  writeFileSync(OUT, JSON.stringify(stub, null, 2));
}

main();
