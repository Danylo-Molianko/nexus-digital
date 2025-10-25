import React, { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
// [КРИТИЧНЕ ВИПРАВЛЕННЯ V2] 'LineSegments' видалено з імпорту 'drei'
import { Points } from '@react-three/drei'; 
import seedrandom from 'seedrandom';
import * as THREE from 'three';

// КОЛЬОРИ СТРАТЕГІЇ (для 3D)
const COLOR_GOLD = new THREE.Color('#FFD700');
const COLOR_VIOLET = new THREE.Color('#8F00FF'); // Неоновий фіолетовий для зв'язків
const COLOR_INTERACTION = new THREE.Color('#FFFFFF'); // Білий для спалаху

// КОМПОНЕНТ ГЕНЕРАТИВНОЇ ХМАРИ
const GenerativeCloud = ({ seed, count = 2000, interactionRadius = 0.5 }) => {
  const pointsRef = useRef();
  const linesRef = useRef();

  // 1. СТВОРЕННЯ ДЕТЕРМІНОВАНОГО ГЕНЕРАТОРА (PRNG)
  const rng = useMemo(() => seedrandom(seed), [seed]);

  // 2. ГЕНЕРАЦІЯ ТОЧОК ТА ЛІНІЙ (ВИКОНУЄТЬСЯ 1 РАЗ)
  const [points, lines] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const linePos = [];
    const pointsData = [];

    // --- Генерація Золотих Точок ---
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const x = (rng() - 0.5) * 10;
      const y = (rng() - 0.5) * 10;
      const z = (rng() - 0.5) * 10;
      
      pos[i3 + 0] = x;
      pos[i3 + 1] = y;
      pos[i3 + 2] = z;
      
      pointsData.push({ x, y, z });

      sizes[i] = rng() * 0.08 + 0.02;
      COLOR_GOLD.toArray(colors, i3);
    }

    // --- Генерація Фіолетових Ліній ("Нейронні зв'язки") ---
    for (let i = 0; i < count; i++) {
      const p1 = pointsData[i];
      let closest = [];
      
      for (let j = i + 1; j < Math.min(i + 50, count); j++) {
        const p2 = pointsData[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dz = p1.z - p2.z;
        const dist = dx * dx + dy * dy + dz * dz;

        if (closest.length < 2) {
          closest.push({ dist, p2 });
        }
      }
      
      for (const c of closest) {
        linePos.push(p1.x, p1.y, p1.z, c.p2.x, c.p2.y, c.p2.z);
      }
    }
    
    return [
      { positions: pos, colors: colors, sizes: sizes },
      new Float32Array(linePos)
    ];
  }, [seed, count]);

  // 3. АНІМАЦІЯ ТА ІНТЕРАКТИВНІСТЬ
  useFrame((state, delta) => {
    if (!pointsRef.current || !linesRef.current) return;

    pointsRef.current.rotation.y += delta * 0.03;
    linesRef.current.rotation.y += delta * 0.03;

    const mouse = state.mouse;
    const camPos = state.camera.position;
    const positions = pointsRef.current.geometry.attributes.position.array;
    const colors = pointsRef.current.geometry.attributes.color.array;
    
    const mouseWorld = new THREE.Vector3(mouse.x, mouse.y, 0.5);
    mouseWorld.unproject(state.camera);
    const rayDir = mouseWorld.sub(camPos).normalize();
    const ray = new THREE.Ray(camPos, rayDir);

    let modified = false;
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const point = new THREE.Vector3(positions[i3], positions[i3+1], positions[i3+2]);
      
      const dist = ray.distanceToPoint(point);

      if (dist < interactionRadius) {
        COLOR_INTERACTION.toArray(colors, i3);
        modified = true;
      } else {
        // [КРИТИЧНЕ ВИПРАВЛЕННЯ]
        COLOR_GOLD.toArray(colors, i3); // Було 'iG3', виправлено на 'i3'
      }
    }
    
    if (modified) {
      pointsRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <>
  {/* 1. Золоті Точки (Хелпер 'drei') */}
  <Points ref={pointsRef} limit={count}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={points.positions.length / 3}
            array={points.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={points.colors.length / 3}
            array={points.colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={points.sizes.length}
            array={points.sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          vertexColors
          sizeAttenuation
          depthWrite={false}
          transparent
        />
      </Points>
      
      {/* 2. Фіолетові Лінії (Базовий R3F-компонент) */}
      {/* [КРИТИЧНЕ ВИПРАВЛЕННЯ V2] <LineSegments> замінено на <lineSegments> (маленька 'l') */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={lines.length / 3}
            array={lines}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial 
          color={COLOR_VIOLET} 
          transparent 
          opacity={0.15}
          depthWrite={false}
        />
      </lineSegments>
    </>
  );
};

// ГОЛОВНИЙ КОМПОНЕНТ КАНВАСУ
const DigitalCanvas = ({ seed }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      dpr={[1, 2]}
    >
      <Suspense fallback={null}>
        {seed && <GenerativeCloud seed={seed} />}
      </Suspense>
      <ambientLight intensity={0.5} />
    </Canvas>
  );
};

export default DigitalCanvas;