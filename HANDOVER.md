# Punta Ox Ha' — Website Handover & Editing Guide

Live site: **https://puntaoxha.com** · Editor: **https://puntaoxha.com/admin**

---

## Part 1 — Editing the site (for the Punta Ox Ha' team)

### What you can change yourselves
Open **puntaoxha.com/admin**, sign in with GitHub, and edit:

- **The Casas** — every casa's name, description, details, amenities, cover photo, gallery photos, captions
- **Homepage** — welcome text, the three photo sections, the guest quote, the whole-house pitch
- **FAQ** — add, remove, or reword any question
- **Extras** — moto & board cards, photos, availability count, optional price line
- **Tours** — the tours list and descriptions
- **The Area** — distances list and neighborhood sections
- **About** — the story paragraphs

Everything exists in **English and Spanish** side by side — when you change one, make the same change in the other.

Press **Save** → the site rebuilds itself → your change is live in about **2 minutes**. Every save is stored in history, so nothing can be lost permanently.

### Photo tips
- Landscape photos ~**1200px wide** look best in galleries; casa **cover photos** are portrait (4:5)
- Keep files under ~500KB when you can (export "for web" from your phone/editor)
- New uploads land in `/uploads`; the original casa photos live in `/suites/...` — both work

### Rules of thumb
- Don't change **Slug** fields — links and bookings depend on them
- **Booking links, prices, and the Lodgify connection are code-managed** — ask the developer (below) rather than working around them
- If something looks broken after a save: don't panic, don't keep saving — message the developer; every version is recoverable

### Need a feature, a new section, or a design change?
That's developer work, done as small quoted projects:

> **Jordan Wilson — Sozo Stays** · WhatsApp/email as usual
> Send: what you want, an example if you have one, and when you need it.
> You'll get back a price + delivery date. Content edits you never need to ask for — that's what /admin is for.

---

## Part 2 — One-time setup checklist (technical)

Current state: repo initialized locally, CMS built and shipped at /admin. To activate editing:

1. **GitHub account for the property** — create (or reuse) a GitHub account with `puntaoxha@gmail.com`
2. **Create the repo & push** — e.g. `puntaoxha/puntaoxha-site`, then:
   ```
   git remote add origin git@github.com:puntaoxha/puntaoxha-site.git
   git push -u origin main
   ```
3. **Update `public/admin/config.yml`** → `repo: puntaoxha/puntaoxha-site` (line 12), commit + push
4. **Connect Netlify to the repo** — Netlify site `puntaoxha` → *Site configuration → Build & deploy → Link repository*. Build command `npm run build`, publish dir `dist`
5. **Netlify env var** — add `LODGIFY_API_KEY` (from local `.env`) so CI builds refresh rates
6. **Netlify OAuth provider** — *Site configuration → Access & security → OAuth* → Install provider → GitHub (create the GitHub OAuth App it asks for; callback `https://api.netlify.com/auth/done`). This is what makes "Sign In with GitHub" work at /admin
7. **Test**: open puntaoxha.com/admin → sign in → change one FAQ word → Save → confirm auto-deploy → revert
8. **(Optional) transfer ownership** — GitHub repo transfer to their account + Netlify site transfer to their team, whenever full ownership is wanted; the domain is already theirs at Squarespace

### Developer notes
- Astro 4 + Tailwind. Content = JSON in `src/content/data/{en,es}/`, loaded by `src/content/punta-ox-ha.ts` / `.es.ts` (types there). UI chrome strings = `src/i18n/index.ts` (code-only)
- `booking` (Lodgify IDs/URLs) is code-only by design — see `src/content/punta-ox-ha.ts`
- Local dev: `npm run dev` → localhost:4321 (`/admin/index.html` in dev; `/admin` works in prod). CMS local mode: "Work with Local Repository"
- Manual deploy (pre-CI): `npm run build && netlify deploy --dir=dist --prod`
- Cancel the old Squarespace **website plan** before it renews **Sep 2, 2026** (keep the domain registration)
