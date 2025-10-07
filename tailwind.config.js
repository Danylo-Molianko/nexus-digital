/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'aurora-pulse': 'aurora-pulse 8s ease-in-out infinite',
      },
      keyframes: {
        'aurora-pulse': {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1) translateX(0) translateY(0)',
          },
          '25%': {
            opacity: '0.6',
            transform: 'scale(1.1) translateX(10px) translateY(-15px)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.2) translateX(-10px) translateY(10px)',
          },
          '75%': {
            opacity: '0.5',
            transform: 'scale(1.05) translateX(15px) translateY(-5px)',
          },
        },
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}