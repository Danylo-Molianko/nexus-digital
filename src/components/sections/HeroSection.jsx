import React from 'react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center min-h-[calc(100vh-var(--header-height))]">
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider max-w-4xl">
          YOUR VISION. OUR CRAFTSMANSHIP. LASTING SUCCESS.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
          We build the intelligent digital core that secures your mission and accelerates your positive market impact.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Button variant="primary">START THE CONVERSATION</Button>
          <Button variant="secondary">OUR SERVICES</Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;