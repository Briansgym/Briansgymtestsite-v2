import type { ReactNode } from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`section-title ${center ? 'section-underline-center' : 'section-underline'} ${
          light ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-6 text-lg leading-relaxed ${light ? 'text-textlight' : 'text-darkgray'}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
