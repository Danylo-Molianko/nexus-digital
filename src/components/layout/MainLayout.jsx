import React from 'react';
// import AuroraBackground from './AuroraBackground';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
  {/* Global subtle noise overlay for premium film texture */}
      <div aria-hidden className="noise-overlay" />
  {/* Cursor-following glow removed per directive; using per-card interactive light */}
  {/* Reality distortion layers removed for performance hotfix */}
  {/* <RealityBackground /> */}
  {/* <AuroraBackground /> */}
      <Header />
      <main className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;