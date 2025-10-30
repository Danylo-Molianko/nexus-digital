import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="pt-24 pb-16 text-center section-glow relative">
      <div className="container mx-auto px-4">
        <h1 className="h1-fluid font-bold uppercase tracking-wider">{title}</h1>
        <p className="body-fluid mt-4 text-[var(--color-text-secondary)] max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;