import React from 'react';
import { motion } from 'framer-motion';
import { warpRevealVariant, fadeInVariant } from '../../utils/animations';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="pt-24 pb-16 text-center section-glow relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={warpRevealVariant}
          initial="hidden"
          animate="visible"
        >
          <h1 className="h1-fluid font-bold uppercase tracking-wider">{title}</h1>
        </motion.div>
        {subtitle && (
          <motion.p
            className="body-fluid mt-4 text-[var(--color-text-secondary)] max-w-3xl mx-auto"
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;