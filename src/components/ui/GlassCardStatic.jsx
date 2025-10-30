import React from 'react';

/* Lightweight glass card without 3D tilt. For static informational blocks. */
const GlassCardStatic = ({ children, className = '' }) => {
  return (
    <div
      className={
        `bg-nexus-glass-bg backdrop-blur-[var(--glass-blur)] 
         border border-nexus-glass-border 
         rounded-2xl p-8 
         transition-all duration-300 
         hover:border-nexus-gold/50 hover:u-glow-gold ${className}`
      }
    >
      {children}
    </div>
  );
};

export default GlassCardStatic;
