// Цей файл містить код, який раніше був у App.jsx
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import PillarsSection from '../components/sections/PillarsSection';
import ImpactSection from '../components/sections/ImpactSection';
import ProcessSection from '../components/sections/ProcessSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ImpactSection />
      <ProcessSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default HomePage;