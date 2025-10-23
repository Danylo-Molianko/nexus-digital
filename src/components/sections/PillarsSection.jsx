import React from 'react';
import GlassCard from '../ui/GlassCard';
import { CubeTransparentIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const pillarsData = [
  {
    icon: CubeTransparentIcon,
    title: "CREATION & MODERNIZATION",
    description: "We build custom, scalable platforms (Web & Mobile) and modernize legacy systems, transforming them into profitable assets."
  },
  {
    icon: SparklesIcon,
    title: "INNOVATION & AUTOMATION",
    description: "We deploy AI and ML models to automate processes, extract insights from data, and create intelligent, self-learning products."
  },
  {
    icon: ShieldCheckIcon,
    title: "SECURITY & TRUST",
    description: "Security is our foundation, not an option. We integrate DevSecOps and compliance (GDPR, ISO) at every stage, ensuring zero risk."
  }
];

const PillarsSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          The 'Nexus Effect': Your Advantage is Synergy
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