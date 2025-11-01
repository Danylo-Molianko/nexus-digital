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
        <h3 className="text-2xl font-headings font-bold text-nexus-text-headings mb-3">
          {title}
        </h3>
        <p className="text-nexus-text-secondary text-base flex-grow mb-4">
          {description}
        </p>
        <div className="flex items-center text-nexus-gold font-headings font-bold tracking-wider group">
          Детальніше
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
      {/* Заголовок Секції з warp reveal у скляній рамці */}
      <motion.div variants={warpRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="max-w-3xl mx-auto holo-frame p-6 md:p-8 text-center mb-16">
          <h2 className="h2-fluid font-headings font-bold text-nexus-text-headings">
            Що потрібно саме зараз?
          </h2>
          <p className="text-lg text-nexus-text-secondary mt-3">
            Оберіть напрям для швидкого старту.
          </p>
        </div>
      </motion.div>

  {/* Сітка Тріажу */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">
        {/* === БЛОК 1: СТАРТАПИ ("Максим") === */}
        <TriageCard
          title="Я Засновник (Startup)"
          description="Ідея/MVP. Потрібні NDA, чесна оцінка і швидкий надійний запуск."
          to="/services"
          className="hover:border-nexus-tech-blue/50 hover:shadow-tech-glow" // Кастомний колір для "Інновацій"
        />
        
        {/* === БЛОК 2: МСБ ("Тарас") === */}
        <TriageCard
          title="Я Власник Бізнесу (МСБ)"
          description="Бізнес працює, але сайт/системи застаріли. Потрібне рішення «під ключ»."
          to="/services"
        />

        {/* === БЛОК 3: КОРПОРАЦІЇ ("Анна" - НАШ ГОЛОВНИЙ ФОКУС) === */}
        <TriageCard
          title="Я Стратегічний Лідер (Enterprise)"
          description="Комплексне AI/веб‑рішення для масштабування, автоматизації та випередження конкурентів."
          to="/services"
          className="md:scale-105 border-nexus-gold/50 shadow-gold-glow conic-halo" // Виділяємо цей блок з конічним сяйвом
        />
      </div>
      </div>
    </motion.section>
  );
};

export default TriageSection;
