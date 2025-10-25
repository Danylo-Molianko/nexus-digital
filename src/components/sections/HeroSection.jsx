// [СТРАТЕГІЧНА ЗМІНА] Видалено 'useMemo' та 'Math.random'
import React, { Suspense, lazy } from 'react'; 
import { NavLink } from 'react-router-dom';

// 1. ЛІНИВЕ ЗАВАНТАЖЕННЯ (LAZY LOADING) 3D-КОМПОНЕНТА
const LazyDigitalCanvas = lazy(() => import('../DigitalCanvas'));

const HeroSection = () => {
  // 2. НОВА АРХІТЕКТУРА: "ЄДИНИЙ БРЕНДОВАНИЙ АКТИВ"
  // Ми більше не генеруємо випадковий 'seed'.
  // Ми надаємо ОДИН статичний 'seed' для ВСІХ користувачів.
  // Це гарантує, що КОЖЕН бачить ту саму, ідеальну 3D-хмару.
  const patternSeed = "nexus-digital-core-v1";

  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-var(--header-height-large))] overflow-hidden">
      
      {/* 3. ІНТЕГРАЦІЯ 3D-КАНВАСУ */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Suspense fallback={<div className="w-full h-full bg-cream" />}> 
          {/* 'patternSeed' тепер статичний і гарантовано існує */}
          <LazyDigitalCanvas seed={patternSeed} />
        </Suspense>
      </div>

      {/* 4. КОНТЕНТ (ЗАЛИШАЄТЬСЯ НАД 3D) */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider max-w-4xl">
          We don't just build software. We engineer your intelligent digital core.
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">
          We fuse custom development, AI integration, and unbreakable security (the "Nexus Effect") to forge your ambitions into absolute market advantage.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <NavLink 
            to="/schedule-session" 
            className="inline-block rounded-full px-8 py-3 font-headings text-sm font-bold uppercase tracking-wider 
                       bg-gold text-anthracite transition-shadow hover:shadow-gold-glow"
          >
            Schedule a Strategy Session
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;