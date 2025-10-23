import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';

const TriageSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-center">
        Which strategic challenge are you solving?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <GlassCard>
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-3">STRATEGIC PARTNERSHIP</h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              I need a comprehensive AI/web solution...
            </p>
            <div className="mt-auto">
              <Link to="/strategy" className="inline-block rounded-full px-6 py-3 font-headings text-sm font-bold uppercase tracking-wider bg-[var(--color-accent)] text-white border-2 border-transparent hover:bg-transparent hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300">
                Our Partnership Approach
              </Link>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-3">PACKAGED SOLUTIONS</h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              I need a reliable, packaged tool...
            </p>
            <div className="mt-auto">
              <Link to="/solutions" className="inline-block rounded-full px-6 py-3 font-headings text-sm font-bold uppercase tracking-wider bg-[var(--color-accent)] text-white border-2 border-transparent hover:bg-transparent hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300">
                View Solution Packages
              </Link>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-bold mb-3">MVP SCOPING</h3>
            <p className="text-[var(--color-text-secondary)] mb-6">
              I have an idea and need...
            </p>
            <div className="mt-auto">
              <Link to="/mvp-calculator" className="inline-block rounded-full px-6 py-3 font-headings text-sm font-bold uppercase tracking-wider bg-[var(--color-accent)] text-white border-2 border-transparent hover:bg-transparent hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300">
                Calculate MVP Cost
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default TriageSection;
