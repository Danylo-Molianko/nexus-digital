import React from 'react';
import GlassCard from './GlassCard';

const IndustryCard = ({ icon: Icon, title }) => {
  return (
    <GlassCard className="text-center flex flex-col items-center justify-center p-6">
      <Icon className="h-10 w-10 text-[var(--color-accent)] mb-4" />
      <h3 className="text-lg font-bold text-white">{title}</h3>
    </GlassCard>
  );
};

export default IndustryCard;