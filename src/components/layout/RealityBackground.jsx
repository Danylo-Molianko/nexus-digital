import React from 'react';

/*
  RealityBackground: two ultra-subtle animated distortion layers (lava/ocean)
  using SVG turbulence + displacement to create premium, organic motion.
  - Kept extremely low opacity to avoid distraction
  - Honors prefers-reduced-motion
*/
const RealityBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseDistortLava">
          <feTurbulence type="fractalNoise" baseFrequency="0.003 0.007" numOctaves="3" seed="7" result="turb"/>
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="18" xChannelSelector="R" yChannelSelector="G"/>
        </filter>
        <filter id="noiseDistortOcean">
          <feTurbulence type="fractalNoise" baseFrequency="0.0015 0.003" numOctaves="2" seed="11" result="turb"/>
          <feDisplacementMap in="SourceGraphic" in2="turb" scale="12" xChannelSelector="R" yChannelSelector="B"/>
        </filter>
      </svg>

      {/* LAVA FLOW: golden melt, very subtle, slow */}
      <div className="reality-layer reality-lava" />
      {/* OCEAN FLOW: deep blue current, even more subtle */}
      <div className="reality-layer reality-ocean" />
    </div>
  );
};

export default RealityBackground;
