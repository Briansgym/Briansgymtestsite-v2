'use client';

import { useState } from 'react';

interface TourCategory {
  id: string;
  label: string;
  images: { src: string; alt: string }[];
}

const CATEGORIES: TourCategory[] = [
  {
    id: 'weights-cardio',
    label: 'Weights & Cardio',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
        alt: 'Rows of cardio machines and treadmills at Brian\u2019s Gym',
      },
      {
        src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80',
        alt: 'Free weights and dumbbell rack in the weight area',
      },
      {
        src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
        alt: 'Members strength training with barbells',
      },
    ],
  },
  {
    id: 'functional-turf',
    label: 'Functional Turf',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80',
        alt: '30 by 90 foot indoor functional training turf area',
      },
      {
        src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=800&q=80',
        alt: 'Athlete performing functional training on turf',
      },
      {
        src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
        alt: 'Sled push and functional fitness equipment on turf',
      },
    ],
  },
  {
    id: 'kid-zone',
    label: 'Kid Zone',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=80',
        alt: 'Bright and welcoming Kid Zone childcare area',
      },
      {
        src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80',
        alt: 'Children playing safely in the supervised Kid Zone',
      },
      {
        src: 'https://images.unsplash.com/photo-1560421683-6856ea585c78?auto=format&fit=crop&w=800&q=80',
        alt: 'Toys and play equipment in the Kid Zone',
      },
    ],
  },
  {
    id: 'personal-training',
    label: 'Personal Training',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80',
        alt: 'Certified personal trainer coaching a member',
      },
      {
        src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=800&q=80',
        alt: 'One-on-one personal training session',
      },
      {
        src: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&w=800&q=80',
        alt: 'Trainer guiding a member through proper form',
      },
    ],
  },
];

export default function PhotoTour() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const current = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <div>
      <div
        role="tablist"
        aria-label="Photo tour categories"
        className="flex flex-wrap justify-center gap-3"
      >
        {CATEGORIES.map((cat) => {
          const selected = cat.id === active;
          return (
            <button
              key={cat.id}
              role="tab"
              id={`tab-${cat.id}`}
              aria-selected={selected}
              aria-controls={`panel-${cat.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(cat.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold uppercase tracking-[0.06em] transition-all duration-[250ms] ${
                selected
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-darkgray shadow-sm hover:bg-lightgray'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="mt-10 grid gap-6 md:grid-cols-3"
      >
        {current.images.map((img) => (
          <div
            key={img.src}
            className="group overflow-hidden rounded-lg shadow-md"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-64 w-full object-cover transition-transform duration-[400ms] ease-smooth group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
