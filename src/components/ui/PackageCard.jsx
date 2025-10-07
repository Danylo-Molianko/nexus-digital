import React from 'react';
import clsx from 'clsx';
import GlassCard from './GlassCard';
import Button from './Button';

const PackageCard = ({ tier, tag, price, description, features, highlighted = false }) => {
  return (
    <GlassCard className={clsx('flex flex-col', highlighted && 'border-[var(--color-accent)]/50 transform md:scale-105')}>
      {tag && (
        <div className="absolute top-0 right-6 bg-[var(--color-accent)] text-white text-xs font-bold uppercase px-3 py-1 rounded-b-lg">{tag}</div>
      )}
      <h3 className="text-2xl font-bold text-center">{tier}</h3>
      <p className="text-5xl font-bold text-center my-4 text-white">{price}</p>
      <p className="text-[var(--color-text-secondary)] text-center h-12">{description}</p>
      <ul className="my-8 space-y-3 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-[var(--color-accent)] mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={highlighted ? 'primary' : 'secondary'} className="w-full">
        Choose Plan
      </Button>
    </GlassCard>
  );
};

export default PackageCard;