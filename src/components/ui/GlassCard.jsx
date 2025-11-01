import { useGlassCardHover } from '../../utils/gsapHooks';

/* === A-LIST GLASS CARD WITH GSAP HOVER === */

const GlassCard = ({ children, className = '' }) => {
  const cardRef = useGlassCardHover();
  
  return (
    <div
      ref={cardRef}
      className={`
        rounded-2xl p-6
        bg-[var(--color-glass-bg)] 
        border border-[var(--color-glass-border)]
        backdrop-blur-[var(--glass-blur)]
        shadow-lg
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default GlassCard;
