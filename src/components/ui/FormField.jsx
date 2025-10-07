import React from 'react';

const FormField = ({ id, label, type = 'text', as = 'input', rows = 4, ...props }) => {
  const commonStyles = "w-full bg-[var(--color-glass-bg)] border border-[var(--color-glass-border)] rounded-lg py-3 px-4 text-white placeholder:text-[var(--color-text-secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition-all duration-300";

  const InputComponent = as;

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
        {label}
      </label>
      <InputComponent
        id={id}
        type={type}
        className={commonStyles}
        rows={as === 'textarea' ? rows : undefined}
        {...props}
      />
    </div>
  );
};

export default FormField;