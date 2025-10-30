import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { zeroGSectionVariant } from '../../utils/animations'; // Використовуємо "Нульову Гравітацію"

const CtaSection = () => {
  return (
    <motion.section
      className="relative bg-nexus-dark-primary py-24" // Використовуємо темний фон карт
      variants={zeroGSectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 text-center">
        
        {/* === НАША ГОЛОВНА УТП (З ДОКУМЕНТУ 2.3) === */}
        <h2 className="text-3xl md:text-5xl font-headings font-bold text-nexus-text-headings mb-6">
          Ваш проєкт ведуть засновники. Не менеджери.
        </h2>
        
        <p className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mx-auto mb-12">
          На відміну від агенцій-фабрик, де ваш проєкт губиться, у Nexus Studio ви отримуєте 
          прямий доступ та персональну відповідальність лідерів, відповідальних за ваш результат: 
          Технології, Стратегія та Креатив.
        </p>

        {/* === КОМАНДА (ШАБЛОН) === */}
        {/* (Ми замінимо це на реальні фото, коли отримаємо досьє) */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-nexus-dark-void border-2 border-nexus-gold mx-auto mb-2 flex items-center justify-center">
              <span className="font-headings text-2xl text-nexus-gold">О</span>
            </div>
            <h4 className="font-headings text-white">Олександр</h4>
            <p className="text-sm text-nexus-text-secondary">Технології & AI</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-nexus-dark-void border-2 border-nexus-gold mx-auto mb-2 flex items-center justify-center">
              <span className="font-headings text-2xl text-nexus-gold">Д</span>
            </div>
            <h4 className="font-headings text-white">Данило</h4>
            <p className="text-sm text-nexus-text-secondary">Стратегія & Маркетинг</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-nexus-dark-void border-2 border-nexus-gold mx-auto mb-2 flex items-center justify-center">
              <span className="font-headings text-2xl text-nexus-gold">Т</span>
            </div>
            <h4 className="font-headings text-white">Тіма</h4>
            <p className="text-sm text-nexus-text-secondary">Дизайн & 3D</p>
          </div>
        </div>

        {/* === ФІНАЛЬНИЙ ЗОЛОТИЙ CTA === */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <NavLink
            to="/contact"
            className="inline-block rounded-full px-10 py-4 font-headings text-base font-bold uppercase tracking-wider 
                       bg-nexus-gold text-nexus-dark-void 
                       transition-all duration-300 
                       hover:bg-nexus-gold-hover hover:shadow-gold-glow"
          >
            Запланувати Стратегічну Сесію
          </NavLink>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default CtaSection;