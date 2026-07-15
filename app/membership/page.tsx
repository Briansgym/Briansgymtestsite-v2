import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Check,
  ShieldCheck,
  Star,
  CreditCard,
  Landmark,
  Wallet,
  Banknote,
  BadgePercent,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import SectionHeader from '@/components/SectionHeader';
import Reveal from '@/components/Reveal';
import CTABanner from '@/components/CTABanner';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Membership & Pricing',
  description:
    "Brian's Gym membership options: $8 day passes, $35 14-day passes, month-to-month from $55/mo, and online annual specials — $485/yr single, $615/yr couples. Military, senior & teacher discounts.",
  alternates: { canonical: '/membership' },
  openGraph: {
    title: "Membership & Pricing | Brian's Gym",
    description:
      'Day passes, month-to-month memberships, and annual online specials — $485/yr single, $615/yr couples. Discounts for military, seniors, teachers & more.',
    url: `${SITE.url}/membership`,
  },
};

const passes = [
  { name: 'Day Pass', price: '$8', details: 'Full facility access for one day — free weights, cardio & machines, plus locker rooms & showers.' },
  { name: '14-Day Pass', price: '$35', details: '14 consecutive days of full facility access. Great for travelers & visitors.' },
];

const monthly = [
  { type: 'Agreement Single', monthly: 'Contact for rate', enrollment: '$50', details: '1-year agreement · $35 annual maintenance fee' },
  { type: 'Non-Agreement Single', monthly: '$55/mo', enrollment: '$50', details: 'Month-to-month · no contract' },
  { type: 'Non-Agreement Couples', monthly: '$70/mo', enrollment: '$50', details: 'Month-to-month · two members' },
  { type: 'Family Add-On', monthly: '$15/mo per member', enrollment: '—', details: '$45/mo for 3 additional members' },
  { type: 'Kid Zone Add-On', monthly: '$20/mo', enrollment: '—', details: 'Covers 2 children · $15/mo each additional' },
];

const annual = [
  {
    plan: '1-Year Single',
    price: '$485',
    normal: '$571.28/yr',
    savings: 'Save $86+',
    href: SITE.annualLinks.single,
    featured: false,
  },
  {
    plan: '1-Year Couples',
    price: '$615',
    normal: '$766.88/yr',
    savings: 'Save $151+',
    href: SITE.annualLinks.couples,
    featured: true,
  },
];

const discounts = ['Military', 'Law Enforcement', 'Firefighter', 'Teacher', 'Senior', 'Corporate Rates'];

const payments = [
  { icon: CreditCard, label: 'Credit / Debit Cards' },
  { icon: Landmark, label: 'ACH / Bank Draft' },
  { icon: Wallet, label: 'PayPal' },
  { icon: Banknote, label: 'Cash (In-Person)' },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership & Pricing"
        title="Simple, Honest Pricing"
        subtitle="No confusing tiers or hidden fees. Choose a day pass, go month-to-month, or save big with an online annual special."
        image="https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Member working out at Brian's Gym"
      />

      {/* Day passes */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Short-Term Access"
              title="Day & 14-Day Passes"
              description="Not ready to commit? Drop in whenever you like."
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {passes.map((p, i) => (
              <Reveal key={p.name} delay={i * 100}>
                <div className="card h-full p-8 text-center">
                  <h3 className="font-heading text-xl font-bold text-navy">{p.name}</h3>
                  <p className="mt-4 font-heading text-5xl font-black text-primary">{p.price}</p>
                  <p className="mt-4 leading-relaxed text-darkgray">{p.details}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly */}
      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Monthly Memberships"
              title="Flexible Month-to-Month Options"
              description="All memberships include 24-hour key card access. Enrollment is a one-time $50 fee, with a $35 annual maintenance fee per account (not per member)."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-lg border border-lightgray bg-white shadow-md">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-navy text-white">
                    <tr>
                      <th className="p-4 font-semibold">Membership Type</th>
                      <th className="p-4 font-semibold">Monthly</th>
                      <th className="p-4 font-semibold">Enrollment</th>
                      <th className="p-4 font-semibold">Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-lightgray">
                    {monthly.map((m) => (
                      <tr key={m.type}>
                        <td className="p-4 font-bold text-navy">{m.type}</td>
                        <td className="p-4 font-semibold text-primary">{m.monthly}</td>
                        <td className="p-4 text-darkgray">{m.enrollment}</td>
                        <td className="p-4 text-darkgray">{m.details}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <p className="mt-4 text-center text-sm text-darkgray">
            All memberships include 24-hour key card access · Enrollment $50 · $35 annual maintenance
            fee per account
          </p>
        </div>
      </section>

      {/* Annual specials */}
      <section className="bg-white py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Best Value Online"
              title="Annual Online Specials"
              description="Pay for the year up front and save. Available exclusively online."
            />
          </Reveal>
          <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
            {annual.map((a, i) => (
              <Reveal key={a.plan} delay={i * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-lg p-8 text-center shadow-lg ${
                    a.featured ? 'bg-navy text-white ring-2 ring-accent' : 'border border-lightgray bg-white'
                  }`}
                >
                  {a.featured ? (
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-accent px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      <Star className="h-3.5 w-3.5 fill-white" aria-hidden="true" /> Best Value
                    </span>
                  ) : null}
                  <h3 className={`font-heading text-xl font-bold ${a.featured ? 'text-white' : 'text-navy'}`}>
                    {a.plan}
                  </h3>
                  <p className={`mt-4 font-heading text-5xl font-black ${a.featured ? 'text-accent' : 'text-primary'}`}>
                    {a.price}
                    <span className="text-lg font-semibold">/yr</span>
                  </p>
                  <p className={`mt-2 text-sm line-through ${a.featured ? 'text-textlight' : 'text-mediumgray'}`}>
                    Normally {a.normal}
                  </p>
                  <span className="mx-auto mt-3 inline-block rounded-full bg-success/15 px-3 py-1 text-sm font-bold text-success">
                    {a.savings}
                  </span>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 ${a.featured ? 'btn-primary' : 'btn-secondary'}`}
                  >
                    Buy Online
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Discounts */}
      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              center
              eyebrow="Save More"
              title="Discounts for Those Who Serve & More"
              description="We proudly offer special rates. Valid ID required — inquire at info@briansgym.com."
            />
          </Reveal>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {discounts.map((d, i) => (
              <Reveal key={d} delay={i * 60}>
                <div className="flex items-center gap-3 rounded-lg bg-white p-5 shadow-sm">
                  <BadgePercent className="h-6 w-6 flex-shrink-0 text-accent" aria-hidden="true" />
                  <span className="font-semibold text-navy">{d}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="bg-white py-16">
        <div className="container-x">
          <Reveal>
            <div className="rounded-lg border border-lightgray p-8 md:p-10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-primary" aria-hidden="true" />
                <h2 className="font-heading text-xl font-bold text-navy">Payment Methods Accepted</h2>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {payments.map((p) => (
                  <div key={p.label} className="flex items-center gap-3 text-darkgray">
                    <p.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <span className="font-semibold">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title="Try Before You Join"
        subtitle="Start with a free 3-day trial — experience everything before you commit to a membership."
      />
    </>
  );
}
