// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://puntaoxha.com',
  // Bilingual: English at root (/), Spanish at /es/. Browser-language
  // auto-detect + manual switcher handled client-side (see BaseLayout).
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    tailwind({
      // We manage the @tailwind directives ourselves in src/styles/global.css
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
    format: 'directory',
  },
  vite: {
    ssr: {
      // PhotoSwipe + Lenis are ESM-only; let Vite handle them at SSR
      noExternal: ['photoswipe', 'lenis', 'motion', 'embla-carousel'],
    },
  },
  // Enable View Transitions API site-wide via <ViewTransitions /> in BaseLayout
  prefetch: {
    defaultStrategy: 'viewport',
  },
});
