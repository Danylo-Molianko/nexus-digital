import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <section className="pt-24 pb-16 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider">{title}</h1>
        <p className="mt-4 text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default PageHeader;