import React from 'react';
import { useGlassCardHover } from '../../utils/gsapHooks';

/* A-LIST Glass card with GSAP hover animation */
const GlassCardStatic = ({ children, className = '' }) => {
  const cardRef = useGlassCardHover();
  
  return (
    <div
      ref={cardRef}
      className={
        `bg-nexus-glass-bg backdrop-blur-[var(--glass-blur)] 
         border border-nexus-glass-border 
         rounded-2xl p-8 
         hover:border-nexus-gold/50 hover:shadow-lg hover:shadow-[var(--color-accent)]/20 
         focus-visible-ring ${className}`
      }
    >
      {children}
    </div>
  );
};

export default GlassCardStatic;
