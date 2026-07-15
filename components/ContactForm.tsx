'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { SITE } from '@/lib/site';

const SUBJECTS = [
  'Membership Question',
  'Free Trial',
  'Personal Training',
  'Kid Zone / Childcare',
  'SilverSneakers',
  'Billing',
  'Other',
];

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(SITE.formspree.contact, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-success/30 bg-success/10 p-8 text-center">
        <CheckCircle2 className="mx-auto h-14 w-14 text-success" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-navy">Message Sent!</h3>
        <p className="mt-2 text-darkgray">
          Thanks for reaching out. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
            Name <span className="text-primary">*</span>
          </label>
          <input
            id="name"
            name="Name"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-md border border-lightgray px-4 py-3 text-ink focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="Email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-md border border-lightgray px-4 py-3 text-ink focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
            Phone
          </label>
          <input
            id="phone"
            name="Phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-md border border-lightgray px-4 py-3 text-ink focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold text-navy">
            Subject
          </label>
          <select
            id="subject"
            name="Subject"
            defaultValue=""
            className="w-full rounded-md border border-lightgray bg-white px-4 py-3 text-ink focus:border-primary"
          >
            <option value="" disabled>
              Select a subject
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-navy">
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="message"
          name="Message"
          required
          rows={5}
          className="w-full rounded-md border border-lightgray px-4 py-3 text-ink focus:border-primary"
        />
      </div>

      {status === 'error' ? (
        <p className="rounded-md bg-danger/10 px-4 py-3 text-sm font-semibold text-danger" role="alert">
          Something went wrong. Please try again or call us at {SITE.phone}.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
