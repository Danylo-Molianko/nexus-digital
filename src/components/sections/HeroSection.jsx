import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-var(--header-height))]">
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider max-w-4xl">
          We don't just build software. We engineer your intelligent digital core.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
          We fuse custom development, AI integration, and unbreakable security (the "Nexus Effect") to forge your ambitions into absolute market advantage.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <NavLink to="/schedule-session">
            <Button variant="primary">Schedule a Strategy Session</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;