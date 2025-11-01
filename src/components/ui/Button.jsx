import React from 'react';
import clsx from 'clsx';
import { useGoldButtonHover } from '../../utils/gsapHooks';

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const buttonRef = useGoldButtonHover();
  
  const baseStyles =
    'inline-block rounded-full px-8 py-3 font-headings text-sm font-bold uppercase tracking-wider focus-visible-ring';

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-white border-2 border-transparent hover:border-[var(--color-accent)] hover:shadow-lg hover:shadow-[var(--color-accent)]/30',
    secondary:
      'bg-transparent text-[var(--color-accent)] border-2 border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--color-accent)]/30',
  };

  const buttonClasses = clsx(baseStyles, variants[variant], className);

  return (
    <button ref={buttonRef} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;