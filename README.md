# FiveAM Agency — Website

Creative Portfolio + Company Profile + Lead Generation website for **FiveAM Agency**
(People · Moments · Brands), built per the FiveAM Master Context v1.0.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS 3.4** — deep/dark blue (`navy`) + neutrals (`bone`, `sand`, `steel`)
- Fonts: Space Grotesk (display), Inter (body), Fraunces italic (editorial accent)
- Fully static output (SSG), mobile-first

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start
```

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, intro, services, selected stories, why, process, social proof, CTA |
| `/work` | Portfolio grid + simple category filter |
| `/work/[slug]` | Project detail — story, gallery, credits, CTA |
| `/services` | What We Create — grouped by Moments / People / Brands |
| `/wedding` | Dedicated wedding landing page (strategic growth focus) |
| `/graduation` | Youthful graduation landing page (seasonal-campaign ready) |
| `/brand` | Brand & UMKM landing incl. monthly content production |
| `/about` | Who we are, beliefs, team placeholders |
| `/contact` | Inquiry form → opens WhatsApp pre-filled |

## ⚠️ Before launch — replace these placeholders

All placeholder values live in **one place**: [`src/lib/site.ts`](src/lib/site.ts)

- `[WHATSAPP NUMBER — TO BE PROVIDED]` → `whatsappNumber` (digits only, with country code)
- `[EMAIL ADDRESS — TO BE PROVIDED]` → `email`
- `[INSTAGRAM URL — TO BE PROVIDED]` → `instagram`
- `[TIKTOK URL — TO BE PROVIDED]` → `tiktok`
- Production domain → `url`

Other placeholders (marked inline as `TO BE PROVIDED` / `PLACEHOLDER`):

- **Portfolio projects & photos** → [`src/lib/projects.ts`](src/lib/projects.ts).
  Every visual slot renders a styled `PlaceholderImage` block labelled
  *"Replace with FiveAM project image"* — swap it for `<Image>`/`<img>` when real
  photography is available.
- **Testimonials & client logos** → Home page "Kind Words" section.
- **Team members** → About page.
- **OG image** → add `public/og.jpg` (1200×630) and uncomment in `src/app/layout.tsx`.

No fake clients, testimonials or statistics are used anywhere, per the Master Context.

## Content management (simple structure)

Portfolio items follow this data shape in `src/lib/projects.ts`:
`title · slug · category · subtitle · description · year · client · credits · featured`.
Adding a project automatically adds it to Work, filters, sitemap and detail pages.

## SEO

Per-page metadata titles/descriptions target keywords naturally
(e.g. *wedding photographer Jakarta*, *graduation photographer Jakarta*),
semantic heading structure, OpenGraph support, `sitemap.xml`, skip-to-content link,
keyboard-friendly nav, `prefers-reduced-motion` support.
