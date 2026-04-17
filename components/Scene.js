'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Text } from '@react-three/drei';

export default function Scene() {
  const torusRef = useRef();
  const sphereRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.2;
      torusRef.current.rotation.y = t * 0.3;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <mesh ref={torusRef} position={[2, 1, 0]}>
          <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
          <MeshDistortMaterial
            color="#bc13fe"
            speed={5}
            distort={0.4}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={sphereRef} position={[-2, -1, 0]}>
          <sphereGeometry args={[0.8, 64, 64]} />
          <MeshDistortMaterial
            color="#00f3ff"
            speed={3}
            distort={0.3}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Floating text or abstract elements representing a mic could go here */}
      <Float speed={3}>
        <mesh position={[0, 0, -1]}>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial color="#1a1a1a" wireframe />
        </mesh>
      </Float>
    </>
  );
}
