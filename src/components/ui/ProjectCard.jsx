import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-[var(--color-glass-border)] transition-all duration-300 hover:shadow-2xl hover:shadow-black/30">
      <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <p className="text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)] text-white px-3 py-1 rounded-full self-start mb-4">{project.category}</p>
        <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
        <p className="text-[var(--color-text-secondary)] mb-4">{project.description}</p>
        <div className="border-t border-[var(--color-glass-border)] pt-4 flex justify-between items-center">
          <p className="font-bold text-white">{project.result}</p>
          <a href="#" className="text-[var(--color-accent)] font-bold text-sm group-hover:underline">View Case Study →</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;