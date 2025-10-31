import React, { useState, useEffect } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ui/ProjectCard';
import ImpactSection from '../components/sections/ImpactSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import { projectsData } from '../data/projectsData';

const filters = ['All', 'Web Apps', 'Mobile Apps', 'AI Solutions'];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter(project => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <>
      <PageHeader title="Our Projects" subtitle="Real-world case studies demonstrating the power of the Nexus Effect." />
      
  <section className="py-24 my-12 bg-[var(--bg-level1)]">
        <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-wider">Our Best Projects</h2>
          <div className="flex justify-center flex-wrap gap-4 mt-8">
            {filters.map(filter => (
              <Button 
                key={filter}
                variant={activeFilter === filter ? 'primary' : 'secondary'}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        </div>
      </section>

      <ImpactSection />
      <IndustriesSection />
    </>
  );
};

export default ProjectsPage;