import React from 'react';

/*
  RealityBackground (perf-optimized): two ultra-subtle gradient layers (lava/ocean)
  animated via transform only (GPU-friendly). No heavy SVG filters.
*/
const RealityBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* LAVA FLOW: golden melt, very subtle, slow */}
      <div className="reality-layer reality-lava" />
      {/* OCEAN FLOW: deep blue current, even more subtle */}
      <div className="reality-layer reality-ocean" />
    </div>
  );
};

export default RealityBackground;
