# Sozo Stays — Website Template

Reusable Astro 4 + Tailwind template for boutique multi-suite vacation properties. Built around a per-client env-var configuration so the same codebase ships every property with its own brand identity.

**First live client:** Punta Ox Ha Coastal Apartments, Puerto Escondido, MX.

---

## Stack

- **Astro 4** (static SSG + View Transitions)
- **Tailwind v3** (custom design tokens per visual-language.md)
- **Lenis** — smooth scroll, site-wide
- **Embla Carousel** — image galleries
- **Motion One** — element-level transitions
- **PhotoSwipe** — gallery lightbox
- **Cloudflare Pages** — deploy target

---

## Quick start

```bash
cd website-template
npm install
cp .env.example .env       # fill in per-client values
npm run dev                # http://localhost:4321
```

`npm run build` produces a static `dist/` ready for Cloudflare Pages.

---

## Per-client deploy

Every client = same codebase + different `.env`. The flow:

1. **Configure** — copy `.env.example` to `.env` and fill in:
   - Site identity (name, location, domain, coordinates)
   - Brand variant (`coral` for Punta Ox Ha; `clay` / `matcha` / `ocean` for future)
   - Hero image + headline + subline
   - Contact info (WhatsApp, email, Instagram)
   - n8n webhook URLs (set after VPS is up — see `/sozo-stays/infra/`)
   - Airtable base ID (per-client content base)
2. **Drop client content** — replace `src/content/<client>.ts` with per-client data. (Punta Ox Ha lives at `src/content/punta-ox-ha.ts`.)
3. **Drop client images** — to `public/hero/`, `public/suites/<slug>/`, `public/brand/`.
4. **Drop client logo** — to `public/brand/logo.svg` (Irving's logo file pending handoff for Punta Ox Ha).
5. **Build + deploy** — `npm run build`, push to Cloudflare Pages.

---

## Directory layout

```
website-template/
├── astro.config.mjs           # Astro config (View Transitions, static output)
├── tailwind.config.js         # custom theme tokens
├── tsconfig.json              # path aliases (@components, @lib, etc.)
├── .env.example               # per-client config schema
├── public/
│   ├── favicon.svg
│   ├── brand/                 # logo files (per-client)
│   ├── hero/                  # hero photography
│   └── suites/<slug>/         # per-suite galleries
├── src/
│   ├── content/
│   │   └── punta-ox-ha.ts     # suites + FAQ + area copy (per client)
│   ├── lib/
│   │   ├── env.ts             # typed env-var helpers
│   │   └── motion.client.ts   # Lenis + reveal observer + nav scroll behavior
│   ├── styles/
│   │   ├── global.css         # base + reset + components + utilities
│   │   └── tokens.css         # color + motion + spacing tokens
│   ├── layouts/
│   │   └── BaseLayout.astro   # head, View Transitions, Nav, Footer, ChatLauncher
│   ├── components/
│   │   ├── Brand.astro
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── Eyebrow.astro
│   │   ├── SectionLead.astro
│   │   ├── SuiteCard.astro
│   │   ├── SuiteGallery.astro
│   │   ├── AvailabilityWidget.astro
│   │   ├── GuideTeaser.astro
│   │   ├── InquiryForm.astro
│   │   ├── FAQAccordion.astro
│   │   ├── Footer.astro
│   │   └── ChatLauncher.astro
│   └── pages/
│       ├── index.astro
│       ├── suites/index.astro
│       ├── suites/[slug].astro    # dynamic per suite
│       ├── the-area.astro
│       ├── about.astro
│       ├── contact.astro
│       ├── guide.astro
│       └── thanks.astro
```

---

## Design system reference

The full design specification lives at:
- `/sozo-stays/design/visual-language.md` — typography, color tokens, motion, components, CTA hierarchy
- `/sozo-stays/design/references/design-references.md` — reference brand analysis (Habitas, Hotel Esencia, Bunkhouse, etc.)
- `/sozo-stays/clients/punta-ox-ha/brand-extract.md` — Punta Ox Ha specific brand decisions

Key principles:
- **Restraint with type, generosity with photography.**
- **Slow, ambient motion** — no SaaS-style spring physics.
- **Per-client variant via `data-variant` attribute** on `<html>` (set from `PUBLIC_COLOR_VARIANT` env var).
- **Maximum one primary CTA per viewport.**
- **WCAG AA contrast** + `prefers-reduced-motion` respected throughout.

---

## Adding a new client

1. Duplicate `src/content/punta-ox-ha.ts` → `src/content/<new-client>.ts`. Fill in suites + FAQ + area copy.
2. Add their images to `public/<new-client>/`.
3. Create a new project on Cloudflare Pages pointing at this repo.
4. In the project settings: paste their `.env` values as Environment Variables.
5. Set their custom domain.
6. Done.

---

## Known TODOs (Phase 0e — motion polish)

- [ ] Replace placeholder favicon with Irving's real logo (once received)
- [ ] Add real hero photography (Punta Ox Ha — pending shoot Week 1)
- [ ] Wire `/api/inquiry` and `/api/guide` to live n8n webhooks (pending Hetzner VPS provisioning)
- [ ] Connect FAQAccordion to live Airtable feed (pending Phase 0 Airtable base creation)
- [ ] Add live iCal-cached availability to AvailabilityWidget (Phase 2 iCal sync)
- [ ] Run `design:design-critique` skill against the result before launch

---

## License

Private — Sozo Stays internal use only.
