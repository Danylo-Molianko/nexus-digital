import React from 'react';
import GlassCard from '../ui/GlassCard';
import { CubeTransparentIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const pillarsData = [
  {
    icon: CubeTransparentIcon,
    title: "FOUNDATION & GROWTH",
    description: "We create reliable custom software, web, and mobile platforms from the ground up. We modernize existing systems, breathing new life and efficiency into them."
  },
  {
    icon: SparklesIcon,
    title: "INNOVATION & INSIGHTS",
    description: "We leverage AI to optimize processes, gain valuable insights from data, and create solutions that better serve people."
  },
  {
    icon: ShieldCheckIcon,
    title: "SECURITY & TRUST",
    description: "Security is the foundation of trust. We integrate it into every stage of our work, protecting your data, reputation, and your clients' peace of mind."
  }
];

const PillarsSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          OUR APPROACH: THREE PILLARS OF EXCELLENCE.
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          Our strength lies in synergy. We don't just offer services; we connect them to create holistic, future-proof digital solutions.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillarsData.map((pillar, index) => (
          <GlassCard key={index}>
            <div className="flex flex-col items-start">
              <div className="bg-[var(--color-accent-dimmed)] p-3 rounded-lg border border-[var(--color-accent)]/30 mb-6">
                <pillar.icon className="h-8 w-8 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default PillarsSection;