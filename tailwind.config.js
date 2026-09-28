/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      surface: '#ffffff',
      panel: '#f6f7f9',
      ink: '#111827',
      muted: '#526072',
      border: '#d8dee7',
      primary: { DEFAULT: '#174ea6', dark: '#123d82' },
      accent: '#f4b942',
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
