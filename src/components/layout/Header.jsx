import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const navLinks = [
  { title: 'STRATEGY', to: '/strategy' },
  { title: 'ARSENAL', to: '/arsenal' },
  { title: 'TEAM', to: '/team' },
  { title: 'CONTACT', to: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(prev => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerHeight = isScrolled ? 'h-16' : 'h-20';

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-gold focus:text-dark focus:rounded-lg focus:font-bold"
      >
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 w-full z-50 ${isScrolled ? 'bg-dark/90 backdrop-blur-md border-b border-dark-blue/30' : 'bg-transparent border-b border-transparent'}`}
      >
        <div className={`container mx-auto flex items-center justify-between px-4 ${headerHeight}`}>
          <Link to="/" className="flex items-center h-full py-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img
              src="/logo-nexus.png"
              alt="Nexus Studio Logo"
              width="80"
              height="80"
              className="h-full object-contain"
              style={{ filter: 'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.to}
                className={({ isActive }) =>
                  `relative py-2 px-4 text-sm font-bold tracking-wide text-center text-white ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="gold-button"
            >
              Schedule Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-dark border-t border-dark-blue/30">
            <nav className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.title}
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg tracking-wider text-center text-white ${isActive ? 'opacity-100' : 'opacity-80'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}

              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="gold-button mt-4"
              >
                Schedule Session
              </Link>
            </nav>
          </div>
        )}
      </header>

      <div className={headerHeight}></div>
    </>
  );
};

export default Header;
