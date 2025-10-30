/*
 * =========================================
 * NEXUS KINETIC ENGINE (v1.0)
 * =========================================
 * Наш центральний хаб для всіх анімаційних варіантів Framer Motion.
 * Це гарантує, що весь сайт рухається як єдиний, цілісний організм.
 */

/* * 1. "Нульова Гравітація" (Zero-G Section)
 * Анімація "пружини" для появи цілих секцій.
 * Вона "прилітає" і м'яко зупиняється.
 */
export const zeroGSectionVariant = {
  hidden: { 
    opacity: 0, 
    y: 75 // Починається трохи нижче
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', // Використовуємо фізику пружини
      duration: 1.0,
      bounce: 0.18,   // Більш "важке" відчуття
      delay: 0.1
    }
  }
};

/* * 2. "Нейронний Контейнер" (Staggered Container)
 * Контейнер для "Нейронної Типографіки".
 * Він сам по собі невидимий, але він дає команду "дітям" (літерам) 
 * з'являтися по черзі (staggerChildren).
 */
export const neuralContainerVariant = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03 // "Нейронна" затримка між кожною літерою (0.03с)
    }
  }
};

/* * 3. "Нейронна Літера" (Staggered Letter)
 * Анімація для КОЖНОЇ окремої літери в заголовку.
 * Вона з'являється знизу і стає на місце.
 */
export const neuralLetterVariant = {
  hidden: { 
    opacity: 0, 
    y: '100%' // Починається на 100% нижче
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12, // Гасіння коливань
      stiffness: 100, // Жорсткість
    }
  }
};

// Альтернатива A: Smooth Luxury
export const neuralLetterVariantSmooth = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 16, stiffness: 120 }
  }
};

// Альтернатива B: Mechanical Precision
export const neuralLetterVariantMechanical = {
  hidden: { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 18, stiffness: 220, restDelta: 0.001 }
  }
};

/*
 * 4. "Магнітна Кнопка" (Magnetic Item)
 * Ледь помітний рух назустріч курсору.
 */
export const magneticVariant = {
  hover: {
    scale: 1.05, // Трохи збільшується
    transition: { type: 'spring', stiffness: 300, damping: 10 }
  },
  rest: {
    scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 10 }
  }
};

/*
 * 5. Плавна Поява (Fade In)
 * Стандартна, але якісна плавна поява для простих елементів.
 */
export const fadeInVariant = {
   hidden: { 
    opacity: 0, 
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut'
    }
  }
};
