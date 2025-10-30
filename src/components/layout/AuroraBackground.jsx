import React from 'react';

const AuroraBackground = ({ className = "fixed inset-0 -z-10 overflow-hidden" }) => {
  return (
    <div className={className} aria-hidden>
      <div className="absolute inset-0">
        {/* Brand-aligned subtle blobs: gold + tech-blue/purple */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-nexus-gold/10 rounded-full blur-3xl animate-aurora-pulse animate-slow-drift" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-nexus-tech-blue/10 rounded-full blur-3xl animate-aurora-pulse animate-slow-drift" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-nexus-tech-purple/10 rounded-full blur-3xl animate-aurora-pulse animate-slow-drift" style={{ animationDelay: '4s' }} />
      </div>
    </div>
  );
};

export default AuroraBackground;