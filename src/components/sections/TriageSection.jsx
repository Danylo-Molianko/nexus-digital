import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { zeroGSectionVariant } from '../../utils/animations'; // Наша "пружинна" анімація

/* === КАРТКА ТРІАЖУ (ІНТЕРАКТИВНА) === */
const TriageCard = ({ title, description, to, className = '' }) => {
  return (
    // Використовуємо "магнітний" ефект при наведенні
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }} // Піднімається і злегка збільшується
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      className={`
        relative overflow-hidden rounded-2xl p-8 
        border border-nexus-glass-border 
        bg-nexus-glass-bg backdrop-blur-[var(--glass-blur)] 
        transition-all duration-300 
        hover:border-nexus-gold/50 hover:shadow-gold-glow
        ${className}
      `}
    >
      <Link to={to} className="flex flex-col h-full">
        {/* Заголовок */}
        <h3 className="text-2xl font-headings font-bold text-nexus-text-headings mb-4">
          {title}
        </h3>
        
        {/* Опис */}
        <p className="text-nexus-text-secondary text-base flex-grow mb-6">
          {description}
        </p>
        
        {/* Посилання */}
        <div className="flex items-center text-nexus-gold font-headings font-bold tracking-wider group">
          Дізнатися більше
          <ArrowRightIcon className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
};

/* === ГОЛОВНИЙ КОМПОНЕНТ СЕКЦІЇ === */
const TriageSection = () => {
  return (
    // Використовуємо "Нульову Гравітацію" для всієї секції
    <motion.section
      className="container mx-auto px-4 py-24"
      variants={zeroGSectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Заголовок Секції */}
      <h2 className="text-3xl md:text-5xl font-headings font-bold text-center mb-6 text-nexus-text-headings">
        Яку стратегічну задачу ви вирішуєте?
      </h2>
      <p className="text-lg md:text-xl text-nexus-text-secondary max-w-2xl mx-auto text-center mb-16">
        Ваша мета визначає наш підхід. Оберіть ваш шлях, щоб ми могли запропонувати ідеальне рішення.
      </p>

      {/* Сітка Тріажу */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">
        {/* === БЛОК 1: СТАРТАПИ ("Максим") === */}
        <TriageCard
          title="Я Засновник (Startup)"
          description="У мене є ідея (MVP). Мені потрібна прозора оцінка, захист NDA та швидкий, але надійний запуск."
          to="/strategy" // Або '/mvp-path' - ми налаштуємо роутинг пізніше
          className="hover:border-nexus-tech-blue/50 hover:shadow-tech-glow" // Кастомний колір для "Інновацій"
        />
        
        {/* === БЛОК 2: МСБ ("Тарас") === */}
        <TriageCard
          title="Я Власник Бізнесу (МСБ)"
          description="Мій бізнес працює, але застарілий сайт втрачає клієнтів. Мені потрібне надійне 'під ключ' рішення."
          to="/strategy" // Або '/smb-path'
        />

        {/* === БЛОК 3: КОРПОРАЦІЇ ("Анна" - НАШ ГОЛОВНИЙ ФОКУС) === */}
        <TriageCard
          title="Я Стратегічний Лідер (Enterprise)"
          description="Мені потрібне комплексне AI/веб-рішення для масштабування, автоматизації та випередження конкурентів."
          to="/strategy" // '/enterprise-path'
          className="md:scale-105 border-nexus-gold/50 shadow-gold-glow" // Виділяємо цей блок
        />
      </div>
    </motion.section>
  );
};

export default TriageSection;
