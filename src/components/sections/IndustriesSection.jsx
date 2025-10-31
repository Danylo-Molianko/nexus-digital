import React from 'react';
import IndustryCard from '../ui/IndustryCard';
import { BuildingLibraryIcon, ShoppingCartIcon, HeartIcon, AcademicCapIcon, CogIcon, TruckIcon } from '@heroicons/react/24/outline';

const industriesData = [
    { icon: BuildingLibraryIcon, title: "FinTech" },
    { icon: ShoppingCartIcon, title: "E-commerce" },
    { icon: HeartIcon, title: "MedTech" },
    { icon: AcademicCapIcon, title: "EdTech" },
    { icon: CogIcon, title: "Manufacturing" },
    { icon: TruckIcon, title: "Logistics" }
];

const IndustriesSection = () => {
  return (
    <section className="py-24 my-12 bg-[#0F213B]">
      <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Industries We Work In</h2>
        <p className="mt-4 text-lg text-[var(--color-text-secondary)]">Deep expertise across a wide range of business sectors.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {industriesData.map((industry, index) => <IndustryCard key={index} {...industry} />)}
      </div>
      </div>
    </section>
  );
};

export default IndustriesSection;