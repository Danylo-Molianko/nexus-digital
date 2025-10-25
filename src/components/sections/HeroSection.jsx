import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'; // Залишаємо Framer Motion для майбутніх анімацій

const HeroSection = () => {
  return (
    // Використовуємо стандартну висоту і прибираємо overflow-hidden
    <section className="relative flex items-center justify-center min-h-[calc(100vh-var(--header-height-large))] bg-cream"> 
      
      {/* Контент тепер знову головний елемент */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Анімація появи тексту (приклад) */}
        <motion.h1 
          className="text-4xl md:text-6xl font-bold uppercase tracking-wider max-w-4xl text-anthracite-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We don't just build software. We engineer your intelligent digital core.
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-anthracite-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          We fuse custom development, AI integration, and unbreakable security (the "Nexus Effect") to forge your ambitions into absolute market advantage.
        </motion.p>
        
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <NavLink 
            to="/schedule-session" 
            className="inline-block rounded-full px-8 py-3 font-headings text-sm font-bold uppercase tracking-wider 
                       bg-gold text-anthracite transition-shadow hover:shadow-gold-glow"
          >
            Schedule a Strategy Session
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;