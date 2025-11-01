import React, { Suspense, lazy } from 'react';
import { 
  PencilSquareIcon, 
  CpuChipIcon, 
  ShieldCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowPathIcon,
  WrenchScrewdriverIcon,
  DocumentTextIcon,
  LifebuoyIcon
} from '@heroicons/react/24/outline';
const ProcessSection = lazy(() => import('../components/sections/ProcessSection'));
const CtaSection = lazy(() => import('../components/sections/CtaSection'));
import PageHeader from '../components/ui/PageHeader';
import GlassCardStatic from '../components/ui/GlassCardStatic';

// Картка для окремої послуги
const ServiceItemCard = ({ icon: Icon, title, description }) => (
  <div className="group">
    <GlassCardStatic className="p-6 text-center">
      <Icon className="h-10 w-10 text-nexus-gold mb-4 mx-auto" />
      <h4 className="text-xl font-headings font-bold text-nexus-text-headings mb-2">{title}</h4>
      <p className="text-nexus-text-secondary text-sm">{description}</p>
    </GlassCardStatic>
  </div>
);

const StrategyPage = () => {
  return (
    <>
      <PageHeader
        title="Ваш Повний Цифровий Арсенал"
        subtitle="Ми не просто виконавці. Ми — ваш стратегічний партнер, що забезпечує результат від ідеї до запуску."
      />

      {/* Digital Foundation */}
      <section className="py-24 my-12 bg-[var(--bg-level1)]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-headings font-bold text-nexus-text-headings mb-4 text-center">
            [ 1 ] Digital Foundation
          </h2>
          <p className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mb-12 mx-auto text-center">
            Створення потужної та безпечної онлайн-присутності — основи для вашого зростання.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceItemCard
              icon={PencilSquareIcon}
              title="Веб-Розробка"
              description="Створення візуально досконалих сайтів з нуля."
            />
            <ServiceItemCard
              icon={CpuChipIcon}
              title="Web-App Розробка"
              description="Унікальні веб-додатки зі складною бізнес-логікою."
            />
          </div>
        </div>
      </section>

      {/* Business Acceleration */}
      <section className="bg-[var(--bg-level1)] py-24 my-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-headings font-bold text-nexus-text-headings mb-4 text-center">
            [ 2 ] Business Acceleration
          </h2>
          <p className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mb-12 mx-auto text-center">
            Впровадження інтелектуальних інструментів.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceItemCard
              icon={ChatBubbleBottomCenterTextIcon}
              title="AI Integration"
              description="Впровадження штучного інтелекту."
            />
            <ServiceItemCard
              icon={ArrowPathIcon}
              title="Process Automation"
              description="Автоматизація бізнес-процесів."
            />
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-24 my-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-headings font-bold text-nexus-text-headings mb-4 text-center">
            [ 3 ] Security & Support
          </h2>
          <p className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mb-12 mx-auto text-center">
            Захист та підтримка вашого бізнесу.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceItemCard
              icon={ShieldCheckIcon}
              title="Cybersecurity"
              description="Захист від кіберзагроз."
            />
            <ServiceItemCard
              icon={LifebuoyIcon}
              title="24/7 Support"
              description="Постійна технічна підтримка."
            />
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading…</div>}>
        <ProcessSection />
        <CtaSection />
      </Suspense>
    </>
  );
};

export default StrategyPage;
