import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-var(--header-height-large))]">
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Текст тепер автоматично використовує колір 'anthracite-light' з index.css */}
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