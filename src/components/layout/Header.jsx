import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }) => clsx(
    'relative py-2 text-sm uppercase tracking-wider transition-colors duration-300',
    isActive ? 'text-white' : 'text-[var(--color-text-secondary)] hover:text-white'
  );

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        // Glassmorphism: semi-transparent anthracite with strong backdrop blur
        'bg-[rgba(28,30,38,0.6)] backdrop-blur-xl'
      )}
    >
      <div
        className={clsx(
          'container mx-auto flex items-center justify-between px-4 transition-all duration-300',
          isScrolled ? 'h-[var(--header-height-small)]' : 'h-[var(--header-height-large)]'
        )}
      >
        <NavLink to="/" className="font-headings text-2xl font-bold text-white uppercase">
          Nexus Studio
        </NavLink>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/strategy" className={navLinkClasses}>STRATEGY</NavLink>
          <NavLink to="/arsenal" className={navLinkClasses}>ARSENAL</NavLink>
          <NavLink to="/team" className={navLinkClasses}>TEAM</NavLink>
          <NavLink to="/contact" className={navLinkClasses}>CONTACT</NavLink>
        </nav>
        <div className="hidden md:block">
          {/* Entrance animation wrapper preserves existing appear motion */}
          <motion.div
            initial={{ x: -300, opacity: 0, filter: 'blur(8px)' }}
            animate={{ x: 0, opacity: 1, filter: 'blur(0px)' }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, delay: 0.2 }}
          >
            {/* Subtle perpetual gold glow */}
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 15px rgba(255, 215, 0, 0.2)',
                  '0 0 25px rgba(255, 215, 0, 0.5)'
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              style={{ display: 'inline-block', borderRadius: 9999 }}
            >
              <NavLink to="/schedule-session">
                <Button variant="secondary">SCHEDULE SESSION</Button>
              </NavLink>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Header;