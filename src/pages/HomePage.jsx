// Цей файл містить код, який раніше був у App.jsx
import React, { Suspense } from 'react';
import HeroSection from '../components/sections/HeroSection';
/* === ЛЕДАЧЕ ЗАВАНТАЖЕННЯ (ЗБЕРІГАЄМО) === */
const TriageSection = React.lazy(() => import('../components/sections/TriageSection'));
const PillarsSection = React.lazy(() => import('../components/sections/PillarsSection'));
const ProcessSection = React.lazy(() => import('../components/sections/ProcessSection'));
const ArsenalPreviewSection = React.lazy(() => import('../components/sections/ArsenalPreviewSection'));
// const TestimonialsSection = React.lazy(() => import('../components/sections/TestimonialsSection')); // МИ ВІДКЛЮЧАЄМО ЦЕ
const CtaSection = React.lazy(() => import('../components/sections/CtaSection'));
const LogosStrip = React.lazy(() => import('../components/experiments/uizard-navy/LogosStrip'));


const HomePage = () => {
  return (
    <>
      {/* 1. ГЕРОЙ (НЕЙРОННА ТИПОГРАФІКА) */}
      <HeroSection />
      {/* Обгортаємо решту в Suspense для продуктивності */}
      <Suspense fallback={<div className="h-screen bg-nexus-dark-void" /> /* Простий fallback */}>
        {/* 2. ТРІАЖ-ФІЛЬТР (НАШ НОВИЙ КЛЮЧОВИЙ БЛОК) */}
        <TriageSection />
        {/* 3. ТРИ СТОВПИ (З НУЛЬОВОЮ ГРАВІТАЦІЄЮ) */}
        <PillarsSection />
        {/* 3.5 Logos strip (uizard-inspired, navy grayscale) */}
        <Suspense fallback={null}>
          <LogosStrip />
        </Suspense>
        {/* 4. ПРОЦЕС (З НУЛЬОВОЮ ГРАВІТАЦІЄЮ) */}
        <ProcessSection />
        {/* 5. АРСЕНАЛ-ПРЕВ'Ю (АРХІТЕКТУРА ОБІЦЯНКИ) */}
        <ArsenalPreviewSection />
        {/* 6. ФІНАЛЬНИЙ CTA (МИ ПЕРЕПИШЕМО ЙОГО НАСТУПНИМ КРОКОМ) */}
        <CtaSection />
      </Suspense>
    </>
  );
};

export default HomePage;