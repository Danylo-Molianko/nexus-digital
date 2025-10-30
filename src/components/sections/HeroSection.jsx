import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  neuralContainerVariant, 
  neuralLetterVariantMechanical as neuralLetterVariant,
  fadeInVariant 
} from '../../utils/animations'; // Імпортуємо наш Кінетичний Рушій
import { useReducedMotion } from 'framer-motion';

// Компонент для "Нейронної Типографіки"
const AnimatedHeadline = ({ text }) => {
  const shouldReduce = useReducedMotion();
  // Розбиваємо текст на масив літер
  const letters = Array.from(text);

  return (
    // 1. КОНТЕЙНЕР (Вмикає "staggerChildren")
    <motion.h1
      className="text-4xl md:text-6xl font-headings font-bold uppercase tracking-wider max-w-4xl text-nexus-text-headings"
      variants={shouldReduce ? fadeInVariant : neuralContainerVariant}
      initial="hidden"
      animate="visible"
    >
      {shouldReduce ? text : letters.map((letter, index) => (
        // 2. КОЖНА ЛІТЕРА (Реагує на "staggerChildren")
        <motion.span
          key={index}
          variants={neuralLetterVariant}
          className="inline-block" // Потрібно для правильної анімації 'y'
        >
          {/* Додаємо пробіл як ' ' для збереження відступів */}
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

// Головний компонент Hero
const HeroSection = () => {
  // === НОВИЙ СТРАТЕГІЧНИЙ ТЕКСТ ===
  const headlineText = "We don't just build software. We engineer your intelligent digital core.";
  
  return (
    <section 
      className="relative flex items-center justify-center min-h-[calc(100vh-var(--header-height-large))] 
                 bg-nexus-dark-void overflow-hidden" // Замінили фон 'bg-cream' на наш новий
    >
      {/* ТУТ МИ ДОДАМО "СЯЙВО КУРСОРУ" У НАСТУПНОМУ ПРОМТІ. 
        Поки що залишаємо місце.
      */}

      <div className="container mx-auto px-4 text-center z-10">
        
        {/* === ВАУ-ЕФЕКТ: НЕЙРОННИЙ ЗАГОЛОВOК === */}
        <AnimatedHeadline text={headlineText} />

        {/* === ПІДЗАГОЛОВОК (З'являється після заголовку) === */}
        <motion.p 
          className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mx-auto mt-6"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          We fuse custom development, AI integration, and unbreakable security (the \"Nexus Effect\") to forge your ambitions into absolute market advantage.
        </motion.p>

        {/* === БЛОК CTA (З'являється останнім) === */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.8 }} // Найбільша затримка
        >
          {/* 1. Головна Золота Кнопка */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/contact"
              className="inline-block rounded-full px-8 py-3.5 font-headings text-sm font-bold uppercase tracking-wider 
                         bg-nexus-gold text-nexus-dark-void 
                         transition-all duration-300 
                         hover:bg-nexus-gold-hover hover:shadow-gold-glow"
            >
              Schedule a Strategy Session
            </NavLink>
          </motion.div>
          
          {/* 2. Другорядна Кнопка (Арсенал) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/arsenal"
              className="inline-block rounded-full px-8 py-3.5 font-headings text-sm font-bold uppercase tracking-wider 
                         border-2 border-nexus-gold text-nexus-gold 
                         transition-all duration-300 
                         hover:bg-nexus-gold hover:text-nexus-dark-void hover:shadow-gold-glow"
            >
              Explore Our Arsenal
            </NavLink>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;