/** @type {import('tailwindcss').Config} */
// Colors reference CSS custom properties in src/styles/tokens.css —
// tokens.css is the single source of truth (visual-language-v2 §7.4).
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1600px',
    },
    fontFamily: {
      display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      body: ['Jost', 'system-ui', 'sans-serif'],
      mono: ['ui-monospace', 'monospace'],
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: 'var(--cream)',
          deep: 'var(--cream-deep)',
        },
        panel: 'var(--panel)',
        ink: {
          DEFAULT: 'var(--ink)',
          // legacy shades used by not-yet-reskinned v2 components
          400: 'var(--mist)',
          500: 'var(--ink)',
          700: 'var(--ink)',
        },
        stone: 'var(--stone)',
        mist: 'var(--mist)',
        faint: 'var(--faint)',
        coral: {
          DEFAULT: 'var(--coral)',
          // legacy shades
          100: 'var(--cream-deep)',
          300: 'var(--coral)',
          500: 'var(--coral)',
          700: 'var(--coral-deep)',
          deep: 'var(--coral-deep)',
        },
        line: 'var(--line)',
        // legacy palettes kept as aliases until propagation pass finishes
        sand: {
          50: 'var(--cream)',
          100: 'var(--cream-deep)',
          200: 'var(--line)',
          300: 'var(--line)',
          500: 'var(--faint)',
          700: 'var(--mist)',
        },
        bone: {
          50: 'var(--cream)',
          100: 'var(--cream)',
          200: 'var(--cream-deep)',
          300: 'var(--line)',
        },
      },
      letterSpacing: {
        eyebrow: '0.22em',
        wide2: '0.18em',
      },
      maxWidth: {
        measure: '34rem',
        wrap: '1440px',
      },
      transitionTimingFunction: {
        soft: 'var(--ease-soft)',
        organic: 'var(--ease-organic)',
      },
      animation: {
        'ambient-zoom': 'ambient-zoom 16s ease-in-out infinite alternate',
      },
      keyframes: {
        'ambient-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/typography'),
  ],
};
