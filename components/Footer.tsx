import Link from 'next/link';
import { Dumbbell, Facebook, Instagram, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { NAV_LINKS, SITE, HOURS } from '@/lib/site';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-textlight">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2 text-white" aria-label="Brian's Gym home">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
              <Dumbbell className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="font-heading text-xl font-extrabold">Brian&apos;s Gym</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            {SITE.tagline}. Locally owned and operated for {SITE.yearsInBusiness} years —{' '}
            {SITE.facilitySize} of premium fitness with 24-hour access.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Brian's Gym on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-medium text-white transition-colors hover:bg-primary"
            >
              <Facebook className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Brian's Gym on Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-medium text-white transition-colors hover:bg-primary"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Brian's Gym on YouTube"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-medium text-white transition-colors hover:bg-primary"
            >
              <Youtube className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-white">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/free-trial" className="transition-colors hover:text-primary">
                Free Trial
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold text-white">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <a href={SITE.phoneHref} className="hover:text-primary">
                {SITE.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="flex items-center gap-2 font-heading text-lg font-bold text-white">
            <Clock className="h-5 w-5 text-primary" aria-hidden="true" /> Staffed Hours
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {HOURS.map((h) => (
              <li key={h.day} className="flex flex-col">
                <span className="font-semibold text-white">{h.day}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-mediumgray">
            24-hour key card access for all members.
          </p>
        </div>
      </div>

      <div className="border-t border-navy-medium">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-mediumgray md:flex-row">
          <p>
            &copy; {year} Brian&apos;s Gym. All rights reserved. {SITE.address.city},{' '}
            {SITE.address.state}.
          </p>
          <p>Accepted: {SITE.paymentMethods.join(' · ')}</p>
        </div>
      </div>
    </footer>
  );
}
