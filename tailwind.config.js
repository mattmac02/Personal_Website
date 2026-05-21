/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#12141c',
          raised: '#181c28',
          overlay: '#1e2433',
        },
        accent: {
          DEFAULT: '#38bdf8',
          muted: '#0ea5e9',
          glow: 'rgba(56, 189, 248, 0.15)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'particle': 'particle 5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        particle: {
          '0%': { transform: 'translateY(80vh) translateX(0)', opacity: '0' },
          '15%': { opacity: '1' },
          '85%': { opacity: '1' },
          '100%': { transform: 'translateY(-10vh) translateX(40px)', opacity: '0' },
        },
      },
      boxShadow: {
        'card': '0 0 0 1px rgba(255,255,255,0.08), 0 4px 24px -4px rgba(0,0,0,0.4)',
        'card-hover': '0 0 0 1px rgba(56,189,248,0.25), 0 8px 32px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(56,189,248,0.2)',
        'glow-sm': '0 0 20px rgba(56, 189, 248, 0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.12)',
      },
    },
  },
  plugins: [],
};
