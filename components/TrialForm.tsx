'use client';

import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { SITE } from '@/lib/site';

const REFERRAL_OPTIONS = [
  'Google Search',
  'Facebook',
  'Instagram',
  'Friend or Family',
  'Drove By',
  'Newspaper / Ad',
  'Other',
];

export default function TrialForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(SITE.formspree.trial, {
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
        <h3 className="mt-4 font-heading text-2xl font-bold text-navy">You&apos;re All Set!</h3>
        <p className="mt-2 text-darkgray">
          Thanks for requesting your free 3-day trial. Our team will reach out shortly to get you
          started. See you at the gym!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-semibold text-navy">
            First Name <span className="text-primary">*</span>
          </label>
          <input
            id="firstName"
            name="First Name"
            type="text"
            required
            autoComplete="given-name"
            className="w-full rounded-md border border-lightgray px-4 py-3 text-ink focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-semibold text-navy">
            Last Name <span className="text-primary">*</span>
          </label>
          <input
            id="lastName"
            name="Last Name"
            type="text"
            required
            autoComplete="family-name"
            className="w-full rounded-md border border-lightgray px-4 py-3 text-ink focus:border-primary"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
            Email <span className="text-primary">*</span>
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
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
            Phone <span className="text-primary">*</span>
          </label>
          <input
            id="phone"
            name="Phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full rounded-md border border-lightgray px-4 py-3 text-ink focus:border-primary"
          />
        </div>
      </div>

      <div>
        <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-navy">
          Address
        </label>
        <input
          id="address"
          name="Address"
          type="text"
          autoComplete="street-address"
          className="w-full rounded-md border border-lightgray px-4 py-3 text-ink focus:border-primary"
        />
      </div>

      <div>
        <label htmlFor="referral" className="mb-1.5 block text-sm font-semibold text-navy">
          How did you hear about us?
        </label>
        <select
          id="referral"
          name="How did you hear about us?"
          defaultValue=""
          className="w-full rounded-md border border-lightgray bg-white px-4 py-3 text-ink focus:border-primary"
        >
          <option value="" disabled>
            Select an option
          </option>
          {REFERRAL_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
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
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Submitting…
          </>
        ) : (
          'Claim My Free Trial'
        )}
      </button>
    </form>
  );
}
