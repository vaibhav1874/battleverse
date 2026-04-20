'use client';

import styles from './About.module.css';
import { Target, Zap, Users, ShieldCheck, Star, Volume2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const AboutCanvas = dynamic(() => import('@/components/AboutCanvas'), { ssr: false });

export default function AboutPage() {
  return (
    <div className={`${styles.container} page-fade-in`}>
      <header className={styles.header}>
        <h1 className="neon-text-purple">BATTLEVERSE</h1>
        <p className={styles.subtitle}>Where Culture Meets Content. The Future of Rap Battles.</p>
      </header>

      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <h2 className="glitch-text" data-text="THE NEW AGE">THE <span className="neon-text-blue">NEW AGE</span></h2>
            <p>
              Battleverse is a content-driven rap battle platform built at the intersection of hip-hop culture, digital entertainment, and brand storytelling. It is designed to transform raw lyrical talent into high-impact content experiences that resonate with today’s fast-moving, attention-driven audiences.
            </p>
            <p>
              At its core, Battleverse provides a competitive stage for emerging and underground artists, enabling them to showcase their skills, build identity, and gain visibility in a structured yet creatively <span className="street-text neon-text-purple">آزاد</span> environment.
            </p>
            <p>
              The platform goes beyond traditional rap battles by producing high-engagement, short-form digital content optimized for social media consumption.
            </p>
          </div>
          <div className={styles.storyImage}>
            <div className={`${styles.imageBox} glass`}>
              <AboutCanvas />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.visionSection}>
        <div className={styles.sectionHeader}>
          <h2 className="neon-text-red">🎯 OUR VISION</h2>
          <p>To build a new-age entertainment ecosystem where:</p>
        </div>
        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <Zap className="neon-text-blue" size={40} />
            <h3>Talent</h3>
            <p>Discovered through high-impact content.</p>
          </div>
          <div className={`${styles.card} glass`}>
            <Target className="neon-text-red" size={40} />
            <h3>Creativity</h3>
            <p>Meets fierce competition in every bar.</p>
          </div>
          <div className={`${styles.card} glass`}>
            <Users className="neon-text-purple" size={40} />
            <h3>Culture</h3>
            <p>Drives connection across the generation.</p>
          </div>
        </div>
        <div className={styles.visionFooter}>
          <p>Battleverse aims to become a leading platform for rap battles and hip-hop content in India, while redefining how brands engage with the next generation.</p>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <h2 className="neon-text-blue" style={{ textAlign: 'center', marginBottom: '60px' }}>🔥 WHAT WE STAND FOR</h2>
        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <ShieldCheck className="neon-text-green" size={40} />
            <h3>Authenticity</h3>
            <p>Over Hype</p>
          </div>
          <div className={`${styles.card} glass`}>
            <Star className="neon-text-yellow" size={40} />
            <h3>Talent</h3>
            <p>Over Trends</p>
          </div>
          <div className={`${styles.card} glass`}>
            <Volume2 className="neon-text-purple" size={40} />
            <h3>Culture</h3>
            <p>Over Noise</p>
          </div>
        </div>
      </section>

      <section className={styles.founders}>
        <h2 className="neon-text-purple" style={{ textAlign: 'center', marginBottom: '60px' }}>THE MINDS BEHIND THE VERSE</h2>
        <div className={styles.founderGrid}>
          <FounderCard 
            name="KAY-O" 
            role="Founder & Host" 
            bio="A veteran of the hip-hop scene, Kay-O has been battle-tested and refined in the fire of competitive culture."
            image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <FounderCard 
            name="REVERB" 
            role="Technical Director" 
            bio="The architect of our digital ecosystem. Reverb ensures the platform is built for the future of entertainment."
            image="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <FounderCard 
            name="VIBE" 
            role="Community Lead" 
            bio="The soul of the Battleverse community. Vibe ensures that every voice in the culture resonates."
            image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
        </div>
      </section>
    </div>
  );
}

function FounderCard({ name, role, bio, image }) {
  return (
    <div className={styles.founderCard}>
      <div className={styles.founderImage}>
        <img src={image} alt={name} />
        <div className={styles.founderOverlay}></div>
      </div>
      <div className={styles.founderContent}>
        <h4>{name}</h4>
        <span className={styles.role}>{role}</span>
        <p>{bio}</p>
      </div>
    </div>
  );
}
