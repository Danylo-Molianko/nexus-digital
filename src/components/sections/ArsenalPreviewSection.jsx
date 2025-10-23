import React from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../ui/GlassCard';

const ArsenalPreviewSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
          The Arsenal: Data for Your Decision Committee
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          We prepare strategic briefs that help...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <GlassCard>
          <div className="flex flex-col h-full">
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">
              WHITE PAPER / FOR THE CFO
            </p>
            <h3 className="text-2xl font-bold mb-3">The ROI Calculator: The 'Nexus' Economic Model</h3>
            <p className="text-[var(--color-text-secondary)] mb-6">A deep-dive TCO...</p>
            <div className="mt-auto">
              <Link to="/arsenal/roi-calculator-whitepaper" className="inline-block rounded-full px-6 py-3 font-headings text-sm font-bold uppercase tracking-wider bg-[var(--color-accent)] text-white border-2 border-transparent hover:bg-transparent hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300">
                View the ROI Analysis
              </Link>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex flex-col h-full">
            <p className="text-xs uppercase tracking-widest text-[var(--color-text-secondary)] mb-2">
              TECHNICAL BRIEF / FOR THE CTO
            </p>
            <h3 className="text-2xl font-bold mb-3">Security Architecture: The Zero-Trust Doctrine</h3>
            <p className="text-[var(--color-text-secondary)] mb-6">A detailed overview...</p>
            <div className="mt-auto">
              <Link to="/arsenal/devsecops-brief" className="inline-block rounded-full px-6 py-3 font-headings text-sm font-bold uppercase tracking-wider bg-[var(--color-accent)] text-white border-2 border-transparent hover:bg-transparent hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300">
                View the Technical Brief
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

export default ArsenalPreviewSection;
