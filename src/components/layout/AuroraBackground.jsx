import React from 'react';

const AuroraBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-teal-900/20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-aurora-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl animate-aurora-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl animate-aurora-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-indigo-500/25 rounded-full blur-3xl animate-aurora-pulse" style={{ animationDelay: '6s' }}></div>
      </div>
    </div>
  );
};

export default AuroraBackground;