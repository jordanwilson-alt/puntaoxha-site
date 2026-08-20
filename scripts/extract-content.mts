// One-time content extraction: TS content modules → CMS-editable JSON.
import { writeFileSync, mkdirSync } from 'node:fs';
import * as en from '/tmp/poh_extract/punta-ox-ha.ts';
import * as es from '/tmp/poh_extract/punta-ox-ha.es.ts';

const W = (p: string, data: unknown) =>
  writeFileSync(p, JSON.stringify(data, null, 2) + '\n', 'utf8');

for (const [loc, m] of [['en', en], ['es', es]] as const) {
  const d = `src/content/data/${loc}`;
  mkdirSync(d, { recursive: true });
  W(`${d}/suites.json`, m.suites);
  W(`${d}/faq.json`, m.faq);
  W(`${d}/extras.json`, m.extras);
  W(`${d}/tours.json`, { items: m.tours, more: m.toursMore });
  W(`${d}/home.json`, {
    manifesto: m.manifesto,
    splits: m.splits,
    guestQuote: m.guestQuote,
    closing: m.closing,
    wholeHouse: m.wholeHouse,
  });
  W(`${d}/area.json`, { bearings: m.bearings, areaSections: m.areaSections });
  W(`${d}/about.json`, { story: m.aboutStory });
}
console.log('extracted OK');
