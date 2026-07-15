# Brian's Gym Test Site V2 — Build Brief for Builder Agent

## CRITICAL RULES
- Fresh build from scratch. No references to any existing codebase, repo, or deployment.
- Build with Next.js 14+ (App Router), TypeScript, and Tailwind CSS.
- All content is from Research Agent's Firecrawl crawl — use it directly.

## Business Information

**Name:** Brian's Gym
**Tagline:** Sedalia's #1 Fitness Facility
**Address:** 1020 Thompson Blvd, Sedalia, MO 65301
**Phone:** 660-829-0997
**Email:** info@briansgym.com
**Domain (canonical):** briansgym.com
**Years in Business:** 20+ years, locally owned and operated (not a franchise)
**Facility Size:** 26,000 sq ft
**Access:** 24-hour key card/fob access for all members
**Geo:** Lat 38.7045, Lng -93.2283

## Hours
- **Mon–Thu Staffed:** 7:00am–11:00am & 4:00pm–9:00pm
- **Friday Staffed:** 8:00am–2:00pm
- **Saturday Staffed:** 8:00am–2:00pm
- **Sunday:** Key Card Access Only (unstaffed)
- **24-hour key card access** for all members outside staffed hours

## Social Media
- Facebook: https://www.facebook.com/BriansGymSedalia/
- Instagram: https://www.instagram.com/briansgym24hr/
- YouTube: https://www.youtube.com/@briansgym (channel: UCGdpbiJKJVrwq-1581Xe2yg)
- YouTube tour video: https://www.youtube.com/embed/5NGfTQFhOtI
- Google Maps: https://maps.app.goo.gl/yN1KRxpkgQSYnM127

## Payment Methods
Credit/Debit Cards, ACH/Bank Draft, PayPal, Cash (In-Person)

## Color Scheme — DEEPER/DARKER PREMIUM VERSION

Darken the current palette for a premium energetic feel. Keep the same hue family but deeper:

### Primary Brand (darkened)
- `--color-primary: #1e5a99` (darker blue, from #2c79bf)
- `--color-primary-light: #2c79bf` (original as secondary)
- `--color-primary-dark: #143d6b` (deep navy blue)
- `--color-primary-glow: rgba(30, 90, 153, 0.35)`

### Dark Palette (slightly darker than current)
- `--color-navy: #070f1d` (from #0a1628)
- `--color-navy-light: #0b1a30`
- `--color-navy-medium: #102240`
- `--color-dark-surface: #0c1424`

### Neutrals
- `--color-white: #ffffff`
- `--color-off-white: #f0f4f8`
- `--color-light-gray: #e2e8f0`
- `--color-medium-gray: #94a3b8`
- `--color-dark-gray: #475569`
- `--color-text: #1e293b`
- `--color-text-light: #cbd5e1`

### Accent
- Primary CTA: `#1e5a99` (darker blue — use for primary CTAs and interactive highlights)
- Amber highlight: `#f59e0b` (stars, badges, "best value" highlights)
- Success/green: `#10b981`
- Danger/error: `#ef4444` (errors only)

### Typography
- Headings: Inter (weights 300-900)
- Body: PT Sans (400, 700)
- Use next/font for both

### Spacing Scale (from current site)
xs=0.25rem, sm=0.5rem, md=1rem, lg=1.5rem, xl=2rem, 2xl=3rem, 3xl=4rem, 4xl=6rem, 5xl=8rem

### Border Radius
sm=6px, md=12px, lg=20px, xl=28px, full=9999px

### Shadows
sm: 0 1px 3px rgba(0,0,0,0.12)
md: 0 4px 16px rgba(0,0,0,0.15)
lg: 0 8px 32px rgba(0,0,0,0.2)
xl: 0 16px 48px rgba(0,0,0,0.25)
glow: 0 0 30px rgba(30, 90, 153, 0.35)

### Transitions
fast: 150ms ease
base: 250ms ease
slow: 400ms cubic-bezier(0.4, 0, 0.2, 1)

## Pages to Build (8 pages + SEO pages)

1. **Home (`/`)** — Hero with gym photo, stats counters (26,000 sq ft / 24/7 / 20+ yrs), YouTube video tour embed, features grid (24-hr access, 26,000 sq ft, Kid Zone, Personal Training), about teaser with highlight badges, programs preview (3 cards), tabbed photo tour (Weights & Cardio, Functional Turf, Kid Zone, Personal Training), testimonial, promo CTA banner, **HealthClub schema.org JSON-LD**
2. **About (`/about`)** — Full about story: locally owned 20+ years, not a franchise, community focus, "where everybody knows your name", welcoming to all fitness levels (beginners, serious lifters, seniors, parents), highlight badges (Locally Owned, Clean & Well-Maintained, SilverSneakers Accepted, Military & Senior Discounts)
3. **Programs (`/programs`)** — Personal Training, Kid Zone Child Watch, SilverSneakers/Healthy Contributions, plus facility amenities section (40+ cardio pieces, 30×90 indoor functional turf, free weights, weight machines, locker rooms, security monitored)
4. **Membership (`/membership`)** — Day passes ($8 day, $35 14-day), monthly memberships table, annual online specials ($485/yr single, $615/yr couples), discounts grid (Military, Law Enforcement, Firefighter, Teacher, Senior, Corporate), payment methods, CTA to free trial
5. **Personal Training (`/personal-training`)** — 3 sessions for $75 new member special, how it works (free interview → custom plan → ongoing support), training for every level, feature badges (Certified Trainers, Flexible Packages, All Fitness Levels, Free Initial Consultation)
6. **Free Trial (`/free-trial`)** — 3-day free trial form (Formspree xzdlorrv), what's included sidebar, visit info, referral source dropdown
7. **Contact (`/contact`)** — Location with Google Maps embed, phone, email, hours table, contact form (Formspree xqevnqya), payment methods
8. **FAQ (`/faq`)** — Accordion with all 10 Q&As (below), FAQPage schema.org JSON-LD

Plus: `not-found.tsx`, `sitemap.ts`, `robots.ts`

## Pricing Data

### Day & Short-Term Passes
| Pass | Price | Details |
|------|-------|---------|
| Day Pass | $8 | Full facility access for one day; free weights, cardio & machines; locker rooms & showers |
| 14-Day Pass | $35 | 14 consecutive days; full facility access; great for travelers & visitors |

### Monthly Memberships
| Type | Monthly | Enrollment | Details |
|------|---------|-----------|---------|
| Agreement Single | Contact for rate | $50 | 1-year agreement, $35 annual maintenance fee |
| Non-Agreement Single | $55/mo | $50 | Month-to-month, no contract |
| Non-Agreement Couples | $70/mo | $50 | Month-to-month, two members |
| Family Add-On | $15/mo per member | — | Add family members, $45/mo for 3 additional |
| Kid Zone Add-On | $20/mo | — | Covers 2 children, $15/mo each additional |

Notes: Enrollment $50. Annual $35 maintenance fee per account (not per member). All include 24-hr key card access.

### Annual Online Specials
| Plan | Price | Normal | Savings |
|------|-------|--------|---------|
| 1-Year Single | $485/yr | $571.28/yr | Save $86+ |
| 1-Year Couples | $615/yr | $766.88/yr | Save $151+ |

Annual purchase links:
- Single: https://briansgym.com/product/1-year-single-membership/
- Couples: https://briansgym.com/product/1-year-couples-membership/

### Personal Training
- New Member Special: 3 sessions for $75
- Free Interview: $0 (initial consultation)
- Ongoing: Contact for pricing (flexible packages)

### Discounts
Military, Law Enforcement, Firefighter, Teacher, Senior, Corporate Rates (inquire at info@briansgym.com). Valid ID required.

## Facility Amenities (NEW — add to Programs page)
- 26,000 sq ft of fitness space
- 40+ cardio pieces
- 30×90 indoor functional turf area
- Free weights area
- Weight machines
- Locker rooms & showers
- Indoor & parking lot security monitored
- Kid Zone childcare area

## Key Features to Highlight (with value justification vs competitors)
1. **24-Hour Key Card Access** — Train on your schedule (vs Planet Fitness which closes at 10pm)
2. **26,000 Sq Ft** — Largest in Sedalia (vs Anytime Fitness ~5-10K, JackHammer small)
3. **Kid Zone** — Only gym in Sedalia with childcare ($20/mo covers 2 kids)
4. **Personal Training** — Certified trainers, 3 sessions for $75 new member special
5. **SilverSneakers** — Only gym in Sedalia accepting SilverSneakers/Healthy Contributions
6. **Functional Turf** — 30×90 indoor turf (no competitor has this)
7. **Locally Owned 20+ Years** — Not a franchise, community gym, "where everybody knows your name"
8. **Free 3-Day Trial** — No commitment, no credit card

## Testimonial
> ★★★★★
> "Brian's Gym is the best gym in Sedalia. The staff is friendly and helpful, the equipment is always clean and well-maintained, and the atmosphere is welcoming. I've been a member for years and wouldn't go anywhere else. It's like a second family!"
> — Janette S. Morgan, Member

## FAQ (all 10 items)
1. What are your hours? → 24-hr key card access. Staffed: Mon-Thu 7-11am & 4-9pm, Fri 8-2pm, Sat 8-2pm
2. Do I need to sign a contract? → No — non-agreement month-to-month available. Also day passes and 14-day passes
3. Is there childcare/Kid Zone? → Yes, $20/mo covers 2 children, $15/mo each additional
4. How do I access after hours? → Key card/fob, scan at door
5. Do you offer military/senior/teacher discounts? → Yes — Military, Law Enforcement, Firefighters, Teachers, Seniors. Valid ID required
6. What is the enrollment fee? → $50. Annual $35 maintenance fee per account
7. Is there a free trial? → Yes, free 3-day trial pass, no commitment
8. How do I sign up for personal training? → Contact us or call 660-829-0997 for free interview. New members: 3 sessions for $75
9. Do you accept SilverSneakers/Healthy Contributions? → Yes, both programs accepted. Contact to verify eligibility
10. What is your cancellation policy? → Non-agreement: 30 days notice. Agreement: terms in your agreement. Contact to discuss

## Form Integration
- Contact form: POST to https://formspree.io/f/xqevnqya (Name*, Email*, Phone, Subject dropdown, Message*)
- Free trial form: POST to https://formspree.io/f/xzdlorrv (First Name*, Last Name*, Email*, Phone*, Address, How did you hear about us? dropdown)

## Schema.org Structured Data (MUST include — current site is missing this)
Home page HealthClub JSON-LD:
- @type: HealthClub
- name, description, url, telephone, email
- address (1020 Thompson Blvd, Sedalia, MO 65301)
- geo (38.7045, -93.2283)
- openingHoursSpecification (full hours including split shifts)
- sameAs (Facebook, Instagram, YouTube)
- paymentAccepted (Credit/Debit, ACH, PayPal, Cash)

FAQ page: FAQPage JSON-LD with all 10 Q&As

## SEO (MUST include — current site is missing)
- Per-page meta descriptions (not just home)
- Open Graph tags on every page
- sitemap.xml (all 8 pages)
- robots.txt
- Canonical URLs
- Semantic HTML
- Proper alt text on all images
- Skip-to-content link for accessibility

## Competitor Context
| Feature | Brian's Gym | Planet Fitness | Anytime Fitness | JackHammer24 |
|---------|-------------|----------------|-----------------|--------------|
| Locally Owned | ✅ 20+ yrs | ❌ Franchise | ❌ Franchise | ✅ Small |
| 24/7 Access | ✅ Key card | ❌ Closes 10pm | ✅ Key fob | ✅ App |
| Childcare | ✅ Kid Zone | ❌ | ❌ | ❌ |
| Functional Turf | ✅ 30×90 | ❌ | ❌ | ❌ |
| SilverSneakers | ✅ | ❌ | ❌ | ❌ |
| Free Trial | ✅ 3 days | ❌ | ✅ | ❌ |
| Starting Price | $55/mo | $15/mo | ~$40+/mo | $35/mo |

Brian's is premium — justify the $55/mo vs $15 Planet Fitness through: Kid Zone, turf, SilverSneakers, local ownership, 26K sq ft, personal training. The site should make the value clear.

## Design Requirements
- **Mobile-first** responsive design
- **Fluid modern flow** — smooth scroll, reveal animations on scroll (IntersectionObserver or CSS)
- **Strong hero** with full-bleed gym photo, bold headline, dual CTA
- **Sticky header** transparent over hero, solid on scroll, mobile hamburger
- **Conversion-focused** — CTAs everywhere: "Start Free Trial", "View Membership", "Join Now"
- **Accessibility** — ARIA labels, keyboard nav, skip-to-content, WCAG AA contrast
- **Pill-shaped buttons** (border-radius full), uppercase, letter-spacing
- **Gradient section underlines** under section headers (60px wide, 4px, primary gradient)
- **Card hover effects** — gradient top bar, shadow lift
- **Dark sections** alternate with light sections for visual rhythm

## Tech Stack
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- lucide-react for icons
- next/font for Inter + PT Sans
- Unsplash fitness images as placeholders with descriptive alt text
- No external image files needed

## Improvements Over Current Site (Research Agent recommendations to implement)
1. ✅ Schema.org structured data (HealthClub + FAQPage)
2. ✅ Meta descriptions on every page
3. ✅ Sitemap + robots.txt
4. ✅ Proper alt text on all images
5. ✅ Accessibility (skip-to-content, ARIA, WCAG AA)
6. ✅ Couples annual pricing ($615/yr) — was missing in first build
7. ✅ Facility amenities section (40+ cardio, 30×90 turf, security)
8. ✅ Payment methods listed
9. ✅ Value justification section (why $55/mo vs $15 Planet Fitness)
10. ✅ Cleaner hours presentation
