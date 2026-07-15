import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette = darkened versions of briansgym.com's real Avada palette
        // (brand blue #2c79bf, navy #212934, gold/amber #c0830b).
        // No invented accent colors — same hue family, deeper/premium feel.
        primary: {
          DEFAULT: '#1e5a99', // darkened #2c79bf (brand blue)
          light: '#2c79bf',   // real brand blue
          dark: '#143d6b',    // darkened #105378 (deep blue)
        },
        navy: {
          DEFAULT: '#1c232b', // darkened #212934 (real site navy)
          light: '#262f39',
          medium: '#303a45',
          surface: '#171d24',
        },
        accent: {
          DEFAULT: '#ad750a', // darkened #c0830b (site gold/amber)
          dark: '#94620a',    // darker gold for hover
        },
        offwhite: '#f6f6f6', // real site light bg #f6f6f6
        lightgray: '#ebeaea', // real site #ebeaea
        mediumgray: '#747474', // real site #747474
        darkgray: '#4a4e57',   // darkened #434c50
        ink: '#1e293b',
        textlight: '#cbd5e1',
        success: '#10b981',
        warning: {
          DEFAULT: '#f59e0b',
          dark: '#d98207',
        },
        danger: '#ef4444',
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-pt-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
        '4xl': '6rem',
        '5xl': '8rem',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
        xl: '28px',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 3px rgba(0,0,0,0.12)',
        md: '0 4px 16px rgba(0,0,0,0.15)',
        lg: '0 8px 32px rgba(0,0,0,0.2)',
        xl: '0 16px 48px rgba(0,0,0,0.25)',
        glow: '0 0 30px rgba(30, 90, 153, 0.35)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
