import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        headings: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Наша нова централізована палітра
        'cream': '#F7F4EB',         // Фон
        'anthracite': '#1C1E26',     // Контраст / Текст
        'anthracite-light': '#33302E', // Світлий текст
        'gold': '#FFD700',          // Акцент / CTA
        'gray-light': '#A8A8B3',    // Вторинний текст
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(255, 215, 0, 0.4), 0 0 25px rgba(255, 215, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
