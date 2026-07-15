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
        primary: {
          DEFAULT: '#1e5a99',
          light: '#2c79bf',
          dark: '#143d6b',
        },
        navy: {
          DEFAULT: '#070f1d',
          light: '#0b1a30',
          medium: '#102240',
          surface: '#0c1424',
        },
        accent: {
          DEFAULT: '#e63946',
          dark: '#c92b38',
        },
        offwhite: '#f0f4f8',
        lightgray: '#e2e8f0',
        mediumgray: '#94a3b8',
        darkgray: '#475569',
        ink: '#1e293b',
        textlight: '#cbd5e1',
        success: '#10b981',
        warning: '#f59e0b',
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
