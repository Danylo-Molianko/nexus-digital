import { useEffect, useMemo, useRef, useState } from 'react';
import { 
  motion, 
  useMotionValue, 
  useSpring, 
  useTransform 
} from 'framer-motion';

/* === КОМПОНЕНТ 3D-СКЛА (НОВИЙ) === */

const GlassCard = ({ children, className = '' }) => {
  const cardRef = useRef(null);
  const supportsHover = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia?.('(hover: hover)').matches,
    []
  );
  const [enabled, setEnabled] = useState(false);
  useEffect(() => setEnabled(!!supportsHover), [supportsHover]);

  // Створюємо motion values для відстеження позиції курсора
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Створюємо "пружинну" анімацію для плавності нахилу
  const springConfig = { stiffness: 150, damping: 20 };
  
  // Трансформуємо позицію курсора (0...width) у градуси нахилу (-10deg...10deg)
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-10, 10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    // Отримуємо розміри картки
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    // Розраховуємо позицію курсора ВІДНОСНО картки (від 0.0 до 1.0)
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    mouseX.set(relativeX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = () => {
    // Повертаємо картку у вихідне положення (центр)
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
  onMouseMove={enabled ? handleMouseMove : undefined}
  onMouseLeave={enabled ? handleMouseLeave : undefined}
      
      // Застосовуємо 3D-нахил
      style={{
        rotateX: enabled ? rotateX : 0,
        rotateY: enabled ? rotateY : 0,
        transformStyle: 'preserve-3d', // Вмикаємо 3D-простір
        transformPerspective: 1000,   // Встановлюємо перспективу
        willChange: 'transform'
      }}
      
      // Застосовуємо базові стилі зі старого файлу + нові
      className={`
        bg-nexus-glass-bg backdrop-blur-[var(--glass-blur)] 
        border border-nexus-glass-border 
        rounded-2xl p-8 
        transition-all duration-300 
        hover:border-nexus-gold/50 
        hover:shadow-tech-glow 
        ${className}
      `}
    >
      {/* Додаємо "внутрішню" 3D-обгортку.
        Це змусить контент (текст, іконки) "віддалятися" від курсора, 
        створюючи неймовірний ефект глибини.
      */}
      <div style={{ transform: 'translateZ(40px)' }}> 
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;