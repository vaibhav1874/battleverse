'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, TorusKnot, Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function AboutScene() {
  const mainRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const { x, y } = state.mouse;
    
    if (mainRef.current) {
      mainRef.current.rotation.x = t * 0.1 + y * 0.5;
      mainRef.current.rotation.y = t * 0.15 + x * 0.5;
      mainRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
      // Subtle drift towards mouse
      mainRef.current.position.x = THREE.MathUtils.lerp(mainRef.current.position.x, x * 0.5, 0.05);
      mainRef.current.position.y = THREE.MathUtils.lerp(mainRef.current.position.y, y * 0.5, 0.05);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.3;
      ringRef.current.rotation.x = t * 0.2 + y * 0.2;
      ringRef.current.rotation.y = x * 0.2;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <group ref={mainRef}>
          {/* Mic Grill */}
          <Sphere args={[0.8, 64, 64]} position={[0, 1, 0]}>
            <meshStandardMaterial
              color="#2a2a2a"
              roughness={0.2}
              metalness={1}
              bumpScale={0.02}
              emissive="#00a67a"
              emissiveIntensity={0.2}
            />
          </Sphere>
          
          {/* Mic Grill Line */}
          <mesh position={[0, 1, 0]}>
            <torusGeometry args={[0.81, 0.02, 16, 100]} />
            <meshBasicMaterial color="#00a67a" />
          </mesh>

          {/* Mic Neck */}
          <mesh position={[0, 0.2, 0]}>
            <cylinderGeometry args={[0.5, 0.45, 0.4, 32]} />
            <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
          </mesh>

          {/* Mic Handle */}
          <mesh position={[0, -1, 0]}>
            <cylinderGeometry args={[0.45, 0.35, 2, 32]} />
            <meshStandardMaterial color="#050505" metalness={0.5} roughness={0.5} />
          </mesh>

          {/* Glowing Accents on handle */}
          <mesh position={[0, -0.8, 0]}>
            <cylinderGeometry args={[0.46, 0.46, 0.05, 32]} />
            <meshBasicMaterial color="#00a67a" />
          </mesh>
        </group>
      </Float>

      {/* Orbiting Ring */}
      <Float speed={3} rotationIntensity={2}>
        <mesh ref={ringRef}>
          <torusGeometry args={[2.5, 0.015, 16, 100]} />
          <meshBasicMaterial color="#00f3ff" transparent opacity={0.3} />
        </mesh>
      </Float>

      {/* Floating Particles/Notes */}
      <Float speed={5} floatIntensity={3}>
        <Sphere args={[0.08, 16, 16]} position={[2, 1, -1]}>
          <meshBasicMaterial color="#00a67a" />
        </Sphere>
      </Float>

      <Float speed={4} floatIntensity={2}>
        <Sphere args={[0.05, 16, 16]} position={[-1.5, -2, 1]}>
          <meshBasicMaterial color="#00f3ff" />
        </Sphere>
      </Float>
    </>
  );
}
