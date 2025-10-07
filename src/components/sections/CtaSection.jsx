import React from 'react';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <GlassCard className="text-center items-center flex flex-col py-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider max-w-3xl">
            READY TO ENGINEER YOUR DIGITAL CORE?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Schedule a consultation. We'll build your project roadmap and define the first steps to success.
          </p>
          <div className="mt-10">
            <Button variant="primary">
              START THE CONVERSATION
            </Button>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default CtaSection;