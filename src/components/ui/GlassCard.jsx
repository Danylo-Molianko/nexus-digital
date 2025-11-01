import { useEffect, useMemo, useRef, useState } from 'react';

/* === СПРОЩЕНИЙ GLASS CARD (БЕЗ 3D ЕФЕКТІВ) === */

const GlassCard = ({ children, className = '' }) => {
  return (
    <div
      className={`
        rounded-2xl p-6
        bg-[var(--color-glass-bg)] 
        border border-[var(--color-glass-border)]
        backdrop-blur-[var(--glass-blur)]
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
