import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Award,
  Package,
  Users,
  MessageSquare,
  ClipboardList,
  TrendingUp,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Personal Training',
  description:
    "Certified personal trainers at Brian's Gym in Sedalia, MO. New member special: 3 sessions for $75. Free initial consultation, custom plans, and support for every fitness level.",
  alternates: { canonical: '/personal-training' },
  openGraph: {
    title: "Personal Training | Brian's Gym",
    description:
      'Certified trainers, custom plans, and a free initial consultation. New members: 3 sessions for $75.',
    url: `${SITE.url}/personal-training`,
  },
};

const steps = [
  {
    icon: MessageSquare,
    title: 'Free Interview',
    text: 'Sit down with a certified trainer at no cost to talk about your goals, history, and what success looks like for you.',
  },
  {
    icon: ClipboardList,
    title: 'Custom Plan',
    text: 'Your trainer builds a personalized program tailored to your body, schedule, and objectives.',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Support',
    text: 'Regular sessions, accountability, and adjustments as you progress toward your goals.',
  },
];

const badges = [
  { icon: Award, title: 'Certified Trainers', text: 'Qualified, experienced professionals.' },
  { icon: Package, title: 'Flexible Packages', text: 'Options to fit your budget and schedule.' },
  { icon: Users, title: 'All Fitness Levels', text: 'From first-timers to seasoned athletes.' },
  { icon: MessageSquare, title: 'Free Consultation', text: 'Your initial interview is always free.' },
];

export default function PersonalTrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Personal Training"
        title="Reach Your Goals Faster"
        subtitle="Work one-on-one with certified trainers who build a plan around you. New members: 3 sessions for just $75."
        image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Personal trainer coaching a member at Brian's Gym"
      />

      {/* Special offer */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <SectionHeader
                eyebrow="New Member Special"
                title="3 Sessions for $75"
                description="Kickstart your journey with three personal training sessions for one low price. It's the perfect way to learn proper form, build a plan, and get real momentum."
              />
              <ul className="mt-6 space-y-3 text-darkgray">
                <li className="flex items-center gap-3">
                  <span className="font-heading text-2xl font-black text-primary">$0</span>
                  <span>Free initial consultation & interview</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-heading text-2xl font-black text-primary">$75</span>
                  <span>3 sessions for new members</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-heading text-lg font-black text-primary">Flexible</span>
                  <span>Ongoing packages — contact us for pricing</span>
                </li>
              </ul>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-primary">
                  Book Free Interview
                </Link>
                <a href={SITE.phoneHref} className="btn-ghost">
                  Call {SITE.phone}
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-lg shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=900&q=80"
                  alt="One-on-one personal training session in progress"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-navy py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader center light eyebrow="How It Works" title="Three Simple Steps" />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <div className="relative h-full rounded-lg bg-navy-light p-8">
                  <span className="absolute right-6 top-6 font-heading text-5xl font-black text-primary/30">
                    {i + 1}
                  </span>
                  <span className="flex h-14 w-14 items-center justify-center rounded-md bg-accent/15 text-accent">
                    <s.icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-xl font-bold text-white">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-textlight">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training for every level */}
      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="For Everyone"
              title="Training for Every Level"
              description="Whether you're picking up a dumbbell for the first time or training for competition, our trainers meet you where you are."
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

      <CTABanner
        title="Ready to Train with a Pro?"
        subtitle="Book your free interview today and claim the new member special — 3 sessions for $75."
      />
    </>
  );
}
