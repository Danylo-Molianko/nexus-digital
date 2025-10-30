import React, { useMemo } from 'react';
import GlassCard from '../ui/GlassCard';
import { motion, useReducedMotion } from 'framer-motion';
import { zeroGSectionVariant, fadeInVariant } from '../../utils/animations';

const processSteps = [
    { title: "Discovery & Strategy", description: "We dive deep into your business to define objectives, establish KPIs, and create a strategic project roadmap." },
    { title: "Architecture & Design", description: "We architect the solution and design intuitive UX/UI, creating interactive prototypes to visualize the final product." },
    { title: "Creation & Development", description: "Our team writes clean, scalable code using Agile methodologies for iterative development and seamless integration." },
    { title: "Testing & Refinement", description: "We conduct rigorous testing, including comprehensive security audits, to ensure a flawless and robust product." },
    { title: "Launch & Handover", description: "We manage the entire launch process, from server configuration to market release, ensuring a smooth transition." },
    { title: "Partnership & Evolution", description: "Our partnership continues post-launch with ongoing monitoring, performance analysis, and strategic enhancements." }
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
            className="container mx-auto px-4 py-24"
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: viewportAmount }}
        >
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">
                    Our Process — Your Predictable Victory
                </h2>
                <p className="mt-4 text-lg text-[var(--color-text-secondary)]">
                    You aren't buying a 'black box.' You are investing in a transparent, 6-step engineering process that guarantees outcomes.
                </p>
            </div>
            
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
                                    <GlassCard className={`mx-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        <p className="text-lg font-bold text-[var(--color-accent)] mb-2">Step {index + 1}</p>
                                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-[var(--color-text-secondary)]">{step.description}</p>
                                    </GlassCard>
                                </motion.div>
                            </div>
                            <div className="w-1/2"></div>
                        </div>
                        {/* The Timeline Dot */}
                        <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-[var(--color-background-deep)] border-2 border-[var(--color-accent)] rounded-full -translate-y-1/2 -translate-x-1/2"></div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
};

export default ProcessSection;