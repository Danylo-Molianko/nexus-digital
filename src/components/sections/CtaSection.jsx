import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../ui/Button';
import GlassCard from '../ui/GlassCard';

const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <GlassCard className="text-center items-center flex flex-col py-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider max-w-3xl">
            Ready for a strategic partnership?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            Stop making tactical decisions. It's time to build a fundamental advantage. Begin qualification.
          </p>
          <div className="mt-10">
            <NavLink to="/schedule-session">
              <Button variant="primary">
                Schedule a Strategy Session
              </Button>
            </NavLink>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default CtaSection;