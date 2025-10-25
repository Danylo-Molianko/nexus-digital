// [КРИТИЧНА ЗМІНА] Ми видаляємо 'useState' та 'useEffect'
import React, { Suspense, lazy, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

// 1. ЛІНИВЕ ЗАВАНТАЖЕННЯ (LAZY LOADING) 3D-КОМПОНЕНТА
// Це залишається без змін
const LazyDigitalCanvas = lazy(() => import('../DigitalCanvas'));

const HeroSection = () => {
  // 2. НОВА АРХІТЕКТУРА: "АБСОЛЮТНА АВТОНОМІЯ КЛІЄНТА"
  // Ми більше не робимо 'fetch' до бекенду.
  // Ми генеруємо 'seed' локально, 1 раз при монтажі, використовуючи 'useMemo'.
  // Це гарантує, що 3D-модель з'явиться, навіть якщо server.js старий.
  const patternSeed = useMemo(() => {
    // Math.random() дасть нам унікальний патерн при кожному завантаженні сторінки.
    return Math.random().toString(36).substring(7);
  }, []); // Порожній масив означає, що це виконається 1 раз.

  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-var(--header-height-large))] overflow-hidden">
      
      {/* 3. ІНТЕГРАЦІЯ 3D-КАНВАСУ */}
      {/* Тепер 'patternSeed' гарантовано існує з першого рендеру */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Suspense fallback={<div className="w-full h-full bg-cream" />}> 
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