// Цей файл містить код, який раніше був у App.jsx
import React, { Suspense } from 'react';
import HeroSection from '../components/sections/HeroSection';
const TriageSection = React.lazy(() => import('../components/sections/TriageSection'));
const PillarsSection = React.lazy(() => import('../components/sections/PillarsSection'));
const ImpactSection = React.lazy(() => import('../components/sections/ImpactSection'));
const ProcessSection = React.lazy(() => import('../components/sections/ProcessSection'));
const ArsenalPreviewSection = React.lazy(() => import('../components/sections/ArsenalPreviewSection'));
const TestimonialsSection = React.lazy(() => import('../components/sections/TestimonialsSection'));
const CtaSection = React.lazy(() => import('../components/sections/CtaSection'));


const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Suspense fallback={null}>
        <TriageSection />
        <PillarsSection />
        <ImpactSection />
        <ProcessSection />
        <ArsenalPreviewSection />
        <TestimonialsSection />
        <CtaSection />
      </Suspense>
    </>
  );
};

export default HomePage;