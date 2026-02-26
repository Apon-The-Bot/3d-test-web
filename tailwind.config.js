/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#06080d',
          900: '#0b1018',
          800: '#101726',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.1), 0 12px 40px rgba(0,0,0,0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
