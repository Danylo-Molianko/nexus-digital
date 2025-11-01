import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { zeroGSectionVariant, warpRevealVariant } from '../../utils/animations'; // Нульова гравітація + warp reveal

const CtaSection = () => {
  return (
    <motion.section
      className="relative section-glow bg-[var(--bg-level1)] py-24 my-12" // Додаємо золотий глоу позаду заголовка
      variants={zeroGSectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
  <div className="container mx-auto px-4 text-center defer-visibility">
        
        {/* === НАША ГОЛОВНА УТП (З ДОКУМЕНТУ 2.3) === */}
        <motion.div variants={warpRevealVariant} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <div className="max-w-4xl mx-auto holo-frame p-6 md:p-8 mb-12">
            <h2 className="text-3xl md:text-5xl font-headings font-bold text-nexus-text-headings">
              Ваш проєкт ведуть засновники. Не менеджери.
            </h2>
            <p className="text-lg md:text-xl text-nexus-text-secondary max-w-3xl mx-auto mt-4">
              Прямий доступ і особиста відповідальність лідерів: Технології, Стратегія, Креатив.
            </p>
          </div>
        </motion.div>

        {/* === КОМАНДА (ШАБЛОН) === */}
        {/* (Ми замінимо це на реальні фото, коли отримаємо досьє) */}
  <div className="flex justify-center items-center gap-8 mb-12 holo-frame p-6">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-nexus-dark-void border-2 border-nexus-gold mx-auto mb-2 flex items-center justify-center">
              <span className="font-headings text-2xl text-nexus-gold">О</span>
            </div>
            <h4 className="font-headings text-white">Олександр</h4>
            <p className="text-sm text-nexus-text-secondary">Технології & AI</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-nexus-dark-void border-2 border-nexus-gold mx-auto mb-2 flex items-center justify-center">
              <span className="font-headings text-2xl text-nexus-gold">Д</span>
            </div>
            <h4 className="font-headings text-white">Данило</h4>
            <p className="text-sm text-nexus-text-secondary">Стратегія & Маркетинг</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-nexus-dark-void border-2 border-nexus-gold mx-auto mb-2 flex items-center justify-center">
              <span className="font-headings text-2xl text-nexus-gold">Т</span>
            </div>
            <h4 className="font-headings text-white">Тіма</h4>
            <p className="text-sm text-nexus-text-secondary">Дизайн & 3D</p>
          </div>
        </div>

        {/* === ФІНАЛЬНИЙ ЗОЛОТИЙ CTA === */}
        <MagneticCTA
          as={NavLink}
          to="/contact"
          className="inline-block rounded-full px-10 py-4 font-headings text-base font-bold uppercase tracking-wider 
                     bg-nexus-gold text-nexus-dark-void 
                     transition-all duration-300 
                     hover:bg-nexus-gold-hover hover:u-glow-gold glass-interactive glass-interactive--cta"
          radius={50}
          maxOffset={3}
        >
          Запланувати Стратегічну Сесію
        </MagneticCTA>

      </div>
    </motion.section>
  );
};

export default CtaSection;

// Local magnetic CTA wrapper for the primary gold CTA only
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
