// ─────────────────────────────────────────────────────────────
// Punta Ox Ha — Env helpers
// ALL values read here are PUBLIC_-prefixed: client-side scripts
// can only see PUBLIC_* vars (Vite envPrefix). Webhook URLs are
// public endpoints by design — safe to expose.
// ─────────────────────────────────────────────────────────────

const env = import.meta.env;

export const site = {
  name: env.PUBLIC_SITE_NAME ?? "Punta Ox Ha'",
  nameFull: env.PUBLIC_SITE_NAME_FULL ?? "Punta Ox Ha' Boutique Apartments",
  tagline: env.PUBLIC_SITE_TAGLINE ?? 'Six boutique casas, two minutes from the surf',
  location: env.PUBLIC_SITE_LOCATION ?? 'La Punta, Puerto Escondido',
  region: env.PUBLIC_SITE_REGION ?? 'Mexico',
  domain: env.PUBLIC_SITE_DOMAIN ?? 'puntaoxha.com',
  logoUrl: env.PUBLIC_SITE_LOGO_URL ?? '/brand/logo.svg',
  logoAlt: env.PUBLIC_SITE_LOGO_ALT ?? "Punta Ox Ha'",
};

export const hero = {
  imageUrl: env.PUBLIC_HERO_IMAGE_URL ?? '/hero/main.jpg',
  videoUrl: env.PUBLIC_HERO_VIDEO_URL ?? '',
  headline: env.PUBLIC_HERO_HEADLINE ?? 'Our home steps from the surf.',
  subline:
    env.PUBLIC_HERO_SUBLINE ??
    'Six casas around a courtyard oasis in La Punta — for surfers, remote workers, and anyone here to relax and recharge.',
};

export const contact = {
  whatsappNumber: env.PUBLIC_WHATSAPP_NUMBER ?? '',
  email: env.PUBLIC_EMAIL ?? 'puntaoxha@gmail.com',
  instagram: {
    handle: env.PUBLIC_INSTAGRAM_HANDLE ?? 'puntaoxha',
    url: env.PUBLIC_INSTAGRAM_URL ?? 'https://instagram.com/puntaoxha',
  },
};

// PUBLIC_ prefix is load-bearing — see header comment.
export const webhooks = {
  inquiry: env.PUBLIC_N8N_INQUIRY_WEBHOOK ?? '',
  chat: env.PUBLIC_N8N_CHAT_WEBHOOK ?? '',
  leadMagnet: env.PUBLIC_N8N_LEAD_MAGNET_WEBHOOK ?? '',
};

export const features = {
  chatEnabled: env.PUBLIC_CHAT_ENABLED === 'true',
};
