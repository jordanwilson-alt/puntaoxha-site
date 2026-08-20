// ─────────────────────────────────────────────────────────────
// Punta Ox Ha' — Content loader (ES / espejo del EN)
// Todo el contenido editable vive en src/content/data/es/*.json
// y se edita en el CMS en /admin. Este módulo solo lo tipa y lo
// re-exporta. `booking` se re-exporta del módulo EN (URLs/IDs
// compartidos, solo developer).
// ─────────────────────────────────────────────────────────────

import type { Suite, Extra, Tour } from './punta-ox-ha';
export { booking } from './punta-ox-ha';

import suitesJson from './data/es/suites.json';
import faqJson from './data/es/faq.json';
import extrasJson from './data/es/extras.json';
import toursJson from './data/es/tours.json';
import homeJson from './data/es/home.json';
import areaJson from './data/es/area.json';
import aboutJson from './data/es/about.json';

export const suites = suitesJson.items as Suite[];
export const faq = faqJson.items as Array<{ q: string; a: string }>;
export const extras = extrasJson.items as Extra[];
export const tours = toursJson.items as Tour[];
export const toursMore = toursJson.more as string;

export const manifesto = homeJson.manifesto;
export const splits = homeJson.splits;
export const guestQuote = homeJson.guestQuote;
export const closing = homeJson.closing;
export const wholeHouse = homeJson.wholeHouse;

export const bearings = areaJson.bearings;
export const areaSections = areaJson.areaSections;

export const aboutStory = aboutJson.story as string[];
