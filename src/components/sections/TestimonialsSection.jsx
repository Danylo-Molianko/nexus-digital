import React from 'react';
import GlassCardStatic from '../ui/GlassCardStatic';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    quote: "Nexus Studio delivered a market-ready product...",
    name: "Anna Kovalenko",
    title: "CEO, TechStart"
  },
  {
    quote: "The AI-driven automation Nexus implemented...",
    name: "Max Petrov",
    title: "CTO, FinanceHub"
  },
  {
    quote: "The team's transparent process and consistent...",
    name: "Olena Savchenko",
    title: "Director, RetailPro"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 my-12 bg-[var(--bg-level1)]">
      <div className="container mx-auto px-4">
      <div className="mb-16 max-w-3xl mx-auto">
        <div className="holo-frame p-6 md:p-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
            What partners say
          </h2>
        </div>
      </div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <GlassCardStatic className="flex flex-col">
              <div className="flex-grow mb-6">
                <p className="text-lg italic text-white">"{testimonial.quote}"</p>
              </div>
              <div className="border-t border-[var(--color-glass-border)] pt-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://placehold.co/60x60"
                    alt={`${testimonial.name} avatar`}
                    width="60"
                    height="60"
                    loading="lazy"
                    decoding="async"
                    fetchpriority="low"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-[var(--color-text-secondary)]">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </GlassCardStatic>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;