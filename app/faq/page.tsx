import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import Accordion from '@/components/Accordion';
import JsonLd from '@/components/JsonLd';
import CTABanner from '@/components/CTABanner';
import { SITE, FAQS } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description:
    "Answers to common questions about Brian's Gym in Sedalia, MO — hours, contracts, childcare, discounts, enrollment fees, free trials, personal training, SilverSneakers, and cancellation.",
  alternates: { canonical: '/faq' },
  openGraph: {
    title: "FAQ | Brian's Gym",
    description:
      'Everything you need to know about membership, hours, childcare, discounts, and more.',
    url: `${SITE.url}/faq`,
  },
};

export default function FAQPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />

      <PageHero
        eyebrow="Questions & Answers"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about membership, hours, childcare, and more. Still have a question? We're happy to help."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80"
        imageAlt="Members and equipment at Brian's Gym"
      />

      <section className="bg-offwhite py-20 md:py-24">
        <div className="container-x">
          <Reveal>
            <Accordion items={FAQS} />
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-12 max-w-3xl rounded-lg bg-white p-8 text-center shadow-md">
              <h2 className="font-heading text-2xl font-bold text-navy">Still have questions?</h2>
              <p className="mt-2 text-darkgray">
                Give us a call or send a message — our team is happy to help.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a href={SITE.phoneHref} className="btn-secondary">
                  <Phone className="h-4 w-4" aria-hidden="true" /> {SITE.phone}
                </a>
                <Link href="/contact" className="btn-ghost">
                  Contact Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
