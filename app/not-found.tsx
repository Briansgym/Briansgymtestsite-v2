import Link from 'next/link';
import { Home, Dumbbell } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-navy px-6 pt-[72px] text-center">
      <div>
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-md bg-accent">
          <Dumbbell className="h-9 w-9 text-white" aria-hidden="true" />
        </span>
        <p className="mt-8 font-heading text-7xl font-black text-white">404</p>
        <h1 className="mt-4 font-heading text-2xl font-bold text-white">Page Not Found</h1>
        <p className="mx-auto mt-3 max-w-md text-textlight">
          Looks like this page skipped leg day. Let&apos;s get you back on track.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <Home className="h-4 w-4" aria-hidden="true" /> Back to Home
        </Link>
      </div>
    </section>
  );
}
