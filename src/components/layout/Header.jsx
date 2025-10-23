import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
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
    <header className={clsx(
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-[var(--color-glass-bg)] backdrop-blur-[var(--glass-blur)] border-b border-[var(--color-glass-border)]' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex items-center justify-between h-[var(--header-height)] px-4">
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
          <NavLink to="/schedule-session">
            <Button variant="secondary">SCHEDULE SESSION</Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;