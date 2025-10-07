import React from 'react';
import clsx from 'clsx';

const GlassCard = ({ children, className }) => {
  const cardClasses = clsx(
    'bg-[var(--color-glass-bg)] backdrop-blur-[var(--glass-blur)] border border-[var(--color-glass-border)] rounded-2xl p-8 transition-all duration-300',
    'hover:-translate-y-2 hover:border-[var(--color-accent)]/50 hover:shadow-2xl hover:shadow-black/20',
    className
  );

  return <div className={cardClasses}>{children}</div>;
};

export default GlassCard;