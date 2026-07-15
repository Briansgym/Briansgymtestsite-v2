'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  format?: boolean;
}

export default function StatCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  label,
  format = false,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (prefersReduced) {
        setValue(end);
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  const display = format ? value.toLocaleString('en-US') : value.toString();

  return (
    <div ref={ref} className="text-center">
      <div className="font-heading text-4xl font-extrabold text-white md:text-5xl">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-textlight">
        {label}
      </div>
    </div>
  );
}
