import React from 'react';
import GlassCardStatic from './GlassCardStatic';

const TeamMemberCard = ({ member }) => {
  return (
    <GlassCardStatic className="text-center">
      <img 
        src={member.imageUrl} 
        alt={`Photo of ${member.name}`} 
        className="w-32 h-32 rounded-full mx-auto mb-6 border-2 border-[var(--color-accent)]/50"
      />
      <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
      <p className="font-bold text-[var(--color-accent)] mb-4">{member.role}</p>
      <p className="text-[var(--color-text-secondary)] text-sm">{member.bio}</p>
    </GlassCardStatic>
  );
};

export default TeamMemberCard;