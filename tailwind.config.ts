import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: 'var(--au-ink)',
          2: 'var(--au-ink-2)',
          3: 'var(--au-ink-3)',
        },
        paper: {
          DEFAULT: 'var(--au-paper)',
          2: 'var(--au-paper-2)',
        },
        surface: 'var(--au-surface)',
        rule: {
          DEFAULT: 'var(--au-rule)',
          soft: 'var(--au-rule-soft)',
        },
        copper: {
          DEFAULT: 'var(--au-copper)',
          text: 'var(--au-copper-text)',
          soft: 'var(--au-copper-soft)',
        },
        data: 'var(--au-data)',
        positive: 'var(--au-positive)',
        attention: 'var(--au-attention)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(2.5rem, 6.2vw, 4.75rem)', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        title: ['clamp(1.75rem, 3.4vw, 2.5rem)', { lineHeight: '1.14', letterSpacing: '-0.02em' }],
        measure: ['clamp(3rem, 9vw, 6rem)', { lineHeight: '0.94', letterSpacing: '-0.035em' }],
      },
      spacing: {
        section: 'var(--au-space-7)',
        block: 'var(--au-space-5)',
      },
      maxWidth: {
        prose: '64ch',
      },
      transitionTimingFunction: {
        au: 'var(--au-ease)',
      },
      transitionDuration: {
        micro: '180ms',
        enter: '520ms',
      },
      borderRadius: {
        // Deliberately near-square: this brand reads as instrumentation, not app UI.
        DEFAULT: '2px',
        sm: '1px',
        lg: '3px',
      },
    },
  },
  plugins: [],
};

export default config;
