/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headings: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'aurora-pulse': 'aurora-pulse 6s ease-in-out infinite alternate',
      },
      keyframes: {
        'aurora-pulse': {
          '0%': { 
            opacity: '0.3',
            transform: 'scale(1) translateX(0px) translateY(0px)'
          },
          '50%': { 
            opacity: '0.6',
            transform: 'scale(1.1) translateX(10px) translateY(-5px)'
          },
          '100%': { 
            opacity: '0.4',
            transform: 'scale(0.95) translateX(-5px) translateY(10px)'
          }
        }
      }
    },
  },
  plugins: [],
}
