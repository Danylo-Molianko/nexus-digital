import React from 'react';
import GlassCard from '../ui/GlassCard';

const metricsData = [
  {
    value: "+45%",
    title: "Operational Efficiency",
    description: "Average increase for clients after implementing our automation solutions."
  },
  {
    value: ">150",
    title: "Projects Delivered",
    description: "Mission-critical projects successfully delivered and secured according to DevSecOps principles."
  },
  {
    value: "99.9%",
    title: "System Uptime",
    description: "Uptime achieved for our clients through resilient architecture and 24/7 system monitoring."
  },
  {
    value: "-30%",
    title: "Cost Reduction",
    description: "Average reduction in operational costs for businesses leveraging our custom AI-powered tools."
  }
];

const ImpactSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          OUR IMPACT IN NUMBERS
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          Results that speak for themselves.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {metricsData.map((metric, index) => (
          <GlassCard key={index} className="text-center">
            <p className="text-5xl font-bold text-[var(--color-accent)] mb-4">{metric.value}</p>
            <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
            <p className="text-[var(--color-text-secondary)] text-sm">{metric.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default ImpactSection;