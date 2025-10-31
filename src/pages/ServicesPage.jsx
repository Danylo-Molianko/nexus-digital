import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { 
  PencilSquareIcon, 
  CpuChipIcon, 
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline'; // Використовуємо outline-іконки для елегантності
import { zeroGSectionVariant, fadeInVariant } from '../utils/animations';
const ProcessSection = lazy(() => import('../components/sections/ProcessSection'));
const CtaSection = lazy(() => import('../components/sections/CtaSection'));
import PageHeader from '../components/ui/PageHeader'; // Ваш існуючий компонент (у нас у папці ui)
import GlassCardStatic from '../components/ui/GlassCardStatic';

// Картка для окремої послуги
const ServiceItemCard = ({ icon: Icon, title, description }) => (
  <motion.div variants={fadeInVariant} className="group">
    <GlassCardStatic className="p-6">
      <Icon className="h-10 w-10 text-nexus-gold mb-4 transition-transform duration-500 group-hover:rotate-12" />
      <h4 className="text-xl font-headings font-bold text-nexus-text-headings mb-2">{title}</h4>
      <p className="text-nexus-text-secondary text-sm">{description}</p>
    </GlassCardStatic>
  </motion.div>
);

// Головна сторінка "Стратегія" (колишня "Services")
const StrategyPage = () => {
  return (
    <>
      {/* 1. HERO-СЕКЦІЯ (НА ОСНОВІ ВАШОГО DOC 3.1) */}
      <PageHeader
        title="Ваш Повний Цифровий Арсенал"
        subtitle="Ми не просто виконавці. Ми — ваш стратегічний партнер, що забезпечує результат від ідеї до запуску, гарантований німецьким стандартом Werkvertrag."
      />

      {/* 2. НАПРЯМОК 1: DIGITAL FOUNDATION */}
      <motion.section
        className="py-24 my-12 bg-[var(--bg-level1)]"
        variants={zeroGSectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-headings font-bold text-nexus-text-headings mb-4">
          [ 1 ] Digital Foundation (Цифровий Фундамент)
        </h2>
        <p className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mb-12">
          Створення потужної та безпечної онлайн-присутності — основи для вашого зростання.
        </p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={fadeInVariant} // Контейнер для плавної появи
        >
          <ServiceItemCard
            icon={PencilSquareIcon}
            title="Інноваційна Веб-Розробка 'під ключ'"
            description="Створення візуально досконалих сайтів з нуля. Від лендінгів для стартапів до складних корпоративних порталів."
          />
          <ServiceItemCard
            icon={CpuChipIcon}
            title="Розробка Web-App та Кастомних Баз Даних"
            description="Створюємо унікальні веб-додатки зі складною бізнес-логікою: особисті кабінети, інтерактивні каталоги, бази знань."
          />
        </motion.div>
        </div>
      </motion.section>

      {/* 3. НАПРЯМОК 2: BUSINESS ACCELERATION */}
      <motion.section
        className="bg-[var(--bg-level1)] py-24 my-12" // Виділяємо фон
        variants={zeroGSectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-headings font-bold text-nexus-text-headings mb-4">
            [ 2 ] Business Acceleration (Прискорення Бізнесу)
          </h2>
          <p className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mb-12">
            Впровадження інтелектуальних інструментів для випередження конкурентів.
          </p>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={fadeInVariant}
          >
            <ServiceItemCard
              icon={ArrowPathIcon}
              title="AI-Автоматизація Бізнес-процесів"
              description="Розробка персональних ШІ-агентів, які беруть на себе рутинні завдання (аналіз документів, сортування запитів)."
            />
            <ServiceItemCard
              icon={ChatBubbleBottomCenterTextIcon}
              title="Інтелектуальна Автоматизація Маркетингу"
              description="Налаштування CRM-систем, інтеграція розумних чат-ботів (Instagram, Telegram) та автоматизація E-mail розсилок."
            />
          </motion.div>
        </div>
      </motion.section>
      
      {/* 4. НАПРЯМОК 3: STRATEGIC PARTNERSHIP */}
      <motion.section
        className="py-24 my-12 bg-[var(--bg-level1)]"
        variants={zeroGSectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-headings font-bold text-nexus-text-headings mb-4">
          [ 3 ] Strategic Partnership (Стратегічне Партнерство)
        </h2>
        <p className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mb-12">
          Забезпечення вашого довгострокового успіху через експертну підтримку та гарантії.
        </p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={fadeInVariant}
        >
          <ServiceItemCard
            icon={DocumentTextIcon}
            title="Бізнес-аналіз та Маркетингові Консультації"
            description="Глибокий аналіз ринку та конкурентів для розробки виграшної цифрової стратегії."
          />
          <ServiceItemCard
            icon={ShieldCheckIcon}
            title="Гарантія Результату (Werkvertrag)"
            description="Ми працюємо за німецьким стандартом § 631 BGB, що юридично гарантує вам досягнення конкретного, функціонального результату."
          />
          <ServiceItemCard
            icon={LifebuoyIcon}
            title="Гарантія на Код & Платна Підтримка"
            description="6 місяців гарантії на виправлення наших помилок. Пропонуємо прозорі пакети підтримки (6, 12, 24 міс.) для вашого спокою."
          />
        </motion.div>
        </div>
      </motion.section>

      {/* 5–6. ЛЕЗІ-ЗАВАНТАЖЕНІ РОЗДІЛИ */}
      <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center text-nexus-text-secondary">Loading…</div>}>
        <ProcessSection />
        <CtaSection />
      </Suspense>
    </>
  );
};

export default StrategyPage;