import React, { useEffect } from 'react';

// Global cursor-following radial glow. Disabled for reduced-motion.
const CursorGlow = () => {
  useEffect(() => {
    const root = document.documentElement;
    const handler = (e) => {
      root.style.setProperty('--mx', `${e.clientX}px`);
      root.style.setProperty('--my', `${e.clientY}px`);
    };
    window.addEventListener('pointermove', handler, { passive: true });
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  return <div aria-hidden className="cursor-glow" />;
};

export default CursorGlow;
