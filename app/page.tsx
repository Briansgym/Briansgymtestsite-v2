import Link from 'next/link';
import {
  Clock,
  Maximize,
  Baby,
  Dumbbell,
  Users,
  HeartPulse,
  ShieldCheck,
  Star,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import StatCounter from '@/components/StatCounter';
import SectionHeader from '@/components/SectionHeader';
import PhotoTour from '@/components/PhotoTour';
import CTABanner from '@/components/CTABanner';
import JsonLd from '@/components/JsonLd';
import { SITE, HOURS } from '@/lib/site';

const features = [
  {
    icon: Clock,
    title: '24-Hour Access',
    text: 'Key card entry any time, day or night. Train on your schedule — never on someone else’s.',
  },
  {
    icon: Maximize,
    title: '26,000 Sq Ft',
    text: 'The largest fitness facility in Sedalia with room to move, lift, and thrive.',
  },
  {
    icon: Baby,
    title: 'Kid Zone Childcare',
    text: 'The only gym in Sedalia with on-site childcare — $20/mo covers two children.',
  },
  {
    icon: Users,
    title: 'Personal Training',
    text: 'Certified trainers and custom plans. New members: 3 sessions for just $75.',
  },
];

const programs = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    text: 'One-on-one coaching from certified trainers with plans built around your goals.',
    href: '/personal-training',
  },
  {
    icon: Baby,
    title: 'Kid Zone Child Watch',
    text: 'Supervised, welcoming childcare so parents can focus on their workout.',
    href: '/programs',
  },
  {
    icon: HeartPulse,
    title: 'SilverSneakers',
    text: 'We accept SilverSneakers & Healthy Contributions — the only gym in Sedalia that does.',
    href: '/programs',
  },
];

export default function HomePage() {
  const healthClubSchema = {
    '@context': 'https://schema.org',
    '@type': 'HealthClub',
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    image:
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.state,
      postalCode: SITE.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '07:00',
        closes: '11:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '16:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:00',
        closes: '14:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:00',
        closes: '14:00',
      },
    ],
    sameAs: [SITE.social.facebook, SITE.social.instagram, SITE.social.youtube],
    paymentAccepted: 'Credit Card, Debit Card, ACH/Bank Draft, PayPal, Cash',
  };

  return (
    <>
      <JsonLd data={healthClubSchema} />

      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
          alt="Spacious weight and cardio floor inside Brian's Gym in Sedalia, Missouri"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/80 to-primary-dark/60" />

        <div className="container-x relative pt-32 pb-20">
          <div className="max-w-3xl">
            <Reveal>
              <span className="eyebrow">{SITE.tagline}</span>
              <h1 className="font-heading text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-7xl">
                Sedalia&apos;s Largest,{' '}
                <span className="text-primary-light">Most Complete</span> Fitness Facility
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-textlight md:text-xl">
                26,000 square feet of premium equipment, 24-hour access, Kid Zone childcare,
                functional turf, and certified personal trainers. Locally owned for over 20 years —
                where everybody knows your name.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/free-trial" className="btn-primary">
                  Start Free 3-Day Trial
                </Link>
                <Link href="/membership" className="btn-outline">
                  View Membership
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Stat counters */}
          <div className="mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-3">
            <StatCounter end={26000} suffix=" sq ft" label="Facility Size" format />
            <StatCounter end={24} suffix="/7" label="Key Card Access" />
            <StatCounter end={20} suffix="+ yrs" label="Locally Owned" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Why Brian's Gym"
              title="Everything You Need Under One Roof"
              description="More than a gym — a complete fitness home for every member of your family."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="card h-full p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <f.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-navy">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-darkgray">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-lg shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=900&q=80"
                alt="Free weights and strength equipment at Brian's Gym"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <SectionHeader
              eyebrow="Locally Owned & Operated"
              title="A Community Gym, Not a Franchise"
              description="For over 20 years, Brian's Gym has been Sedalia's home for fitness. We're locally owned and operated — not a corporate franchise — and it shows in everything from our friendly staff to our spotless equipment."
            />
            <div className="mt-6 grid grid-cols-2 gap-3">
              {['Locally Owned', 'Clean & Well-Maintained', 'SilverSneakers Accepted', 'Military & Senior Discounts'].map(
                (badge) => (
                  <div key={badge} className="flex items-center gap-2 text-sm font-semibold text-navy">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success" aria-hidden="true" />
                    {badge}
                  </div>
                )
              )}
            </div>
            <Link href="/about" className="btn-ghost mt-8">
              Our Story <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* PROGRAMS PREVIEW */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Programs"
              title="Built for Every Fitness Level"
              description="From first-time beginners to serious lifters, seniors, and busy parents — there's a place for you here."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <Link href={p.href} className="card group flex h-full flex-col p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <p.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-darkgray">{p.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary group-hover:text-primary-dark">
                    Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO TOUR */}
      <section className="bg-navy py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              light
              eyebrow="Take a Look Inside"
              title="Video Tour of Brian's Gym"
              description="See our 26,000 sq ft facility, functional turf, and premium equipment before you visit."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-lg shadow-xl">
              <iframe
                className="h-full w-full"
                src={SITE.social.youtubeEmbed}
                title="Brian's Gym facility video tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PHOTO TOUR TABS */}
      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Photo Tour"
              title="Explore Every Corner"
              description="Browse our facility by area — weights, turf, childcare, and training."
            />
          </Reveal>
          <Reveal delay={100} className="mt-12">
            <PhotoTour />
          </Reveal>
        </div>
      </section>

      {/* VALUE JUSTIFICATION */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Real Value"
              title="Why Brian's at $55/mo Beats the $15/mo Competition"
              description="A $15 membership sounds great — until you realize what's missing. Here's what you actually get at Brian's Gym."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-lightgray shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-4 font-semibold">Feature</th>
                      <th className="p-4 text-center font-semibold">Brian&apos;s Gym</th>
                      <th className="p-4 text-center font-semibold">Planet Fitness</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-lightgray">
                    {[
                      ['Locally owned 20+ years', true, false],
                      ['24-hour access', true, false],
                      ['Kid Zone childcare', true, false],
                      ['30×90 functional turf', true, false],
                      ['SilverSneakers accepted', true, false],
                      ['Free 3-day trial', true, false],
                      ['Certified personal training', true, false],
                    ].map(([label, brian, pf]) => (
                      <tr key={label as string} className="bg-white">
                        <td className="p-4 font-semibold text-navy">{label}</td>
                        <td className="p-4 text-center">
                          {brian ? (
                            <CheckCircle2 className="mx-auto h-6 w-6 text-success" aria-label="Yes" />
                          ) : (
                            <span className="text-mediumgray" aria-label="No">—</span>
                          )}
                        </td>
                        <td className="p-4 text-center">
                          {pf ? (
                            <CheckCircle2 className="mx-auto h-6 w-6 text-success" aria-label="Yes" />
                          ) : (
                            <span className="text-mediumgray" aria-label="No">—</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <p className="mx-auto mt-6 max-w-2xl text-center text-darkgray">
            Premium doesn&apos;t mean expensive — it means you get{' '}
            <strong className="text-navy">everything</strong>: childcare, turf, 24/7 access, and a
            gym that actually knows your name.
          </p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-navy py-20 md:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-7 w-7 fill-warning text-warning" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="font-heading text-2xl font-medium leading-relaxed text-white md:text-3xl">
              &ldquo;Brian&apos;s Gym is the best gym in Sedalia. The staff is friendly and helpful,
              the equipment is always clean and well-maintained, and the atmosphere is welcoming.
              I&apos;ve been a member for years and wouldn&apos;t go anywhere else. It&apos;s like a
              second family!&rdquo;
            </blockquote>
            <cite className="mt-6 block text-lg font-bold not-italic text-primary">
              — Janette S. Morgan, Member
            </cite>
          </Reveal>
        </div>
      </section>

      {/* HOURS STRIP */}
      <section className="bg-white py-16">
        <div className="container-x">
          <Reveal>
            <div className="rounded-lg bg-offwhite p-8 md:p-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-primary" aria-hidden="true" />
                  <div>
                    <h2 className="font-heading text-xl font-bold text-navy">
                      24-Hour Key Card Access
                    </h2>
                    <p className="text-darkgray">Staffed hours below — enter any time with your fob.</p>
                  </div>
                </div>
                <dl className="grid gap-x-8 gap-y-1 text-sm sm:grid-cols-2">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between gap-6">
                      <dt className="font-semibold text-navy">{h.day}</dt>
                      <dd className="text-darkgray">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
