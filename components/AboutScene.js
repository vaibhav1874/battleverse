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
    if (mainRef.current) {
      mainRef.current.rotation.x = t * 0.1;
      mainRef.current.rotation.y = t * 0.15;
      mainRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.05);
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = -t * 0.3;
      ringRef.current.rotation.x = t * 0.2;
    }
  });

  return (
    <>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <TorusKnot ref={mainRef} args={[1, 0.4, 256, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#bc13fe"
            speed={4}
            distort={0.4}
            roughness={0.1}
            metalness={0.9}
            emissive="#bc13fe"
            emissiveIntensity={0.2}
          />
        </TorusKnot>
      </Float>

      <Float speed={2} rotationIntensity={2}>
        <mesh ref={ringRef}>
          <torusGeometry args={[2.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#00f3ff" />
        </mesh>
      </Float>

      <Float speed={5} floatIntensity={3}>
        <Sphere args={[0.2, 32, 32]} position={[2, 2, -1]}>
          <MeshWobbleMaterial color="#ff003c" speed={3} factor={0.6} />
        </Sphere>
      </Float>

      <Float speed={3} floatIntensity={1}>
        <Sphere args={[0.15, 32, 32]} position={[-2, -1.5, 1]}>
          <MeshWobbleMaterial color="#00f3ff" speed={2} factor={0.4} />
        </Sphere>
      </Float>
    </>
  );
}
