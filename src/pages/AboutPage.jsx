import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import GlassCard from '../components/ui/GlassCard';
import TeamMemberCard from '../components/ui/TeamMemberCard';
import { teamData } from '../data/teamData';

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="About Nexus Studio" 
        subtitle="We are a team of architects, innovators, and security experts dedicated to engineering the digital future." 
      />
      
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-wider mb-6">Our Mission</h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-4">
              To be the most trusted strategic technology partner for companies aiming to transform their operations and achieve a decisive competitive advantage through innovation.
            </p>
            <p className="text-[var(--color-text-secondary)]">
              We don't just build software; we engineer intelligent, resilient digital ecosystems that become the core of our clients' success. Our strength lies in the synergy of development, AI, and security.
            </p>
          </div>
          <GlassCard>
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <ul className="space-y-3">
              <li className="font-bold text-white">Integrated Excellence</li>
              <li className="font-bold text-white">Strategic Partnership</li>
              <li className="font-bold text-white">Pragmatic Innovation</li>
              <li className="font-bold text-white">Security by Design</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="bg-[var(--color-background-medium)]/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Meet Our Team</h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">The architects behind your success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamData.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;