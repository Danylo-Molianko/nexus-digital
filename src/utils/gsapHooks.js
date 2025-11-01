import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * A-LIST GSAP Hooks - Premium interaction animations
 */

/**
 * Gold Button Hover Animation
 * Replaces infinite shimmer with instant, responsive interaction
 */
export const useGoldButtonHover = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseEnter = () => {
      gsap.to(button, {
        duration: 0.3,
        scale: 1.05,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        duration: 0.2,
        scale: 1,
        ease: 'power2.out',
      });
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return buttonRef;
};

/**
 * Glass Card Hover Animation
 * Subtle lift effect on hover - "Brad Pitt" confidence
 */
export const useGlassCardHover = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        duration: 0.4,
        y: -10,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        duration: 0.2,
        y: 0,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return cardRef;
};
