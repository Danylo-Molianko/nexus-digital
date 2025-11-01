import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AnnouncementBar from '../../components/experiments/uizard-navy/AnnouncementBar';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Global subtle noise overlay for premium film texture */}
      <div aria-hidden className="noise-overlay" />
      {/* Navy announcement bar */}
      <AnnouncementBar text="Navy Neon is here — premium deep-navy palette with electric blue accents" cta="Preview" />
      <Header />
      <main id="main-content" className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;