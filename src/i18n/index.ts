// ─────────────────────────────────────────────────────────────
// i18n — English (default, at /) + Spanish (at /es/).
// getContent(locale) → long-form content (prose) from the locale
//   content module. ui(locale) → short UI/chrome strings.
// localizePath() powers the switcher + hreflang alternates.
// ─────────────────────────────────────────────────────────────
import * as en from '@content/punta-ox-ha';
import * as es from '@content/punta-ox-ha.es';

export type Locale = 'en' | 'es';
export const LOCALES: Locale[] = ['en', 'es'];

export function isLocale(x: unknown): x is Locale {
  return x === 'en' || x === 'es';
}

/** Resolve the active locale from a page prop or Astro.currentLocale. */
export function resolveLocale(x: unknown): Locale {
  return isLocale(x) ? x : 'en';
}

/** Canonical casa names — proper nouns, NEVER localized. Every locale's
 *  suite.name is forced to the English name (matched by slug) so the casa
 *  names can never drift between languages, even if the ES copy is re-edited. */
const CANON_NAMES: Record<string, string> = Object.fromEntries(
  en.suites.map((s) => [s.slug, s.name]),
);

/** Long-form content (suites, manifesto, splits, faq, …) for a locale. */
export function getContent(locale: Locale) {
  const mod = locale === 'es' ? es : en;
  const suites = mod.suites.map((s) => ({ ...s, name: CANON_NAMES[s.slug] ?? s.name }));
  return { ...mod, suites };
}

/** Strip any leading /es and return the canonical (English-rooted) path. */
export function stripLocale(path: string): string {
  const base = path.replace(/^\/es(?=\/|$)/, '');
  return base === '' ? '/' : base;
}

/** Build the URL for `path` in `locale` (EN at root, ES under /es). */
export function localizePath(path: string, locale: Locale): string {
  const base = stripLocale(path);
  if (locale === 'es') return base === '/' ? '/es' : '/es' + base;
  return base;
}

// ── UI / chrome strings ──────────────────────────────────────
type Dict = {
  nav: { casas: string; area: string; extras: string; about: string; contact: string; book: string; bookStay: string };
  hero: { headline: string; subline: string };
  home: {
    casasEyebrow: string; casasTitle: string; casasIntro: string; discoverAll: string;
    inquiryLink: string; guestWords: string; wholeHouse: string;
  };
  book: {
    arrive: string; depart: string; guests: string; guest: string; guestsPl: string;
    cta: string; helper: string; browseAll: string;
  };
  suite: {
    rates: string; availability: string; onInquiry: string; book: string; from: string; perNight: string; discover: string;
    theStory: string; glance: string; typeL: string; sleepsL: string; amenitiesL: string; otherCasas: string;
    liveCalendar: string;
    comingSoonEyebrow: string; comingSoonTitle: string; comingSoonBody: string;
  };
  footer: { tagline: string; bookDirect: string; siteBy: string };
  pages: {
    suites: { eyebrow: string; title: string; intro: string; ctaTitle: string; ctaBody: string; ctaBtn: string };
    about: { eyebrow: string; title: string; faqEyebrow: string };
    area: { eyebrow: string; title: string; intro: string; ctaTitle: string; ctaBody: string; ctaBtn: string };
    contact: { eyebrow: string; title: string; intro: string; waSub: string; emailSub: string; igSub: string };
  };
  form: {
    eyebrow: string; title: string; sub: string; arrive: string; depart: string; guests: string; guest: string; guestsPl: string;
    preferredSuite: string; noPreference: string; name: string; email: string; phone: string; note: string; placeholder: string;
    footer: string; submit: string; sending: string; wholeProperty: string;
  };
  extras: {
    eyebrow: string; title: string; intro: string;
    rateOnRequest: string; addToStay: string; available: string; photoSoon: string; footnote: string;
    toursTitle: string; toursIntro: string; toursCta: string;
  };
  wa: { label: string; text: string };
  map: { eyebrow: string; title: string; ground: string; second: string; top: string; courtyard: string };
  langName: string;
  switchTo: string;
};

const EN: Dict = {
  nav: { casas: 'The Casas', area: 'The Area', extras: 'Extras', about: 'About', contact: 'Contact', book: 'Book', bookStay: 'Book your stay' },
  hero: {
    headline: 'Six boutique casas, two minutes from the surf.',
    subline: 'A courtyard oasis in La Punta — for surfers, remote workers, and anyone here to relax and recharge.',
  },
  home: {
    casasEyebrow: 'The Casas',
    casasTitle: 'Six homes around the courtyard.',
    casasIntro: 'Each casa is its own — pick by floor, by light, by how many of you there are. Every one is air-conditioned, on fibre + Starlink Wi-Fi, and a barefoot walk from the pool.',
    discoverAll: 'Discover all six casas',
    inquiryLink: 'Or send us a personal inquiry',
    guestWords: 'Guest words',
    wholeHouse: 'Traveling as a group? Take the whole house',
  },
  book: {
    arrive: 'Arrive', depart: 'Depart', guests: 'Guests', guest: 'guest', guestsPl: 'guests',
    cta: 'Check availability',
    helper: 'Real-time rates & instant booking on our reservations site.',
    browseAll: 'Browse all six casas →',
  },
  suite: {
    rates: 'Rates', availability: 'Availability', onInquiry: 'On inquiry — we answer within hours', book: 'Book', from: 'From', perNight: '/ night', discover: 'Discover',
    theStory: 'The story', glance: 'At a glance', typeL: 'Type', sleepsL: 'Sleeps', amenitiesL: 'Amenities', otherCasas: 'Other casas',
    liveCalendar: 'See live calendar & rates',
    comingSoonEyebrow: 'Photography in progress', comingSoonTitle: 'New photos coming soon',
    comingSoonBody: 'We are styling and shooting this casa now — fresh images land soon. Ask us for current photos, or to hold your dates anytime.',
  },
  footer: { tagline: 'Our home steps from the surf', bookDirect: 'Book direct with us for your best rates.', siteBy: 'Site by' },
  pages: {
    suites: {
      eyebrow: 'The Casas', title: 'Six Boutique Casas',
      intro: 'Every casa is air-conditioned, set around a peaceful courtyard, and minutes from the surf. Pick the one that fits how you travel.',
      ctaTitle: 'Not sure which casa?',
      ctaBody: "Tell us your dates and what you're after — we'll help you pick. Book direct with us for your best rates.",
      ctaBtn: 'Send an Inquiry',
    },
    about: { eyebrow: 'About', title: 'Our home, and how it came to be.', faqEyebrow: 'Before you ask' },
    area: {
      eyebrow: 'The Area', title: 'Things to Do in Puerto Escondido',
      intro: "La Punta is the relaxed southern side of Playa Zicatela — steps from the surf, the cafés, and a slower pace of Puerto Escondido. Here's what's worth your time.",
      ctaTitle: 'Want our full local guide?',
      ctaBody: "Drop your email and we'll send our complete Puerto Escondido guide — surf spots, restaurants, hidden beaches, and more.",
      ctaBtn: 'Get the Guide',
    },
    contact: {
      eyebrow: 'Contact', title: 'Get in Touch',
      intro: 'Book direct for our best rates. We answer every inquiry personally — usually within hours.',
      waSub: 'Fastest reply — same day', emailSub: 'Same-day reply', igSub: 'DMs are open',
    },
  },
  form: {
    eyebrow: 'Send an Inquiry', title: 'Tell us about your stay', sub: "We'll get back to you within hours.",
    arrive: 'Arrive', depart: 'Depart', guests: 'Guests', guest: 'guest', guestsPl: 'guests',
    preferredSuite: 'Preferred casa', noPreference: 'No preference', name: 'Name', email: 'Email', phone: 'Phone / WhatsApp (optional)', note: 'A note (optional)',
    placeholder: 'Surfing? Working? Family trip? Anything we should know.',
    footer: "Book direct with us for your best rates. We'll respond by email and WhatsApp within hours.",
    submit: 'Send Inquiry', sending: 'Sending…', wholeProperty: 'Entire property — groups & retreats',
  },
  extras: {
    eyebrow: 'Extras',
    title: 'Add to Your Stay',
    intro: 'Little things that make the trip easier. Reserve any of these with your booking and they’ll be ready when you arrive.',
    rateOnRequest: 'Rate on request',
    addToStay: 'Add to your stay',
    available: 'available',
    photoSoon: 'Photo coming soon',
    footnote: 'Message us with your dates and we’ll add these to your reservation.',
    toursTitle: 'Tours',
    toursIntro: 'The coast, with the people who know it best.',
    toursCta: 'Plan a day out',
  },
  wa: {
    label: 'Chat with us on WhatsApp',
    text: "Hola! I'd like to ask about a stay at Punta Ox Ha'.",
  },
  map: {
    eyebrow: 'The house at a glance', title: 'Three floors around one courtyard.',
    ground: 'Ground floor', second: 'Second floor', top: 'Top floor', courtyard: 'Courtyard · Pool',
  },
  langName: 'English',
  switchTo: 'Español',
};

const ES: Dict = {
  nav: { casas: 'Las Casas', area: 'La Zona', extras: 'Extras', about: 'Nosotros', contact: 'Contacto', book: 'Reservar', bookStay: 'Reserva tu estancia' },
  hero: {
    headline: 'Seis casas boutique, a dos minutos del surf.',
    subline: 'Un oasis con patio en La Punta — para surfistas, nómadas digitales y cualquiera que venga a relajarse y recargar energías.',
  },
  home: {
    casasEyebrow: 'Las Casas',
    casasTitle: 'Seis casas alrededor del patio.',
    casasIntro: 'Cada casa tiene su propio carácter — elige por piso, por luz, por cuántos vienen. Todas con aire acondicionado, Wi-Fi de fibra + Starlink y la alberca a unos pasos descalzos.',
    discoverAll: 'Descubre las seis casas',
    inquiryLink: 'O escríbenos directamente',
    guestWords: 'Lo que dicen',
    wholeHouse: '¿Vienen en grupo? Reserven la casa completa',
  },
  book: {
    arrive: 'Llegada', depart: 'Salida', guests: 'Huéspedes', guest: 'huésped', guestsPl: 'huéspedes',
    cta: 'Ver disponibilidad',
    helper: 'Tarifas en tiempo real y reserva al instante en nuestro sitio de reservaciones.',
    browseAll: 'Ver las seis casas →',
  },
  suite: {
    rates: 'Tarifas', availability: 'Disponibilidad', onInquiry: 'Bajo consulta — respondemos en horas', book: 'Reservar', from: 'Desde', perNight: '/ noche', discover: 'Descubre',
    theStory: 'La historia', glance: 'De un vistazo', typeL: 'Tipo', sleepsL: 'Capacidad', amenitiesL: 'Amenidades', otherCasas: 'Otras casas',
    liveCalendar: 'Ver calendario y tarifas en vivo',
    comingSoonEyebrow: 'Fotografía en proceso', comingSoonTitle: 'Próximamente nuevas fotos',
    comingSoonBody: 'Estamos preparando y fotografiando esta casa — pronto habrá imágenes nuevas. Pídenos fotos actuales o aparta tus fechas cuando quieras.',
  },
  footer: { tagline: 'Nuestra casa, a pasos del surf', bookDirect: 'Reserva directo con nosotros para el mejor precio.', siteBy: 'Sitio por' },
  pages: {
    suites: {
      eyebrow: 'Las Casas', title: 'Seis Casas Boutique',
      intro: 'Cada casa tiene aire acondicionado, está alrededor de un patio tranquilo y a minutos del surf. Elige la que va con tu forma de viajar.',
      ctaTitle: '¿No sabes qué casa elegir?',
      ctaBody: 'Cuéntanos tus fechas y qué buscas — te ayudamos a elegir. Reserva directo con nosotros para el mejor precio.',
      ctaBtn: 'Enviar consulta',
    },
    about: { eyebrow: 'Nosotros', title: 'Nuestra casa, y cómo nació.', faqEyebrow: 'Antes de preguntar' },
    area: {
      eyebrow: 'La Zona', title: 'Qué hacer en Puerto Escondido',
      intro: 'La Punta es el lado sur y relajado de Playa Zicatela — a pasos del surf, los cafés y el ritmo lento de Puerto Escondido. Esto es lo que vale la pena.',
      ctaTitle: '¿Quieres nuestra guía local completa?',
      ctaBody: 'Déjanos tu correo y te enviamos nuestra guía completa de Puerto Escondido — spots de surf, restaurantes, playas escondidas y más.',
      ctaBtn: 'Obtener la guía',
    },
    contact: {
      eyebrow: 'Contacto', title: 'Contáctanos',
      intro: 'Reserva directo para el mejor precio. Respondemos cada mensaje en persona — normalmente en horas.',
      waSub: 'Respuesta más rápida — mismo día', emailSub: 'Respuesta el mismo día', igSub: 'Los DMs están abiertos',
    },
  },
  form: {
    eyebrow: 'Enviar consulta', title: 'Cuéntanos sobre tu estancia', sub: 'Te respondemos en unas horas.',
    arrive: 'Llegada', depart: 'Salida', guests: 'Huéspedes', guest: 'huésped', guestsPl: 'huéspedes',
    preferredSuite: 'Casa preferida', noPreference: 'Sin preferencia', name: 'Nombre', email: 'Correo', phone: 'Teléfono / WhatsApp (opcional)', note: 'Una nota (opcional)',
    placeholder: '¿Surf? ¿Trabajo? ¿Viaje en familia? Cuéntanos lo que debamos saber.',
    footer: 'Reserva directo con nosotros para el mejor precio. Te respondemos por correo y WhatsApp en horas.',
    submit: 'Enviar consulta', sending: 'Enviando…', wholeProperty: 'Propiedad completa — grupos y retiros',
  },
  extras: {
    eyebrow: 'Extras',
    title: 'Suma a tu estancia',
    intro: 'Pequeños detalles que hacen el viaje más fácil. Reserva cualquiera con tu estancia y estarán listos cuando llegues.',
    rateOnRequest: 'Precio bajo consulta',
    addToStay: 'Suma a tu estancia',
    available: 'disponibles',
    photoSoon: 'Foto próximamente',
    footnote: 'Escríbenos con tus fechas y las agregamos a tu reservación.',
    toursTitle: 'Tours',
    toursIntro: 'La costa, con quienes mejor la conocen.',
    toursCta: 'Arma tu día',
  },
  wa: {
    label: 'Escríbenos por WhatsApp',
    text: "¡Hola! Quisiera información para una estancia en Punta Ox Ha'.",
  },
  map: {
    eyebrow: 'La casa de un vistazo', title: 'Tres pisos alrededor de un patio.',
    ground: 'Planta baja', second: 'Segundo piso', top: 'Planta alta', courtyard: 'Patio central · Alberca',
  },
  langName: 'Español',
  switchTo: 'English',
};

export function ui(locale: Locale): Dict {
  return locale === 'es' ? ES : EN;
}
