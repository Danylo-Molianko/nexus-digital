import React from 'react';
import GlassCard from '../ui/GlassCard';

const testimonialsData = [
  {
    quote: "Nexus Studio delivered a market-ready product in record time. Their integrated approach to security from day one was a game-changer for us.",
    name: "Anna Kovalenko",
    title: "CEO, TechStart"
  },
  {
    quote: "The AI-driven automation Nexus implemented saved our team 40% of their time on routine tasks. This isn't just code, it's a genuine business multiplier.",
    name: "Max Petrov",
    title: "CTO, FinanceHub"
  },
  {
    quote: "The team's transparent process and consistent communication gave us complete confidence. Nexus is more than a vendor; they are a true partner. Highly recommended.",
    name: "Olena Savchenko",
    title: "Director, RetailPro"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          WHAT OUR CLIENTS SAY
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          Real feedback from leaders we partner with.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <GlassCard key={index} className="flex flex-col">
            <div className="flex-grow mb-6">
              <p className="text-lg italic text-white">"{testimonial.quote}"</p>
            </div>
            <div className="border-t border-[var(--color-glass-border)] pt-4">
              <p className="font-bold text-white">{testimonial.name}</p>
              <p className="text-sm text-[var(--color-text-secondary)]">{testimonial.title}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;