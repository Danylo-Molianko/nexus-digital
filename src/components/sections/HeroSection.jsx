import { NavLink } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative flex items-center justify-center min-h-[calc(100vh-5rem)] overflow-hidden"
      style={{ backgroundColor: 'var(--bg-level0)' }}
    >
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider text-white mb-6">
            We engineer your{' '}
            <span className="gold-text">Intelligent Digital Core</span>
          </h1>

          {/* Підзаголовок */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            We fuse custom development, AI integration, and unbreakable security to forge your ambitions into absolute market advantage.
          </p>

          {/* CTA блок */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <NavLink
              to="/contact"
              className="gold-button"
            >
              Schedule a Strategy Session
            </NavLink>

            <NavLink
              to="/arsenal"
              className="btn-blue"
            >
              Explore Our Arsenal
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
