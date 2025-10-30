import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import GlassCardStatic from '../components/ui/GlassCardStatic';
import TeamMemberCard from '../components/ui/TeamMemberCard';
import { teamData } from '../data/teamData';

const AboutPage = () => {
  return (
    <>
      <PageHeader 
        title="Your Strategic Engineering Partner" 
        subtitle="We are a team of architects, innovators, and security experts united by a single purpose: to engineer your market domination." 
      />
      
      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-bold uppercase tracking-wider mb-6">Our Doctrine</h2>
            <p className="text-lg text-[var(--color-text-secondary)]">
              Our goal is to be the only technology partner...
            </p>
          </div>
          <GlassCardStatic>
            <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
            <ul className="space-y-3">
              <li className="font-bold text-white">Integrated Excellence</li>
              <li className="font-bold text-white">Strategic Partnership</li>
              <li className="font-bold text-white">Pragmatic Innovation</li>
              <li className="font-bold text-white">Security by Design</li>
            </ul>
          </GlassCardStatic>
        </div>
      </section>

      <section className="bg-[var(--color-background-medium)]/50 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">The Nexus Command: Your Core Advantage</h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">Our leadership is the living embodiment of the Three Pillars: Strategy, Innovation, and Security.</p>
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