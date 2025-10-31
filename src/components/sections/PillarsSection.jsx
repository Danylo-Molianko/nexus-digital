import React, { useMemo } from 'react';
import GlassCard from '../ui/GlassCard';
import { CubeTransparentIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { motion, useReducedMotion } from 'framer-motion';
import { zeroGSectionVariant, fadeInVariant, warpRevealVariant } from '../../utils/animations';

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
  const viewportAmount = useMemo(() => {
    if (typeof window !== 'undefined' && window.matchMedia?.('(hover: none)').matches) {
      return 0.1; // mobile/tablet quicker trigger
    }
    return 0.2;
  }, []);
  const shouldReduce = useReducedMotion();
  const variants = shouldReduce ? fadeInVariant : zeroGSectionVariant;

  return (
    <motion.section 
      className="py-24 my-12 bg-[#0B1A31] defer-visibility"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
    >
      <div className="container mx-auto px-4">
      <motion.div className="text-center mb-16 max-w-3xl mx-auto" variants={warpRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
          The 'Nexus Effect': Your Advantage is Synergy
        </h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
          Our strength lies in synergy. We don't just offer services; we connect them to create holistic, future-proof digital solutions.
        </p>
      </motion.div>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 [perspective:1000px]">
        {pillarsData.map((pillar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <GlassCard>
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
          </motion.div>
        ))}
      </div>
      </div>
    </motion.section>
  );
};

export default PillarsSection;