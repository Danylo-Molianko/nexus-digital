import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const PointsField = ({ count = 5000 }) => {
  const pointsRef = useRef();

  // Generate points distributed in a sphere for a "data flow / starfield" feel
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Random point in a sphere
      const r = Math.cbrt(Math.random()) * 5; // radius up to 5
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      const idx = i * 3;
      pos[idx] = x;
      pos[idx + 1] = y;
      pos[idx + 2] = z;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    // Slow, subtle motion to keep it "alive"
    pointsRef.current.rotation.y += delta * 0.08;
    pointsRef.current.rotation.x += delta * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      {/* Gold points, independent of lighting */}
      <pointsMaterial
        color={"#FFD700"}
        size={0.03}
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
};

const DigitalCanvas = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        {/* Transparent background via alpha:true; use a default perspective camera */}
        <perspectiveCamera makeDefault fov={60} position={[0, 0, 8]} />
        <PointsField count={5000} />
      </Canvas>
    </div>
  );
};

export default DigitalCanvas;
