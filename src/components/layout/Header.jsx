import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

// СТРАТЕГІЧНІ НАВІГАЦІЙНІ ПОСИЛАННЯ
const navLinks = [
  { title: 'СТРАТЕГІЯ', to: '/services' }, // Мапуємо "Стратегія" на існуючий роут "/services"
  { title: 'АРСЕНАЛ', to: '/projects' },    // Мапуємо "Арсенал" на існуючий роут "/projects"
  { title: 'КОМАНДА', to: '/about' },      // Мапуємо "Команда" на існуючий роут "/about"
  { title: 'КОНТАКТ', to: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerHeight = isScrolled 
    ? 'h-[var(--header-height-small)]' // 64px
    : 'h-[var(--header-height-large)]'; // 80px

  const activeLinkStyle = "text-nexus-gold after:w-full"; // Стиль для активного посилання
  const baseLinkStyle = "relative py-2 text-sm font-medium tracking-wide text-nexus-text-primary transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-nexus-gold after:transition-all after:duration-300 hover:text-white hover:after:w-full";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-nexus-glass-bg backdrop-blur-[var(--glass-blur)] border-b border-nexus-glass-border shadow-tech-glow' : 'bg-transparent border-b border-transparent'}`}
      >
        <div className={`container mx-auto flex items-center justify-between px-4 transition-all duration-300 ${headerHeight}`}>
          
          {/* === ЛОГОТИП NEXUS (НОВИЙ) === */}
          <Link to="/" className="flex items-center h-full py-2" onClick={() => setIsMobileMenuOpen(false)}>
            <img 
              src="/logo-nexus.jpg" // Синхронізовано з актуальним файлом у /public
              alt="Nexus Studio Logo" 
              className="h-full object-contain transition-all duration-300" 
              style={{ filter: 'drop-shadow(0 0 10px rgba(199, 139, 12, 0.3))' }} // Додаємо логотипу золоте сяйво
            />
          </Link>

          {/* === НАВІГАЦІЯ (DESKTOP) === */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.title} 
                to={link.to}
                className={({ isActive }) => `${baseLinkStyle} ${isActive ? activeLinkStyle : ''}`}
              >
                {link.title}
              </NavLink>
            ))}
          </nav>

          {/* === CTA (ЗОЛОТИЙ СТАНДАРТ) (DESKTOP) === */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="inline-block rounded-full px-6 py-2.5 text-sm font-medium uppercase tracking-wider 
                           bg-nexus-gold text-nexus-dark-void 
                           transition-all duration-300 
                           hover:bg-nexus-gold-hover hover:shadow-gold-glow"
              >
                Запланувати Сесію
              </Link>
            </motion.div>
          </div>

          {/* === МОБІЛЬНА КНОПКА === */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-nexus-text-headings"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>

        {/* === МОБІЛЬНЕ МЕНЮ (НОВЕ) === */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-full left-0 w-full md:hidden bg-nexus-dark-primary shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map((link) => (
              <NavLink 
                key={link.title} 
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `text-lg tracking-wider ${isActive ? 'text-nexus-gold' : 'text-nexus-text-primary'}`}
              >
                {link.title}
              </NavLink>
            ))}
            
            {/* === CTA (МОБІЛЬНЕ) === */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4"
            >
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-block rounded-full px-8 py-3 text-base font-medium uppercase tracking-wider 
                           bg-nexus-gold text-nexus-dark-void 
                           hover:bg-nexus-gold-hover hover:shadow-gold-glow"
              >
                Запланувати Сесію
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      </header>
      
      {/* === ЗАГЛУШКА ДЛЯ КОНТЕНТУ === */}
      {/* Додаємо пустий блок висотою з хедер, щоб контент не ховався під нього */}
      <div className={`transition-all duration-300 ${headerHeight}`}></div>
    </>
  );
};

export default Header;