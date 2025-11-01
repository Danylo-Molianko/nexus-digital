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
    <section className="py-24 my-12 bg-[var(--bg-level1)]">
      <div className="container mx-auto px-4">
      <div className="mb-16 max-w-2xl mx-auto">
        <div className="holo-frame p-6 md:p-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Industries</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {industriesData.map((industry, index) => <IndustryCard key={index} {...industry} />)}
      </div>
      </div>
    </section>
  );
};

export default IndustriesSection;