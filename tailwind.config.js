/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      surface: '#070A12',
      panel: '#0B1020',
      ink: '#F4F7FF',
      muted: '#A8B1C7',
      border: '#202A42',
      primary: { DEFAULT: '#9AA8FF', dark: '#7F8FF2' },
      accent: '#62E6D2',
      slate: {
        100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8',
        500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617',
      },
    },
    fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
    extend: {
      spacing: { 18: '4.5rem', 22: '5.5rem', 28: '7rem' },
      maxWidth: { prose: '68ch' },
    },
  },
  plugins: [],
}
