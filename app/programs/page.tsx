import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Dumbbell,
  Baby,
  HeartPulse,
  Activity,
  Grid3x3,
  Weight,
  DoorClosed,
  ShieldCheck,
  Maximize,
  ArrowRight,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Programs & Amenities',
  description:
    "Explore Brian's Gym programs — certified personal training, Kid Zone childcare, and SilverSneakers — plus 40+ cardio machines, a 30×90 functional turf, free weights, and security-monitored facilities.",
  alternates: { canonical: '/programs' },
  openGraph: {
    title: "Programs & Amenities | Brian's Gym",
    description:
      'Personal training, Kid Zone childcare, SilverSneakers, 40+ cardio pieces, and a 30×90 functional turf.',
    url: `${SITE.url}/programs`,
  },
};

const programs = [
  {
    icon: Dumbbell,
    title: 'Personal Training',
    text: 'Work one-on-one with our certified trainers on a plan built for your goals. New members get 3 sessions for $75, and your first interview is always free.',
    href: '/personal-training',
    cta: 'Explore Training',
  },
  {
    icon: Baby,
    title: 'Kid Zone Child Watch',
    text: 'The only gym in Sedalia with on-site childcare. Just $20/mo covers two children ($15/mo each additional), so parents never have to skip a workout.',
    href: '/membership',
    cta: 'See Pricing',
  },
  {
    icon: HeartPulse,
    title: 'SilverSneakers & Healthy Contributions',
    text: 'We proudly accept SilverSneakers and Healthy Contributions — the only gym in Sedalia to do so. Contact us to verify your eligibility and get started at no cost.',
    href: '/contact',
    cta: 'Verify Eligibility',
  },
];

const amenities = [
  { icon: Maximize, label: '26,000 sq ft of fitness space' },
  { icon: Activity, label: '40+ cardio pieces' },
  { icon: Grid3x3, label: '30×90 indoor functional turf' },
  { icon: Weight, label: 'Full free weights area' },
  { icon: Dumbbell, label: 'Comprehensive weight machines' },
  { icon: DoorClosed, label: 'Locker rooms & showers' },
  { icon: ShieldCheck, label: 'Indoor & lot security monitored' },
  { icon: Baby, label: 'Kid Zone childcare area' },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs & Amenities"
        title="More Programs. More Space. More Value."
        subtitle="From certified personal training to the only Kid Zone in Sedalia, Brian's Gym gives you everything a franchise can't."
        image="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Functional training equipment on the turf at Brian's Gym"
      />

      {/* Programs */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Our Programs"
              title="Programs for Every Goal"
              description="Whatever brought you here, we have a program to help you reach the next level."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {programs.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card flex h-full flex-col p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <p.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-navy">{p.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-darkgray">{p.text}</p>
                  <Link
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary hover:text-primary-dark"
                  >
                    {p.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-navy py-20 md:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeader
                light
                eyebrow="Facility Amenities"
                title="26,000 Sq Ft of Everything You Need"
                description="The largest, most complete fitness facility in Sedalia — every square foot designed to help you train harder and feel at home."
              />
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {amenities.map((a) => (
                  <li key={a.label} className="flex items-center gap-3 text-textlight">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-primary/20 text-primary-light">
                      <a.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-sm font-semibold">{a.label}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded-lg shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
                    alt="Row of cardio machines inside Brian's Gym"
                    className="h-56 w-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80"
                      alt="Free weights and dumbbells"
                      className="h-40 w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
                      alt="Indoor functional turf training area"
                      className="h-40 w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner
        title="Come See It for Yourself"
        subtitle="Tour the largest gym in Sedalia with a free 3-day trial — no commitment, no credit card."
      />
    </>
  );
}
