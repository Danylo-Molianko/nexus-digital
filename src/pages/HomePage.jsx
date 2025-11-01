// A-LIST HomePage with GSAP ScrollTrigger animations
import React, { Suspense, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from '../components/sections/HeroSection';

/* === ЛЕДАЧЕ ЗАВАНТАЖЕННЯ (ЗБЕРІГАЄМО) === */
const TriageSection = React.lazy(() => import('../components/sections/TriageSection'));
const PillarsSection = React.lazy(() => import('../components/sections/PillarsSection'));
const ProcessSection = React.lazy(() => import('../components/sections/ProcessSection'));
const ArsenalPreviewSection = React.lazy(() => import('../components/sections/ArsenalPreviewSection'));
const CtaSection = React.lazy(() => import('../components/sections/CtaSection'));
const LogosStrip = React.lazy(() => import('../components/experiments/uizard-navy/LogosStrip'));

const HomePage = () => {
  useEffect(() => {
    // Wait for lazy-loaded components to render
    const timeout = setTimeout(() => {
      // Create array of all page sections
      const sections = gsap.utils.toArray('.page-section');

      sections.forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 85%', // Animation starts when section is 85% from bottom
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse', // Smooth appear and disappear
          },
          opacity: 0,       // Initial state: transparent
          y: 50,            // Initial state: 50px below
          duration: 1.2,    // Animation duration 1.2s
          ease: 'power3.out', // Very smooth "spring" animation
        });
      });
    }, 100); // Small delay to ensure DOM is ready

    return () => {
      clearTimeout(timeout);
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      {/* 1. ГЕРОЙ (WITHOUT ScrollTrigger - immediate appearance) */}
      <HeroSection />
      
      {/* Обгортаємо решту в Suspense для продуктивності */}
      <Suspense fallback={<div className="h-screen bg-nexus-dark-void" />}>
        {/* 2. ТРІАЖ-ФІЛЬТР */}
        <div className="page-section">
          <TriageSection />
        </div>
        
        {/* 3. ТРИ СТОВПИ */}
        <div className="page-section">
          <PillarsSection />
        </div>
        
        {/* 3.5 Logos strip */}
        <Suspense fallback={null}>
          <div className="page-section">
            <LogosStrip />
          </div>
        </Suspense>
        
        {/* 4. ПРОЦЕС */}
        <div className="page-section">
          <ProcessSection />
        </div>
        
        {/* 5. АРСЕНАЛ-ПРЕВ'Ю */}
        <div className="page-section">
          <ArsenalPreviewSection />
        </div>
        
        {/* 6. ФІНАЛЬНИЙ CTA */}
        <div className="page-section">
          <CtaSection />
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
