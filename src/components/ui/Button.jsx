import React from 'react';
import clsx from 'clsx';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles =
    'inline-block rounded-full px-8 py-3 font-headings text-sm font-bold uppercase tracking-wider transition-all duration-300 transform focus-visible-ring';

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-white border-2 border-transparent hover:bg-transparent hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/30 hover:u-glow-gold',
    secondary:
      'bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-accent)]/30 hover:u-glow-gold',
  };

  const buttonClasses = clsx(baseStyles, variants[variant], className);

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;