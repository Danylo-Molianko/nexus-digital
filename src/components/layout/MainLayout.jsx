import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
  useEffect(() => {
    // Cinematic entrance animation for layout frame
    gsap.from('.site-header', {
      duration: 1,
      yPercent: -100,
      ease: 'power3.out',
      delay: 0.2
    });

    gsap.from('.site-footer', {
      duration: 1,
      yPercent: 100,
      ease: 'power3.out',
      delay: 0.2
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Global subtle noise overlay for premium film texture */}
      <div aria-hidden className="noise-overlay" />
      <div className="site-header">
        <Header />
      </div>
      <main id="main-content" className="relative z-10">
        {children}
      </main>
      <div className="site-footer">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;