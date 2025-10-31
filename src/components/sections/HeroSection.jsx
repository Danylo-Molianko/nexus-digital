import { NavLink } from 'react-router-dom';
import AuroraBackground from '../layout/AuroraBackground';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { fadeInVariant } from '../../utils/animations';

// Заголовок: плавна поява і золоте виділення слів (без покадрової анімації літер)
const AnimatedHeadline = ({ text, highlightWords = [] }) => {
  const highlightSet = new Set(highlightWords.map(w => w.toUpperCase()));
  const tokens = text.split(/(\s+)/);
  const sanitize = (t) => t
    .toUpperCase()
    .replace(/[«»“”"'.,!?;:\(\)\[\]{}]/g, '');

  return (
    <motion.h1
      className="h1-fluid font-headings font-bold uppercase tracking-wider max-w-4xl mx-auto text-nexus-text-headings"
      variants={fadeInVariant}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {tokens.map((tok, i) => {
        if (/^\s+$/.test(tok)) return <span key={i}>{tok}</span>;
        const isGold = highlightSet.has(sanitize(tok));
        return <span key={i} className={isGold ? 'gold-text' : undefined}>{tok}</span>;
      })}
    </motion.h1>
  );
};

// Головний компонент Hero
const HeroSection = () => {
  const headlineText = "We don't just build software. We engineer your \"Intelligent Digital Core\".";

  return (
    <section 
      className="relative section-glow flex items-center justify-center min-h-[calc(100vh-var(--header-height-large))] overflow-hidden"
    >
      {/* Subtle aurora just for hero (very low opacity) */}
      <AuroraBackground className="absolute inset-0 -z-10 opacity-[0.08]" />

      <div className="container mx-auto px-4 text-center z-10">
        {/* Заголовок */}
        <AnimatedHeadline 
          text={headlineText}
          highlightWords={["Intelligent", "Digital", "Core"]}
        />
        <h2 className="sr-only">Intelligent Digital Core</h2>

        {/* Підзаголовок */}
        <motion.p
          className="body-fluid text-nexus-text-secondary max-w-3xl mx-auto mt-6"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          We fuse custom development, AI integration, and unbreakable security (the "Nexus Effect") to forge your ambitions into absolute market advantage.
        </motion.p>

        {/* CTA блок */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          {/* 1. Головна золота кнопка (Magnetic) */}
          <MagneticCTA
            as={NavLink}
            to="/contact"
            className="inline-block rounded-full px-8 py-3.5 font-headings text-sm font-bold uppercase tracking-wider 
                       bg-nexus-gold text-nexus-dark-void 
                       transition-all duration-300 
                       hover:bg-nexus-gold-hover hover:u-glow-gold"
            radius={50}
            maxOffset={3}
          >
            Schedule a Strategy Session
          </MagneticCTA>

          {/* 2. Другорядна кнопка (Арсенал) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink
              to="/arsenal"
              className="inline-block rounded-full px-8 py-3.5 font-headings text-sm font-bold uppercase tracking-wider 
                         border-2 border-nexus-gold text-nexus-gold 
                         transition-all duration-300 
                         hover:bg-nexus-gold hover:text-nexus-dark-void hover:shadow-gold-glow"
            >
              Explore Our Arsenal
            </NavLink>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

// Local magnetic CTA wrapper (applies only to primary gold CTA)
function MagneticCTA({ children, className = '', as: Wrapper = NavLink, to, href, onClick, radius = 50, maxOffset = 3, ...rest }) {
  const prefersReducedMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

  function handleMove(e) {
    if (prefersReducedMotion) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > radius) { x.set(0); y.set(0); return; }
    const clampedDx = Math.max(-radius, Math.min(dx, radius));
    const clampedDy = Math.max(-radius, Math.min(dy, radius));
    const ratio = 1 / radius;
    x.set(clampedDx * ratio * maxOffset);
    y.set(clampedDy * ratio * maxOffset);
  }
  function handleLeave() { x.set(0); y.set(0); }

  const wrapperProps = {};
  if (Wrapper === NavLink) wrapperProps.to = to;
  else if (Wrapper === 'a') wrapperProps.href = href;

  return (
    <motion.div
      style={{ x: springX, y: springY, display: 'inline-block' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onBlur={handleLeave}
    >
      <Wrapper className={className} onClick={onClick} {...wrapperProps} {...rest}>
        {children}
      </Wrapper>
    </motion.div>
  );
}