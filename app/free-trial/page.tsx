import type { Metadata } from 'next';
import { CheckCircle2, MapPin, Clock, CalendarCheck } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import TrialForm from '@/components/TrialForm';
import { SITE, HOURS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Free 3-Day Trial',
  description:
    "Claim your free 3-day trial pass at Brian's Gym in Sedalia, MO. No commitment, no credit card required. Experience 26,000 sq ft, 24-hour access, and more.",
  alternates: { canonical: '/free-trial' },
  openGraph: {
    title: "Free 3-Day Trial | Brian's Gym",
    description:
      'No commitment, no credit card. Try Sedalia’s largest gym free for 3 days.',
    url: `${SITE.url}/free-trial`,
  },
};

const included = [
  'Full access to 26,000 sq ft facility',
  '24-hour key card access during trial',
  '40+ cardio machines & free weights',
  '30×90 functional turf area',
  'Locker rooms & showers',
  'A friendly tour from our team',
];

export default function FreeTrialPage() {
  return (
    <>
      <PageHero
        eyebrow="No Commitment. No Credit Card."
        title="Start Your Free 3-Day Trial"
        subtitle="Experience everything Brian's Gym has to offer — completely free for 3 days. Fill out the form and we'll get you started."
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Motivated members training at Brian's Gym"
      />

      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            <div className="rounded-lg bg-white p-8 shadow-md md:p-10">
              <h2 className="section-title section-underline text-navy">Request Your Free Pass</h2>
              <p className="mt-6 text-darkgray">
                Complete the form below and a member of our team will reach out to set up your
                3-day trial. Fields marked with <span className="text-primary">*</span> are required.
              </p>
              <div className="mt-8">
                <TrialForm />
              </div>
            </div>
          </Reveal>

          {/* Sidebar */}
          <Reveal delay={100} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-navy p-8 text-white">
                <h3 className="flex items-center gap-2 font-heading text-xl font-bold">
                  <CalendarCheck className="h-6 w-6 text-primary" aria-hidden="true" /> What&apos;s Included
                </h3>
                <ul className="mt-5 space-y-3">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-textlight">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-success" aria-hidden="true" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-lg border border-lightgray bg-white p-8">
                <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-navy">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" /> Visit Us
                </h3>
                <p className="mt-3 text-darkgray">
                  {SITE.address.street}
                  <br />
                  {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                </p>
                <h4 className="mt-6 flex items-center gap-2 font-heading text-base font-bold text-navy">
                  <Clock className="h-5 w-5 text-primary" aria-hidden="true" /> Staffed Hours
                </h4>
                <dl className="mt-3 space-y-1 text-sm">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4">
                      <dt className="font-semibold text-navy">{h.day}</dt>
                      <dd className="text-right text-darkgray">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
