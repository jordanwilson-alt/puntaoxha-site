// ─────────────────────────────────────────────────────────────
// Punta Ox Ha' — Worker
// Serves the static site (ASSETS binding) plus /stats/data:
// a keyed, cached JSON proxy over Cloudflare zone analytics for
// the private stats page at /stats.
// Secrets (wrangler secret put): STATS_KEY, CF_ANALYTICS_TOKEN
// ─────────────────────────────────────────────────────────────

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === '/stats/data') return statsData(url, env, ctx);
    return env.ASSETS.fetch(request);
  },
};

const json = (obj, status = 200, extra = {}) =>
  new Response(JSON.stringify(obj), {
    status,
    headers: { 'content-type': 'application/json', 'cache-control': 'no-store', ...extra },
  });

async function statsData(url, env, ctx) {
  if (!env.STATS_KEY || url.searchParams.get('k') !== env.STATS_KEY) {
    return json({ error: 'forbidden' }, 403);
  }

  // 10-minute edge cache — analytics lag a few minutes anyway
  const cache = caches.default;
  const cacheKey = new Request(url.origin + '/stats/data?v=1');
  const hit = await cache.match(cacheKey);
  if (hit) return hit;

  const since = new Date(Date.now() - 30 * 864e5).toISOString().slice(0, 10);
  const query = `query($zone: String!, $since: String!) {
    viewer { zones(filter: { zoneTag: $zone }) {
      days: httpRequests1dGroups(limit: 31, filter: { date_geq: $since }, orderBy: [date_ASC]) {
        dimensions { date }
        sum { requests pageViews bytes countryMap { clientCountryName requests } }
        uniq { uniques }
      }
    } }
  }`;

  const r = await fetch('https://api.cloudflare.com/client/v4/graphql', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.CF_ANALYTICS_TOKEN}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ query, variables: { zone: env.CF_ZONE_ID, since } }),
  });
  const raw = await r.json().catch(() => null);
  const zone = raw?.data?.viewer?.zones?.[0];
  if (!zone) return json({ error: 'analytics unavailable', detail: raw?.errors?.[0]?.message ?? null }, 502);

  const days = (zone.days ?? []).map((g) => ({
    date: g.dimensions.date,
    visitors: g.uniq?.uniques ?? 0,
    pageViews: g.sum?.pageViews ?? 0,
    requests: g.sum?.requests ?? 0,
    bytes: g.sum?.bytes ?? 0,
  }));

  const byCountry = new Map();
  for (const g of zone.days ?? []) {
    for (const c of g.sum?.countryMap ?? []) {
      const name = c.clientCountryName || '—';
      byCountry.set(name, (byCountry.get(name) ?? 0) + (c.requests ?? 0));
    }
  }
  const countries = [...byCountry.entries()]
    .map(([name, requests]) => ({ name, requests }))
    .sort((a, b) => b.requests - a.requests)
    .slice(0, 6);

  const res = json(
    { days, countries, updated: new Date().toISOString() },
    200,
    { 'cache-control': 'public, max-age=600' }
  );
  ctx.waitUntil(cache.put(cacheKey, res.clone()));
  return res;
}
