'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Dumbbell, Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, SITE } from '@/lib/site';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Home page has a dark hero that the transparent header sits over.
  const overHero = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || !overHero || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-[250ms] ease-smooth ${
        solid ? 'bg-navy/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-white"
          aria-label="Brian's Gym home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-accent">
            <Dumbbell className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="font-heading text-xl font-extrabold tracking-tight">
            Brian&apos;s Gym
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                  active
                    ? 'text-accent'
                    : 'text-white/90 hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-accent"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link href="/free-trial" className="btn-primary !px-6 !py-2.5">
            Free Trial
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-navy lg:hidden transition-[max-height] duration-300 ease-smooth ${
          open ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? 'page' : undefined}
                className={`rounded-md px-4 py-3 text-base font-semibold ${
                  active ? 'bg-navy-medium text-accent' : 'text-white hover:bg-navy-light'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-white"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {SITE.phone}
          </a>
          <Link href="/free-trial" className="btn-primary mt-2 w-full">
            Start Free Trial
          </Link>
        </nav>
      </div>
    </header>
  );
}
