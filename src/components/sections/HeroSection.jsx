import { NavLink } from 'react-router-dom';
import AuroraBackground from '../layout/AuroraBackground';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { 
  neuralContainerVariant, 
  neuralLetterVariantMechanical as neuralLetterVariant,
  fadeInVariant 
} from '../../utils/animations'; // Імпортуємо наш Кінетичний Рушій
// useReducedMotion imported above

// Компонент для "Нейронної Типографіки" з підтримкою золотих слів
const AnimatedHeadline = ({ text, highlightWords = [] }) => {
  const shouldReduce = useReducedMotion();
  // Підготуємо множину виділених слів у верхньому регістрі
  const highlightSet = new Set(highlightWords.map(w => w.toUpperCase()));
  // Розбиваємо текст на токени, зберігаючи пробіли
  const tokens = text.split(/(\s+)/);
  const sanitize = (t) => t
    .toUpperCase()
    .replace(/[«»“”"'.,!?;:()\[\]{}]/g, '');

  return (
    <motion.h1
      className="h1-fluid font-headings font-bold uppercase tracking-wider max-w-4xl text-nexus-text-headings"
      variants={shouldReduce ? fadeInVariant : neuralContainerVariant}
      initial="hidden"
      animate="visible"
    >
      {shouldReduce
        ? (
          tokens.map((tok, i) => {
            const isSpace = /^\s+$/.test(tok);
            if (isSpace) return <span key={i}>{tok}</span>;
            const isGold = highlightSet.has(sanitize(tok));
            return <span key={i} className={isGold ? 'gold-text' : undefined}>{tok}</span>;
          })
        )
        : (
          tokens.flatMap((tok, ti) => {
            const isSpace = /^\s+$/.test(tok);
            if (isSpace) {
              return (
                <motion.span key={`s-${ti}`} variants={neuralLetterVariant} className="inline-block">{'\u00A0'}</motion.span>
              );
            }
            const isGold = highlightSet.has(sanitize(tok));
            return Array.from(tok).map((letter, li) => (
              <motion.span
                key={`l-${ti}-${li}`}
                variants={neuralLetterVariant}
                className={`inline-block ${isGold ? 'gold-text' : ''}`}
              >
                {letter}
              </motion.span>
            ));
          })
        )
      }
    </motion.h1>
  );
};

// Головний компонент Hero
const HeroSection = () => {
  // === НОВИЙ СТРАТЕГІЧНИЙ ТЕКСТ ===
  const headlineText = "We don't just build software. We engineer your \u00AB\u0406\u041D\u0422\u0415\u041b\u0415\u041a\u0422\u0423\u0410\u041b\u042c\u041d\u0415 \u0426\u0418\u0424\u0420\u041e\u0412\u0415 \u042f\u0414\u0420\u041e\u00BB.";
  
  return (
    <section 
      className="relative section-glow flex items-center justify-center min-h-[calc(100vh-var(--header-height-large))] overflow-hidden"
    >
      {/* Subtle aurora just for hero (very low opacity) */}
      <AuroraBackground className="absolute inset-0 -z-10 opacity-[0.08]" />
      {/* ТУТ МИ ДОДАМО "СЯЙВО КУРСОРУ" У НАСТУПНОМУ ПРОМТІ. 
        Поки що залишаємо місце.
      */}

      <div className="container mx-auto px-4 text-center z-10">
        
        {/* === ВАУ-ЕФЕКТ: НЕЙРОННИЙ ЗАГОЛОВOК === */}
  <AnimatedHeadline 
    text={headlineText}
    highlightWords={["ІНТЕЛЕКТУАЛЬНЕ", "ЦИФРОВЕ", "ЯДРО"]}
  />
  <h2 className="sr-only">Intelligent Digital Core</h2>

        {/* === ПІДЗАГОЛОВОК (З'являється після заголовку) === */}
        <motion.p
          className="body-fluid text-nexus-text-secondary max-w-3xl mx-auto mt-6"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          We fuse custom development, AI integration, and unbreakable security (the \"Nexus Effect\") to forge your ambitions into absolute market advantage.
        </motion.p>

        {/* === БЛОК CTA (З'являється останнім) === */}
        <motion.div 
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 1.8 }} // Найбільша затримка
        >
          {/* 1. Головна Золота Кнопка (Magnetic) */}
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
          
          {/* 2. Другорядна Кнопка (Арсенал) */}
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