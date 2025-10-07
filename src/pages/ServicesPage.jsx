import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import PillarsSection from '../components/sections/PillarsSection';
import ServiceDetailBlock from '../components/sections/ServiceDetailBlock';
import PackageCard from '../components/ui/PackageCard';
import { CubeTransparentIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const servicesData = [
    {
        icon: CubeTransparentIcon,
        title: "Build & Modernize",
        included: ["Architectural Planning", "Custom Development", "API Integration", "Database Design", "Testing & QA"],
        technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS"]
    },
    {
        icon: SparklesIcon,
        title: "Innovate & Automate",
        included: ["Custom ML Models for Business", "Workflow Automation", "Chatbots & AI Assistants", "Analytics & Reporting", "Third-Party AI API Integration"],
        technologies: ["TensorFlow", "OpenAI", "Zapier", "Power BI", "Azure AI"]
    },
    {
        icon: ShieldCheckIcon,
        title: "Secure & Comply",
        included: ["Security Audits", "Penetration Testing", "GDPR Compliance", "DevSecOps Setup", "Threat Monitoring"],
        technologies: ["ISO 27001", "OWASP", "GDPR", "SOC 2", "PCI DSS"]
    }
];

const packagesData = [
    { tier: "Startup", price: "$5,000", description: "Ideal for an MVP", features: ["Landing page", "Basic CMS", "Mobile responsive version", "30 days of support"] },
    { tier: "Business", tag: "Popular", price: "$15,000", description: "For growing companies", features: ["Full web application", "API integration", "Admin panel", "6 months of support", "Analytics dashboard"], highlighted: true },
    { tier: "Enterprise", price: "Custom", description: "Comprehensive solutions", features: ["Full product ecosystem", "AI feature integration", "Enterprise-grade security", "Dedicated ongoing support", "Team training & onboarding"] }
];

const ServicesPage = () => {
  return (
    <>
      <PageHeader title="Our Services" subtitle="Three pillars that create one resilient digital ecosystem." />
      <PillarsSection />
      
      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">A Deeper Dive Into Our Services</h2>
        </div>
        {servicesData.map((service, index) => <ServiceDetailBlock key={index} {...service} />)}
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Service Packages</h2>
            <p className="mt-4 text-lg text-[var(--color-text-secondary)]">Flexible solutions for every budget and ambition.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagesData.map((pkg, index) => <PackageCard key={index} {...pkg} />)}
        </div>
      </section>
    </>
  );
};

export default ServicesPage;