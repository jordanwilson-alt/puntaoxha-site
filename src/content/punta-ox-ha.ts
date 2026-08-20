// ─────────────────────────────────────────────────────────────
// Punta Ox Ha' — Content loader (EN)
// ALL editable content lives in src/content/data/en/*.json and
// is edited via the CMS at /admin (Sveltia). This module just
// types + re-exports it, so the rest of the site imports from
// here exactly as before.
// `booking` (Lodgify URLs/IDs) stays in code on purpose — a bad
// edit there breaks real payments. Change via developer only.
// ─────────────────────────────────────────────────────────────

import suitesJson from './data/en/suites.json';
import faqJson from './data/en/faq.json';
import extrasJson from './data/en/extras.json';
import toursJson from './data/en/tours.json';
import homeJson from './data/en/home.json';
import areaJson from './data/en/area.json';
import aboutJson from './data/en/about.json';

export type Suite = {
  slug: string;
  name: string;
  essence: string;          // ONE sensory sentence (Habitas room-card pattern)
  story: string;            // detail-page paragraph
  type: string;             // "Studio" | "One-bedroom" | "Two-bedroom"
  floor: string;
  sleeps: string;
  bestFor: string;          // one quiet line on the casa card: who this casa suits
  amenities: string[];
  hero: { src: string; alt: string };
  gallery: Array<{ src: string; alt: string; caption?: string }>;
  comingSoon?: boolean;     // unit not yet photographed → "coming soon" panel
};

export type Extra = {
  slug: string;
  name: string;
  essence: string;
  detail: string;
  priceLine: string | null;
  qty: number;
  images: Array<{ src: string; alt: string }>;
};

export type Tour = { name: string; line: string };

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

// ── Booking (Lodgify) — CODE-OWNED, not in the CMS ───────────
// Real booking + payment is handled by Lodgify (the channel manager).
// websiteId + searchUrl power the search bar; `urls` deep-link each
// casa's Lodgify booking page. See clients/punta-ox-ha/lodgify-booking.md.
export const booking = {
  websiteId: '586889',
  base: 'https://punta-ox-ha.lodgify.com',
  searchUrl: 'https://punta-ox-ha.lodgify.com/en/all-suites',
  urls: {
    'casa-mia':   'https://punta-ox-ha.lodgify.com/en/1a---casa-mia---2-bedroom-suite---punta-ox-ha',
    'casa-keiki': 'https://punta-ox-ha.lodgify.com/en/1b---casa-keiki---poolside-1-bedroom-suite',
    'casa-linda': 'https://punta-ox-ha.lodgify.com/en/2a---casa-linda---2-bedroom-suite---punta-ox-ha',
    'casa-yada':  'https://punta-ox-ha.lodgify.com/en/2b---casa-yada---1-bedroom-suite---punta-ox-ha',
    'casa-bel':   'https://punta-ox-ha.lodgify.com/en/3a---casa-bel---1-bedroom-suite---punta-ox-ha',
    'casa-peach': 'https://punta-ox-ha.lodgify.com/en/3b---casa-peach---1-bedroom-suite---punta-ox-ha',
  } as Record<string, string>,
};
