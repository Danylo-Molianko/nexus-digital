import { motion } from 'framer-motion';
import GlassCard from '../ui/GlassCard';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { zeroGSectionVariant, warpRevealVariant } from '../../utils/animations'; // Пружина + warp reveal

/* === КАРТКА ТРІАЖУ (ІНТЕРАКТИВНА) === */
const TriageCard = ({ title, description, to, className = '' }) => {
  return (
    <GlassCard className={`relative overflow-hidden ${className}`}>
      <Link to={to} className="flex flex-col h-full focus-visible-ring">
        <h3 className="text-2xl font-headings font-bold text-nexus-text-headings mb-4">
          {title}
        </h3>
        <p className="text-nexus-text-secondary text-base flex-grow mb-6">
          {description}
        </p>
        <div className="flex items-center text-nexus-gold font-headings font-bold tracking-wider group">
          Дізнатися більше
          <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </GlassCard>
  );
};

/* === ГОЛОВНИЙ КОМПОНЕНТ СЕКЦІЇ === */
const TriageSection = () => {
  return (
    // Використовуємо "Нульову Гравітацію" для всієї секції
    <motion.section
      className="py-24 my-12 bg-[var(--bg-level1)] defer-visibility"
      variants={zeroGSectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
      {/* Заголовок Секції з warp reveal */}
      <motion.div variants={warpRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="h2-fluid font-headings font-bold text-center mb-6 text-nexus-text-headings">
          Яку стратегічну задачу ви вирішуєте?
        </h2>
        <p className="text-lg md:text-xl text-nexus-text-secondary max-w-2xl mx-auto text-center mb-16">
          Ваша мета визначає наш підхід. Оберіть ваш шлях, щоб ми могли запропонувати ідеальне рішення.
        </p>
      </motion.div>

  {/* Сітка Тріажу */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">
        {/* === БЛОК 1: СТАРТАПИ ("Максим") === */}
        <TriageCard
          title="Я Засновник (Startup)"
          description="У мене є ідея (MVP). Мені потрібна прозора оцінка, захист NDA та швидкий, але надійний запуск."
          to="/services"
          className="hover:border-nexus-tech-blue/50 hover:shadow-tech-glow" // Кастомний колір для "Інновацій"
        />
        
        {/* === БЛОК 2: МСБ ("Тарас") === */}
        <TriageCard
          title="Я Власник Бізнесу (МСБ)"
          description="Мій бізнес працює, але застарілий сайт втрачає клієнтів. Мені потрібне надійне 'під ключ' рішення."
          to="/services"
        />

        {/* === БЛОК 3: КОРПОРАЦІЇ ("Анна" - НАШ ГОЛОВНИЙ ФОКУС) === */}
        <TriageCard
          title="Я Стратегічний Лідер (Enterprise)"
          description="Мені потрібне комплексне AI/веб-рішення для масштабування, автоматизації та випередження конкурентів."
          to="/services"
          className="md:scale-105 border-nexus-gold/50 shadow-gold-glow conic-halo" // Виділяємо цей блок з конічним сяйвом
        />
      </div>
      </div>
    </motion.section>
  );
};

export default TriageSection;
