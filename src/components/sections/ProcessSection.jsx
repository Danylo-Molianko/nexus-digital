import React, { useMemo } from 'react';
import GlassCardStatic from '../ui/GlassCardStatic';
import { motion, useReducedMotion } from 'framer-motion';
import { zeroGSectionVariant, fadeInVariant, warpRevealVariant } from '../../utils/animations';

const processSteps = [
    { title: "Discovery & Strategy", description: "Define goals, KPIs, and a clear roadmap." },
    { title: "Architecture & Design", description: "Plan the system and craft intuitive UX/UI." },
    { title: "Creation & Development", description: "Ship clean, scalable code in tight iterations." },
    { title: "Testing & Security", description: "Verify quality and harden with security audits." },
    { title: "Launch & Handover", description: "Smooth release, docs, and ownership transfer." },
    { title: "Partnership & Evolution", description: "Monitor, improve, and scale continuously." }
];

const ProcessSection = () => {
    const viewportAmount = useMemo(() => {
        if (typeof window !== 'undefined' && window.matchMedia?.('(hover: none)').matches) {
            return 0.1;
        }
        return 0.2;
    }, []);
    const shouldReduce = useReducedMotion();
    const variants = shouldReduce ? fadeInVariant : zeroGSectionVariant;

    return (
        <motion.section 
            className="py-24 my-12 bg-[var(--bg-level1)] defer-visibility"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
        >
            <div className="container mx-auto px-4">
            <motion.div className="mb-20 max-w-3xl mx-auto" variants={warpRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                <div className="holo-frame p-6 md:p-8 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
                      A Transparent, 6‑Step Process
                  </h2>
                  <p className="mt-3 text-lg text-[var(--color-text-secondary)]">
                      No black boxes. Just clarity and momentum.
                  </p>
                </div>
            </motion.div>
            
            <div className="relative max-w-4xl mx-auto">
                {/* The Timeline Line */}
                <div className="absolute left-1/2 top-0 h-full w-0.5 bg-[var(--color-glass-border)] -translate-x-1/2"></div>
                
                {processSteps.map((step, index) => (
                    <div key={index} className="relative mb-12">
                        <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                            <div className="w-1/2">
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                                    viewport={{ once: true, amount: 0.2 }}
                                >
                                    <GlassCardStatic className={`mx-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        <p className="text-lg font-bold text-[var(--color-accent)] mb-2">Step {index + 1}</p>
                                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-[var(--color-text-secondary)]">{step.description}</p>
                                    </GlassCardStatic>
                                </motion.div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>
                        {/* The Timeline Dot */}
                        <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-[var(--color-background-deep)] border-2 border-[var(--color-accent)] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                ))}
            </div>
            </div>
        </motion.section>
    );
};

export default ProcessSection;