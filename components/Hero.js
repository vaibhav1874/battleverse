'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import Scene from './Scene';
import styles from './Hero.module.css';
import { Play, Disc } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.canvasContainer}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#bc13fe" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#00f3ff" />
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className={styles.content}>
        <div className={styles.badge}>
          <Mic2 size={16} />
          <span>The Metaverse of Bars</span>
        </div>
        <h1 className={styles.title}>
          BARS. BEATS.<br />
          <span className="neon-text-purple">BRAGGING RIGHTS.</span>
        </h1>
        <p className={styles.subtitle}>
          Elevating the art of lyrical combat. Join the ultimate underground hip-hop arena on Discord.
        </p>
        <div className={styles.actions}>
          <button className="btn btn-primary glitch-hover">
            Join the Battle
          </button>
          <button className="btn btn-neon-blue glitch-hover">
            <Play size={20} /> Watch Battles
          </button>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}></div>
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
}

function Mic2({ size }) {
  return <Disc size={size} />;
}
