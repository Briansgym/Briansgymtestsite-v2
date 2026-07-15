import type { Metadata } from 'next';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CreditCard,
  Landmark,
  Wallet,
  Banknote,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import { SITE, HOURS } from '@/lib/site';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact & Location',
  description:
    "Contact Brian's Gym at 1020 Thompson Blvd, Sedalia, MO 65301. Call 660-829-0997 or email info@briansgym.com. Staffed hours, directions, and payment methods.",
  alternates: { canonical: '/contact' },
  openGraph: {
    title: "Contact & Location | Brian's Gym",
    description:
      'Visit us at 1020 Thompson Blvd, Sedalia, MO 65301. Call 660-829-0997 or send us a message.',
    url: `${SITE.url}/contact`,
  },
};

const payments = [
  { icon: CreditCard, label: 'Credit / Debit Cards' },
  { icon: Landmark, label: 'ACH / Bank Draft' },
  { icon: Wallet, label: 'PayPal' },
  { icon: Banknote, label: 'Cash (In-Person)' },
];

export default function ContactPage() {
  const mapQuery = encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.state} ${SITE.address.zip}`
  );

  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Brian's Gym"
        subtitle="Have a question or ready to join? We'd love to hear from you. Stop by, call, or send us a message."
        image="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Interior of Brian's Gym in Sedalia"
      />

      <section className="bg-white py-20 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          {/* Info */}
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="section-title section-underline text-navy">Visit or Reach Us</h2>
              </div>
              <ul className="space-y-5 text-darkgray">
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold text-navy">Address</span>
                    {SITE.address.street}
                    <br />
                    {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold text-navy">Phone</span>
                    <a href={SITE.phoneHref} className="hover:text-accent">
                      {SITE.phone}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-bold text-navy">Email</span>
                    <a href={`mailto:${SITE.email}`} className="hover:text-accent">
                      {SITE.email}
                    </a>
                  </span>
                </li>
              </ul>

              <div className="rounded-lg border border-lightgray p-6">
                <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-navy">
                  <Clock className="h-5 w-5 text-primary" aria-hidden="true" /> Staffed Hours
                </h3>
                <dl className="mt-4 space-y-2 text-sm">
                  {HOURS.map((h) => (
                    <div key={h.day} className="flex justify-between gap-4 border-b border-lightgray/60 pb-2 last:border-0">
                      <dt className="font-semibold text-navy">{h.day}</dt>
                      <dd className="text-right text-darkgray">{h.hours}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-3 text-xs text-mediumgray">
                  24-hour key card access for all members.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={100} className="lg:col-span-3">
            <div className="rounded-lg bg-offwhite p-8 shadow-md md:p-10">
              <h2 className="font-heading text-2xl font-bold text-navy">Send Us a Message</h2>
              <p className="mt-2 text-darkgray">
                Fields marked with <span className="text-accent">*</span> are required.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-offwhite pb-20">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-lg shadow-md">
              <iframe
                title="Map to Brian's Gym in Sedalia, Missouri"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Payment methods */}
      <section className="bg-white py-16">
        <div className="container-x">
          <Reveal>
            <h2 className="section-title section-underline-center text-center text-navy">
              Payment Methods
            </h2>
            <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {payments.map((p) => (
                <div
                  key={p.label}
                  className="flex flex-col items-center gap-3 rounded-lg border border-lightgray p-6 text-center"
                >
                  <p.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                  <span className="text-sm font-semibold text-navy">{p.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
