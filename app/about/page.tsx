import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Sparkles, HeartPulse, BadgePercent, Users, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Us — Locally Owned for 20+ Years',
  description:
    "Brian's Gym is a locally owned, community-focused fitness facility in Sedalia, MO — not a franchise. Welcoming beginners, serious lifters, seniors, and parents for over 20 years.",
  alternates: { canonical: '/about' },
  openGraph: {
    title: "About Brian's Gym | Locally Owned for 20+ Years",
    description:
      "A community gym where everybody knows your name. Locally owned and operated in Sedalia, MO for over 20 years.",
    url: `${SITE.url}/about`,
  },
};

const badges = [
  { icon: Heart, title: 'Locally Owned', text: 'Family-run for 20+ years — not a corporate franchise.' },
  { icon: Sparkles, title: 'Clean & Well-Maintained', text: 'Spotless equipment and facilities, every single day.' },
  { icon: HeartPulse, title: 'SilverSneakers Accepted', text: 'The only gym in Sedalia accepting SilverSneakers & Healthy Contributions.' },
  { icon: BadgePercent, title: 'Military & Senior Discounts', text: 'Special rates for those who serve and our seniors.' },
];

const audiences = [
  { title: 'Beginners', text: 'Nervous about starting? Our staff makes your first day easy and judgment-free.' },
  { title: 'Serious Lifters', text: 'Full free-weight area, machines, and 26,000 sq ft to chase every PR.' },
  { title: 'Seniors', text: 'SilverSneakers accepted, low-impact options, and a friendly community.' },
  { title: 'Parents', text: 'Our Kid Zone childcare means you never have to skip a workout again.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Where Everybody Knows Your Name"
        subtitle="For over 20 years, Brian's Gym has been Sedalia's community fitness home — locally owned, welcoming, and built for everyone."
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Members training together at Brian's Gym"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeader
              eyebrow="Locally Owned & Operated"
              title="A Community Gym, Not a Franchise"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-darkgray">
              <p>
                Brian&apos;s Gym has proudly served Sedalia, Missouri for more than 20 years. We&apos;re
                locally owned and operated — which means the people you see at the front desk are your
                neighbors, not a call center.
              </p>
              <p>
                Unlike the big franchises, we reinvest in our community and our members. That&apos;s why
                we offer the things no other gym in Sedalia does: on-site childcare, functional turf,
                24-hour access, and SilverSneakers. We know our members by name, and we&apos;re proud of
                the second-family atmosphere that keeps them coming back year after year.
              </p>
              <p>
                Whether you&apos;re lacing up for the very first time or you&apos;ve been lifting for
                decades, there&apos;s a place for you here.
              </p>
            </div>
            <Link href="/free-trial" className="btn-primary mt-8">
              Start Your Free Trial
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-lg shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=80"
                alt="The functional turf and training floor at Brian's Gym"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Badges */}
      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="What Sets Us Apart"
              title="The Brian's Gym Difference"
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {badges.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="card h-full p-8 text-center">
                  <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <b.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-darkgray">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Welcoming to all */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Everyone's Welcome"
              title="Built for Every Fitness Level"
              description="No intimidation. No judgment. Just a welcoming space for the whole community."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <div className="h-full rounded-lg border border-lightgray p-6">
                  <Users className="h-8 w-8 text-accent" aria-hidden="true" />
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-darkgray">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location teaser */}
      <section className="bg-navy py-16">
        <div className="container-x">
          <Reveal className="flex flex-col items-center gap-4 text-center">
            <MapPin className="h-8 w-8 text-accent" aria-hidden="true" />
            <p className="font-heading text-2xl font-bold text-white">
              {SITE.address.street}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
            </p>
            <Link href="/contact" className="btn-outline mt-2">
              Get Directions
            </Link>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
