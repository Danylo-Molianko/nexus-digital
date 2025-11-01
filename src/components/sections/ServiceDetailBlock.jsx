import React from 'react';
import GlassCard from '../ui/GlassCard';

const ServiceDetailBlock = ({ icon: Icon, title, included, technologies }) => {
  return (
    <GlassCard className="mb-12">
      <div className="md:flex md:gap-12">
        <div className="flex-shrink-0 mb-8 md:mb-0 text-center">
          <div className="bg-[var(--color-accent-dimmed)] p-4 inline-block rounded-lg border border-[var(--color-accent)]/30">
            <Icon className="h-12 w-12 text-[var(--color-accent)]" />
          </div>
          <h2 className="text-3xl font-bold mt-4">{title}</h2>
        </div>
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">What's Included</h3>
            <ul className="space-y-2">
              {included.map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-[var(--color-accent)] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span className="text-[var(--color-text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Technologies / Standards</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span key={index} className="bg-[var(--color-background-deep)] text-[var(--color-text-secondary)] text-sm font-medium px-3 py-1 rounded-full border border-[var(--color-glass-border)]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ServiceDetailBlock;
