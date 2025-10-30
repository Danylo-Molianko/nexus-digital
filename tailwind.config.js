import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* === СТРАТЕГІЧНА ПАЛІТРА NEXUS (TAILWIND) ===
          Ми замінюємо 'cream', 'anthracite', 'gold' на нову, більш глибоку палітру.
        */
        
        // 1. Основа (Темна Матерія)
        'nexus-dark-void': '#0A001F',    // Глибокий, космічний фіолетовий. Головний фон.
        'nexus-dark-primary': '#11052C', // Трохи світліший фон для карт та секцій.
        
        // 2. Акцент (Золото Nexus з Логотипу)
        'nexus-gold': '#C78B0C',         // Преміальне золото. Для CTA та іконок.
        'nexus-gold-hover': '#E0A42D',   // Яскравіше золото для hover.
        
        // 3. Інновації (Технології)
        'nexus-tech-blue': '#00BFFF',   // Яскравий, неоновий блакитний для акцентів ШІ.
        'nexus-tech-purple': '#6A0DAD', // Глибокий фіолетовий для градієнтів.
        
        // 4. Текст (Читабельність)
        'nexus-text-primary': '#D0D0D0',   // Світло-сірий для основного тексту.
        'nexus-text-secondary': '#8A8A9E', // Приглушений сірий для підзаголовків.
        'nexus-text-headings': '#FFFFFF',    // Чистий білий для головних заголовків.
        
        // 5. Скло (Glassmorphism)
        'nexus-glass-bg': 'rgba(17, 5, 44, 0.5)',    // Фон для "скляних" карт (на основі dark-primary)
        'nexus-glass-border': 'rgba(255, 255, 255, 0.1)', // Ледь помітна біла рамка
      },
      fontFamily: {
        // ПІДТВЕРДЖЕНО: Шрифти сильні. Залишаємо.
        sans: ['Inter', 'sans-serif'],
        headings: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        // НОВІ ТІНІ: Додаємо преміальну золоту тінь для WOW-ефекту
        'gold-glow': '0 0 15px 5px rgba(199, 139, 12, 0.3)',      // Золоте сяйво
        'gold-glow-strong': '0 0 25px 10px rgba(199, 139, 12, 0.4)', // Сильне золоте сяйво
        'tech-glow': '0 0 15px 5px rgba(0, 191, 255, 0.3)',     // Блакитне сяйво
      },
      animation: {
        // ПІДТВЕРДЖЕНО: Анімацію 'slow-drift' залишаємо.
        'slow-drift': 'slow-drift 10s ease-in-out infinite alternate',
      },
      keyframes: {
        // ПІДТВЕРДЖЕНО: 'slow-drift' залишаємо.
        'slow-drift': {
          '0%': { transform: 'translateY(-10px) translateX(-10px)' },
          '100%': { transform: 'translateY(10px) translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
}
