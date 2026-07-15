import Link from 'next/link';
import Reveal from './Reveal';

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = 'Ready to Start Your Fitness Journey?',
  subtitle = 'Try Brian’s Gym free for 3 days — no commitment, no credit card required.',
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-primary-light py-16 md:py-20">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_30%,white,transparent_45%)]" />
      <div className="container-x relative text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-extrabold text-white md:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">{subtitle}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/free-trial" className="btn-primary">
              Start Free Trial
            </Link>
            <Link href="/membership" className="btn-outline">
              View Membership
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
