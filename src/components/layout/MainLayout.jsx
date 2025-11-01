import React from 'react';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      {/* Global subtle noise overlay for premium film texture */}
      <div aria-hidden className="noise-overlay" />
      <Header />
      <main id="main-content" className="relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;