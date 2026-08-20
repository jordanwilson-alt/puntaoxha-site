// ─────────────────────────────────────────────────────────────
// Punta Ox Ha — Content (v3 premium / community-led)
// Source of truth for suites: Airtable "Suites" table.
// Rates pending Irving's intake → render "Rates on inquiry".
// Voice: warm host first-person, their anchor phrases preserved
// (courtyard oasis · steps from the surf · Starlink Wi-Fi ·
//  surfers, remote workers · relax and recharge).
// ─────────────────────────────────────────────────────────────

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
  fromPriceUSD: number | null;   // null until Irving's rates arrive
  hero: { src: string; alt: string };
  gallery: Array<{ src: string; alt: string; caption?: string }>;
  comingSoon?: boolean;       // unit not yet photographed → render a "coming soon" panel instead of images
};

export const suites: Suite[] = [
  {
    slug: 'casa-keiki',
    name: 'Casa Keiki',
    essence: 'Step from your door into the courtyard, and from the courtyard into the pool.',
    story:
      'Casa Keiki sits on the garden level, where the courtyard is your front yard and the pool is a few barefoot steps away. Mornings here start slow — coffee outside, a swim before the day warms up, the surf two minutes down the street when you are ready for it.',
    type: 'Studio',
    floor: 'Ground floor',
    sleeps: '2 guests',
    bestFor: 'Best for couples who want the pool a step from bed.',
    amenities: ['Direct pool & courtyard access', 'Air conditioning', 'Fibre + Starlink Wi-Fi', 'Kitchenette'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-keiki/hero.jpg', alt: 'Casa Keiki — garden-level casa opening to the courtyard' },
    gallery: [
      { src: '/suites/casa-keiki/01.jpg', alt: 'Casa Keiki living corner — rattan chair and potted plants beside the garden-level doorway', caption: 'Living corner' },
      { src: '/suites/casa-keiki/02.jpg', alt: 'Casa Keiki studio — bed and kitchenette in one open, light-filled room', caption: 'The studio' },
      { src: '/suites/casa-keiki/03.jpg', alt: 'Casa Keiki bedroom — patterned bedspread against a warm accent wall with framed art', caption: 'Bedroom' },
      { src: '/suites/casa-keiki/04.jpg', alt: 'Casa Keiki kitchenette — gas range and coffee maker beside a sunny window', caption: 'Kitchenette' },
      { src: '/suites/casa-keiki/05.jpg', alt: 'Casa Keiki — dining table beside the open door to the courtyard', caption: 'Dining — courtyard door' },
      { src: '/suites/casa-keiki/06.jpg', alt: 'Casa Keiki bathroom — pedestal sink, toilet, and glass-enclosed shower', caption: 'Bathroom' },
    ],
  },
  {
    slug: 'casa-mia',
    name: 'Casa Mia',
    essence: 'Two bedrooms, a full kitchen, and a poolside patio — our home for families and friends.',
    story:
      'Casa Mia is the biggest home in the house: two bedrooms, a living room, a full kitchen for long breakfasts, and a patio that opens straight onto the courtyard and pool. Built for families, friends traveling together, and anyone who wants room to spread out without leaving the oasis.',
    type: 'Two-bedroom',
    floor: 'Ground floor',
    sleeps: '4 guests',
    bestFor: 'Best for families & friends — full kitchen, living room, poolside patio.',
    amenities: ['Full kitchen', 'Living room', 'Poolside patio', 'Air conditioning', 'Ceiling fans', 'Fibre + Starlink Wi-Fi'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-mia/hero.jpg', alt: 'Casa Mia — two-bedroom home with poolside patio' },
    gallery: [
      { src: '/suites/casa-mia/01.jpg', alt: 'Casa Mia great room — open living and kitchen bar with seating on warm wood floors', caption: 'Great room' },
      { src: '/suites/casa-mia/02.jpg', alt: 'Casa Mia living area — sofa and armchair opening through glass doors to the courtyard', caption: 'Living room' },
      { src: '/suites/casa-mia/03.jpg', alt: 'Casa Mia — cushioned daybed by the window with a view onto the pool', caption: 'Daybed — pool view' },
      { src: '/suites/casa-mia/04.jpg', alt: 'Casa Mia bedroom — bed beside a bright window', caption: 'Bedroom' },
      { src: '/suites/casa-mia/05.jpg', alt: 'Casa Mia dining area — round table with a wood hutch and sunburst mirror', caption: 'Dining' },
      { src: '/suites/casa-mia/06.jpg', alt: 'Casa Mia lounge — patterned sofa with pillows beneath a macramé wall hanging', caption: 'Lounge' },
      { src: '/suites/casa-mia/07.jpg', alt: 'Casa Mia bathroom — vanity with a sconce and towel hooks', caption: 'Bathroom' },
    ],
  },
  {
    slug: 'casa-peach',
    name: 'Casa Peach',
    essence: 'A top-floor one-bedroom with its own covered terrace lounge.',
    story:
      'Casa Peach is a full one-bedroom home on the top floor — open living and dining, a kitchen of your own, and a king bedroom with a desk for the work-and-surf crowd. The covered terrace is the heart of it: a hammock, a daybed piled with sugar-skull pillows, and the green of La Punta beyond. Slow mornings, long evenings.',
    type: 'One-bedroom',
    floor: 'Top floor',
    sleeps: '2 guests',
    bestFor: 'Best for work-and-surf stays — desk, kitchen, covered terrace.',
    amenities: ['Private covered terrace', 'Full kitchen', 'Living & dining area', 'Work desk', 'Air conditioning', 'Fibre + Starlink Wi-Fi'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-peach/hero.jpg', alt: 'Casa Peach — covered terrace with a hammock and a daybed with sugar-skull pillows' },
    gallery: [
      { src: '/suites/casa-peach/01.jpg', alt: 'Casa Peach living area — daybed sofa beside curtained glass doors to the terrace', caption: 'Living room' },
      { src: '/suites/casa-peach/02.jpg', alt: 'Casa Peach bedroom — king bed against a burnt-orange accent wall with framed prints', caption: 'Bedroom — king' },
      { src: '/suites/casa-peach/03.jpg', alt: 'Casa Peach bedroom — dark wood armoire and a writing desk beneath a portrait', caption: 'Bedroom — work desk' },
      { src: '/suites/casa-peach/04.jpg', alt: 'Casa Peach kitchen — gas range, coffee maker, and full-size fridge', caption: 'Kitchen' },
      { src: '/suites/casa-peach/05.jpg', alt: 'Casa Peach lounge corner — patterned daybed with pillows beside the dining chairs and a reading lamp', caption: 'Lounge corner' },
      { src: '/suites/casa-peach/06.jpg', alt: 'Casa Peach bathroom — glass shower, amber tile, and stocked towel rack', caption: 'Bathroom' },
    ],
  },
  {
    slug: 'casa-yada',
    name: 'Casa Yada',
    essence: 'A king bed, a private patio, and the courtyard a flight of stairs away.',
    story:
      'Casa Yada is the easy middle of the house — second floor, king bed, a private patio for two. Close enough to the courtyard to feel the life of the place, far enough to disappear when you want to. The casa our returning guests ask for by name.',
    type: 'One-bedroom',
    floor: 'Second floor',
    sleeps: '2 guests · King bed',
    bestFor: 'Best for couples — king bed and a private patio.',
    amenities: ['King bed', 'Private patio', 'Air conditioning', 'Fibre + Starlink Wi-Fi'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-yada/hero.jpg', alt: 'Casa Yada — king bed and private patio' },
    gallery: [
      { src: '/suites/casa-yada/01.jpg', alt: 'Casa Yada coffee bar', caption: 'Coffee bar' },
      { src: '/suites/casa-yada/02.jpg', alt: 'Casa Yada living room', caption: 'Living room' },
      { src: '/suites/casa-yada/05.jpg', alt: 'Casa Yada bedroom', caption: 'Bedroom — king' },
      { src: '/suites/casa-yada/06.jpg', alt: 'Casa Yada balcony', caption: 'Balcony' },
      { src: '/suites/casa-yada/03.jpg', alt: 'Casa Yada bathroom', caption: 'Bathroom' },
      { src: '/suites/casa-yada/04.jpg', alt: 'Casa Yada shower', caption: 'Shower' },
    ],
  },
  {
    slug: 'casa-linda',
    name: 'Casa Linda',
    essence: 'Our spacious second-floor home for families and small groups.',
    story:
      'Casa Linda takes the second floor with space to spare — two bedrooms and room for a small crew. Groups of friends, families with kids who fall asleep mid-sentence after a day in the water: this is your home. The courtyard and pool are one flight down.',
    type: 'Two-bedroom',
    floor: 'Second floor',
    sleeps: '4 guests',
    bestFor: 'Best for families & small groups — two bedrooms, one floor up.',
    amenities: ['Two bedrooms', 'Air conditioning', 'Ceiling fans', 'Fibre + Starlink Wi-Fi'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-linda/hero.jpg', alt: 'Casa Linda — second-floor living room with an L-shaped daybed, macramé, and warm light' },
    gallery: [
      { src: '/suites/casa-linda/01.jpg', alt: 'Casa Linda balcony nook — a leafy plant and seat by the sunlit window', caption: 'Balcony nook' },
      { src: '/suites/casa-linda/02.jpg', alt: 'Casa Linda bedroom — bed with a framed portrait and open shelving', caption: 'Bedroom one' },
      { src: '/suites/casa-linda/03.jpg', alt: 'Casa Linda bedroom — bed beside a louvered wardrobe and built-in shelves', caption: 'Bedroom one' },
      { src: '/suites/casa-linda/04.jpg', alt: 'Casa Linda second bedroom — bed beneath a bold floral painting', caption: 'Bedroom two' },
      { src: '/suites/casa-linda/05.jpg', alt: 'Casa Linda second bedroom — bed with the floral painting and open shelving', caption: 'Bedroom two' },
      { src: '/suites/casa-linda/06.jpg', alt: 'Casa Linda kitchen — full kitchen and dining table with woven chairs', caption: 'Kitchen & dining' },
      { src: '/suites/casa-linda/07.jpg', alt: 'Casa Linda kitchen — gas range, coffee maker, and prep counter', caption: 'Kitchen' },
      { src: '/suites/casa-linda/08.jpg', alt: 'Casa Linda bathroom — walk-in shower', caption: 'Bathroom — walk-in shower' },
    ],
  },
  {
    slug: 'casa-bel',
    name: 'Casa Bel',
    essence: 'The top-floor home — full kitchen, living room, and a big private terrace.',
    story:
      'Casa Bel is the top-floor home: a full casa with its own kitchen, a living room, and a wide private terrace strung with a hammock. Cook a long breakfast, work in the afternoon shade, watch the light go soft over La Punta. Room to properly settle in, with the surf two minutes down the street.',
    type: 'One-bedroom',
    floor: 'Top floor',
    sleeps: '2 guests',
    bestFor: 'Best for longer stays — full kitchen and a big private terrace.',
    amenities: ['Private terrace', 'Full kitchen', 'Living room', 'Air conditioning', 'Ceiling fans', 'Fibre + Starlink Wi-Fi'],
    fromPriceUSD: null,
    hero: { src: '/suites/casa-bel/hero.jpg', alt: 'Casa Bel — top-floor terrace with a hammock, live-edge wood table, and open-air afternoon light' },
    gallery: [
      { src: '/suites/casa-bel/01.jpg', alt: 'Casa Bel living area — armchair and full-size fridge beside sliding doors that open to the private terrace', caption: 'Living room' },
      { src: '/suites/casa-bel/02.jpg', alt: 'Casa Bel kitchen — full kitchen with a gas range, fridge, and wood dining table', caption: 'Kitchen' },
      { src: '/suites/casa-bel/03.jpg', alt: 'Casa Bel dining table — solid wood table with woven chairs beneath a folk-art print', caption: 'Dining' },
      { src: '/suites/casa-bel/04.jpg', alt: 'Casa Bel bedroom — made bed beneath a folk-art print, with a woven wall sconce and bedside lamp', caption: 'Bedroom' },
      { src: '/suites/casa-bel/05.jpg', alt: 'Casa Bel bedroom — flat-screen TV on a carved wood dresser, the door open to the en-suite bathroom, beside a sunlit window', caption: 'Bedroom — en-suite' },
    ],
  },
];

// ── Extras — bookable add-ons (rentals / experiences). image:null → "photo coming soon" panel; priceLine:null → "rate on request". ──
export type Extra = {
  slug: string;
  name: string;
  essence: string;
  detail: string;
  priceLine: string | null;
  qty: number;
  images: Array<{ src: string; alt: string }>;   // [] → "photo coming soon" panel; [0] is the card hero, rest render as thumbnails
};

export const extras: Extra[] = [
  {
    slug: 'moto',
    name: 'Moto rental',
    essence: 'Two wheels to explore the coast at your own pace.',
    detail: 'Skip the taxis — cruise to the surf, the market, and the sunset spots up the coast. Reserve one with your stay.',
    priceLine: null,
    qty: 2,
    images: [
      { src: '/extras/moto.jpg', alt: 'A rental moto parked in the courtyard' },
      { src: '/extras/moto-2.jpg', alt: 'The second rental moto in the courtyard' },
    ],
  },
  {
    slug: 'surfboard',
    name: 'Surfboard rental',
    essence: 'Grab a board and walk straight to the point break.',
    detail: 'La Punta’s gentle left is two minutes away. Keep a board for the length of your stay.',
    priceLine: null,
    qty: 2,
    images: [{ src: '/extras/surfboard.jpg', alt: 'Two surfboards leaning against the wall, ready to borrow' }],
  },
];

// Tours — curated from the partner agency's catalog (unbranded on site,
// inquiry-only per Irving). Rendered as a typographic menu, not photo cards.
export type Tour = { name: string; line: string };

export const tours: Tour[] = [
  { name: 'Bioluminescent lagoon', line: 'Night swim in glowing water, twenty minutes up the coast.' },
  { name: 'Turtle release', line: 'Set hatchlings loose on a golden-hour beach.' },
  { name: 'Dolphin watching', line: 'Sunrise on the open water — whales join from November to March.' },
  { name: 'Laguna de Chacahua', line: 'A full day of mangrove channels, floating islands, and an empty beach.' },
  { name: 'Sunset horseback', line: 'Ride the river fields of Manialtepec to a beach-sunset finish.' },
  { name: 'Mazunte & Punta Cometa', line: 'A magic-town day trip ending on the sacred point at sunset.' },
];

export const toursMore =
  'Also on the menu: mezcal tastings, ziplines, waterfalls, snorkeling, sport fishing, and the bays of Huatulco. Tell us what you are into — we will arrange it with the local guides we partner with.';

// ── Booking (Lodgify) ────────────────────────────────────────
// Real booking + payment is handled by Lodgify (the channel manager).
// websiteId + searchUrl power the embedded search bar; `urls` deep-link
// each casa's Lodgify booking page. Captured 2026-06-14 — see
// clients/punta-ox-ha/lodgify-booking.md.
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

// ── Homepage content ─────────────────────────────────────────

export const manifesto = {
  eyebrow: 'Welcome to our home',
  body:
    "Punta Ox Ha' is six casas around a courtyard oasis in La Punta — steps from the surf, the cafés, and the easy life of Puerto Escondido. We built it for surfers chasing the perfect wave, remote workers looking for inspiration, and anyone simply seeking to relax and recharge. Stay a few nights and the place starts to feel like yours; stay a week and the neighborhood does too.",
};

export const splits = [
  {
    eyebrow: 'The courtyard',
    title: 'A pool in the middle of everything.',
    body:
      'The courtyard is the heart of the house — a pool to cool off in, shade to read in, and the kind of common space where strangers end up sharing dinner plans. Peaceful when you want quiet, social when you want company.',
    cta: { label: 'Discover the casas', href: '/suites' },
    image: { src: '/hero/courtyard.jpg', alt: 'Looking straight down on the courtyard pool — turquoise water, a float, sun umbrellas, and greenery all around' },
  },
  {
    eyebrow: 'La Punta',
    title: 'The slow side of Puerto Escondido.',
    body:
      'We are two minutes from La Punta’s point break — the gentlest left on this coast — and five from the cafés and kitchens that make this corner of town feel like a village. Zicatela’s big waves and big nights are ten minutes up the beach when you want them.',
    cta: { label: 'Explore the area', href: '/the-area' },
    image: { src: '/hero/lapunta.jpg', alt: 'La Punta beach at golden hour' },
  },
  {
    eyebrow: 'Work from here',
    title: 'Two internet connections. Zero drama.',
    body:
      'Fast fibre internet plus Starlink backup cover every casa and the courtyard — two independent connections, so the morning call never drops. Surf at lunch, finish the day with sand still on your feet. Remote work was the excuse for half our favorite guests.',
    cta: { label: 'Check availability', href: '/#book' },
    image: { src: '/hero/workspace.jpg', alt: 'Taking the morning call from the terrace shade — feet up on the bench, tablet in hand' },
  },
];

// ── Whole-house / groups ─────────────────────────────────────
export const wholeHouse = {
  eyebrow: 'The whole house',
  title: 'Six casas, one key.',
  body:
    "Book all six casas and the courtyard is yours — the pool, the terraces, the whole slow rhythm of the place. Punta Ox Ha' sleeps 14–16 across its six casas: room enough for a retreat, a surf trip, a remote-team offsite, or three generations of one family. Tell us your dates and what you are planning — we will shape the house around it.",
  cta: 'Inquire about the whole house',
};

// ── The Area — distances block (no exact address published) ──
export const bearings = {
  eyebrow: 'Getting your bearings',
  title: 'Close to everything that matters.',
  note: 'We share the exact address with your booking confirmation.',
  items: [
    { place: 'La Punta point break', distance: '2 min walk' },
    { place: 'Cafés & kitchens of La Punta', distance: 'Steps from the door' },
    { place: 'Zicatela beach', distance: '10 min up the sand' },
    { place: 'Carrizalillo cove', distance: '15 min by taxi' },
    { place: 'Puerto Escondido airport (PXM)', distance: '~15 min drive' },
  ],
};

export const guestQuote = {
  text: 'It feels less like a hotel and more like the beach house of a friend who happens to have great taste.',
  attribution: 'A guest, last winter',
};

export const closing = {
  eyebrow: 'Book direct',
  title: 'Ready for your Mexican adventure?',
  body: 'Book direct with us for your best rates. We answer every inquiry personally — usually within hours.',
};

// ── The Area page ────────────────────────────────────────────

export const areaSections = [
  {
    eyebrow: 'Surf',
    title: 'La Punta, Zicatela, Carrizalillo',
    body:
      'La Punta is the easygoing left at the end of our street — the place to learn or shake off rust. Zicatela is the famous heavy wave, for watching from the sand or paddling out if you know what you are doing. Carrizalillo is the pocket bay for swimming and snorkeling.',
  },
  {
    eyebrow: 'Eat & drink',
    title: 'The village kitchens of La Punta',
    body:
      'Five minutes on foot gets you breakfast cafés, taquerías, mezcal bars, and slow dinners under string lights. Ask us for the current list — we keep it updated and opinionated.',
  },
  {
    eyebrow: 'Explore',
    title: 'Bioluminescent lagoons, hot springs, turtles',
    body:
      'Manialtepec lagoon glows on dark nights. Atotonilco has hot springs in the hills. Mazunte and the turtle sanctuary are an hour down the coast. We can arrange trusted drivers and guides for all of it.',
  },
  {
    eyebrow: 'Move',
    title: 'Scooters, boards, and barefoot distances',
    body:
      'Most of life here happens within a ten-minute walk. For everything else, we will point you to the scooter rental we trust and the board shop with the good quiver.',
  },
];

// ── About / FAQ ──────────────────────────────────────────────

export const faq = [
  {
    q: 'How far is the surf?',
    a: 'Two minutes on foot to La Punta point break — the gentlest left on this stretch of coast and a favorite for learning. Zicatela is ten minutes away.',
  },
  {
    q: 'Is the Wi-Fi actually good?',
    a: 'Yes — twice over. The property runs two independent connections: fast fibre internet plus Starlink backup, covering every casa and the courtyard. Calls, uploads, streaming — it just works.',
  },
  {
    q: 'How do I get here from the airport?',
    a: 'Puerto Escondido airport (PXM) is about 15 minutes away. Tell us your flight and we will arrange a trusted driver to meet you.',
  },
  {
    q: 'How do I get to Puerto Escondido?',
    a: 'Direct flights arrive from Mexico City, Guadalajara, and Monterrey, plus United from Houston, American from Dallas (seasonal), Air Canada from Toronto, and WestJet from Calgary. Driving, the new highway puts Oaxaca City 2.5–3 hours away, and Huatulco about 2.',
  },
  {
    q: 'Is there parking?',
    a: 'Street parking is available near the property. Most guests skip the car entirely — La Punta is walkable and motos cover the rest.',
  },
  {
    q: 'Are there stairs?',
    a: 'The house is three stories around the courtyard, reached by stairs — there is no elevator. If stairs are a concern, Casa Mia and Casa Keiki sit on the ground floor, steps from the pool.',
  },
  {
    q: 'Can you help with motos and boards?',
    a: 'We rent both right here at the house — two motos and two surfboards, reserved with your stay. For anything else, the rental shops we trust are two blocks away.',
  },
  {
    q: 'Can we book the whole property?',
    a: 'Yes — the six casas sleep 14–16 together, and group takeovers are our favorite bookings: retreats, surf trips, remote-team offsites, family reunions. Send an inquiry and we will shape the house around your plans.',
  },
  {
    q: 'Do you offer monthly or long-stay rates?',
    a: 'We love long stays — many guests settle in for weeks of work-and-surf. Ask us about weekly and monthly rates for your dates.',
  },
  {
    q: 'Are kids welcome?',
    a: 'Casa Mia and Casa Linda are built for families. Younger kids are welcome property-wide; ask us about a crib in advance.',
  },
  {
    q: 'Is the property secure?',
    a: 'Yes — the property is gated, the street is calm, and the courtyard is private to guests. Sleep easy, wake rested.',
  },
  {
    q: 'What is the cancellation policy?',
    a: 'Your exact terms are shown at checkout before you pay and repeated in your confirmation email. If plans change, write to us first — we are humans, and we will always try to find the fair answer.',
  },
  {
    q: 'What are check-in and check-out?',
    a: 'Check-in 3:00 PM, check-out 11:00 AM — flexible when the calendar allows. Just ask.',
  },
];

export const aboutStory = [
  "Punta Ox Ha' — 'three waters' in Maya, for the three partners whose visions met here — started as a simple idea: a handful of casas around a courtyard, on a quiet street in La Punta, run by people who actually live here and answer their messages.",
  'We host surfers chasing the perfect wave, remote workers looking for inspiration, and travelers who want their mornings slow and their neighborhood walkable. The pool is in the middle. The surf is at the end of the street. The rest takes care of itself.',
  'We are a small operation, which means more soul and fewer policies. If something would make your stay better — a specific casa, a longer-stay rate, a birthday surprise — just ask. The answer is usually yes.',
];
