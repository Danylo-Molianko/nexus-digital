import React from 'react';
import GlassCard from '../ui/GlassCard';
import { CubeTransparentIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const pillarsData = [
  {
    icon: CubeTransparentIcon,
    title: "Build & Modernize",
    description: "From custom software development to modernizing legacy systems, we build the robust digital foundation your business needs to scale."
  },
  {
    icon: SparklesIcon,
    title: "Innovate & Automate",
    description: "We implement cutting-edge AI and machine learning solutions to automate processes, unlock data insights, and create a decisive competitive advantage."
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure & Comply",
    description: "With comprehensive cybersecurity and DevSecOps, we protect your data, operations, and future growth by embedding security into every layer."
  }
];

const PillarsSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          THE NEXUS EFFECT
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