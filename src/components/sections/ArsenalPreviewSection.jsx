import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ArrowDownTrayIcon as DownloadIcon } from '@heroicons/react/24/outline';
import { zeroGSectionVariant, warpRevealVariant } from '../../utils/animations';

// Картка для "активу, що готується"
const AssetCard = ({ title, description, role, to }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }} // Легкий "магнітний" підйом
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      className="bg-nexus-dark-primary p-6 rounded-lg border border-nexus-glass-border 
                 hover:border-nexus-gold/50 transition-colors duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        {/* Роль, для якої цей актив (CTO, CFO) */}
        <span className="text-xs font-medium uppercase tracking-widest text-nexus-gold">
          {role}
        </span>
        <DownloadIcon className="h-5 w-5 text-nexus-text-secondary" />
      </div>
      
      <h3 className="text-xl font-headings font-bold text-nexus-text-headings mb-3">
        {title}
      </h3>
      
      <p className="text-nexus-text-secondary text-sm mb-5">
        {description}
      </p>
      
      {/* Наш CTA "Архітектури Обіцянки" */}
      <Link 
        to={to} // Це може вести на сторінку /arsenal або /contact
        className="inline-flex items-center text-nexus-tech-blue font-headings font-medium group"
      >
        Зарезервувати копію
        <ArrowRightIcon className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};


const ArsenalPreviewSection = () => {
  return (
    // Використовуємо "Нульову Гравітацію"
    <motion.section
      className="bg-nexus-dark-void defer-visibility" // Легкий перф-плюс
      variants={zeroGSectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 py-24">
        {/* Заголовок Секції */}
        <motion.div variants={warpRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-3xl md:text-5xl font-headings font-bold text-center mb-6 text-nexus-text-headings">
            Арсенал: Дані для Вашого Комітету
          </h2>
          <p className="text-lg md:text-xl text-nexus-text-secondary max-w-2xl mx-auto text-center mb-16">
            Ми готуємо стратегічні бріфи, які допоможуть вашій команді прийняти правильне рішення. Отримайте доступ першими.
          </p>
        </motion.div>
        
        {/* Сітка Активів */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Актив 1 (для CFO) */}
          <AssetCard
            role="ДЛЯ CFO / ФІНАНСИСТІВ"
            title="Калькулятор ROI: Економічна Модель 'Nexus'"
            description="Глибокий аналіз TCO (Загальної Вартості Володіння) та предиктивна модель ROI для інтеграції ШІ у ваші процеси."
            to="/contact" // Всі запити ведуть на кваліфікацію
          />
          
          {/* Актив 2 (для CTO) */}
          <AssetCard
            role="ДЛЯ CTO / ТЕХНОЛОГІВ"
            title="Архітектура Безпеки: Доктрина Нульової Довіри"
            description="Детальний опис наших протоколів DevSecOps, стандартів інтеграції API та забезпечення відмовостійкості."
            to="/contact" // Всі запити ведуть на кваліфікацію
          />
        </div>
      </div>
    </motion.section>
  );
};

export default ArsenalPreviewSection;
