# Brian's Gym — Website

Production-ready marketing site for **Brian's Gym**, Sedalia's #1 fitness facility.
Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** (custom design tokens from the brand system)
- **lucide-react** icons
- **next/font** — Inter (headings) + PT Sans (body)
- Unsplash images as placeholders

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, animated stat counters, video tour, features, tabbed photo tour, value-vs-competitor table, testimonial, HealthClub JSON-LD |
| `/about` | Locally owned story, difference badges, audiences |
| `/programs` | Personal training, Kid Zone, SilverSneakers + facility amenities |
| `/membership` | Day passes, monthly table, annual specials (incl. couples $615/yr), discounts, payment methods |
| `/personal-training` | 3-for-$75 special, how it works, feature badges |
| `/free-trial` | 3-day trial form (Formspree) + included sidebar |
| `/contact` | NAP, hours, Google Map embed, contact form (Formspree), payment methods |
| `/faq` | Accordion of 10 Q&As + FAQPage JSON-LD |

Plus `not-found.tsx`, dynamic `sitemap.xml` (`app/sitemap.ts`) and `robots.txt` (`app/robots.ts`).

## Design System

Colors, spacing, radius, shadows, and transitions are defined in `tailwind.config.ts`
and `app/globals.css` (CSS variables), matching the darker premium palette:
primary `#1e5a99`, primary-light `#2c79bf`, amber highlight `#f59e0b`, navy `#070f1d`.

## SEO & Accessibility

- Per-page meta descriptions + Open Graph tags
- Canonical URLs, sitemap, robots
- Schema.org: HealthClub (home), FAQPage (FAQ)
- Skip-to-content link, ARIA labels, keyboard-accessible tabs/accordion, WCAG AA contrast
- Respects `prefers-reduced-motion`

## Forms

Forms POST to Formspree endpoints defined in `lib/site.ts`.
