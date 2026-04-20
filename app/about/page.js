'use client';

import styles from './About.module.css';
import { Target, Zap, Users, ShieldCheck, Star, Volume2 } from 'lucide-react';
import dynamic from 'next/dynamic';
import MotionWrapper from '@/components/MotionWrapper';

const AboutCanvas = dynamic(() => import('@/components/AboutCanvas'), { ssr: false });
const TiltCard = dynamic(() => import('@/components/TiltCard'), { ssr: false });

export default function AboutPage() {
  return (
    <div className={`${styles.container} page-fade-in`}>
      <header className={styles.header}>
        <MotionWrapper direction="down">
          <h1 className="neon-text-green">BATTLEVERSE</h1>
          <p className={styles.subtitle}>Where Culture Meets Content. The Future of Rap Battles.</p>
        </MotionWrapper>
      </header>

      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <MotionWrapper direction="left" delay={0.2}>
            <div className={styles.storyContent}>
              <h2 className="glitch-text" data-text="THE NEW AGE">THE <span className="neon-text-blue">NEW AGE</span></h2>
              <p>
                Battleverse is a content-driven rap battle platform built at the intersection of hip-hop culture, digital entertainment, and brand storytelling. It is designed to transform raw lyrical talent into high-impact content experiences that resonate with today’s fast-moving, attention-driven audiences.
              </p>
              <p>
                At its core, Battleverse provides a competitive stage for emerging and underground artists, enabling them to showcase their skills, build identity, and gain visibility in a structured yet creatively <span className="street-text neon-text-green">آزاد</span> environment.
              </p>
              <p>
                The platform goes beyond traditional rap battles by producing high-engagement, short-form digital content optimized for social media consumption.
              </p>
            </div>
          </MotionWrapper>
          
          <MotionWrapper direction="right" delay={0.4}>
            <div className={styles.storyImage}>
              <div className={`${styles.imageBox} glass`}>
                <AboutCanvas />
              </div>
            </div>
          </MotionWrapper>
        </div>
      </section>

      <section className={styles.visionSection}>
        <div className={styles.sectionHeader}>
          <MotionWrapper>
            <h2 className="neon-text-red">🎯 OUR VISION</h2>
            <p>To build a new-age entertainment ecosystem where:</p>
          </MotionWrapper>
        </div>
        <div className={styles.grid}>
          <MotionWrapper delay={0.1}>
            <TiltCard className={`${styles.card} glass`}>
              <Zap className="neon-text-blue" size={40} />
              <h3>Talent</h3>
              <p>Discovered through high-impact content.</p>
            </TiltCard>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <TiltCard className={`${styles.card} glass`}>
              <Target className="neon-text-red" size={40} />
              <h3>Creativity</h3>
              <p>Meets fierce competition in every bar.</p>
            </TiltCard>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <TiltCard className={`${styles.card} glass`}>
              <Users className="neon-text-green" size={40} />
              <h3>Culture</h3>
              <p>Drives connection across the generation.</p>
            </TiltCard>
          </MotionWrapper>
        </div>
        <MotionWrapper delay={0.5}>
          <div className={styles.visionFooter}>
            <p>Battleverse aims to become a leading platform for rap battles and hip-hop content in India, while redefining how brands engage with the next generation.</p>
          </div>
        </MotionWrapper>
      </section>

      <section className={styles.valuesSection}>
        <MotionWrapper>
          <h2 className="neon-text-blue" style={{ textAlign: 'center', marginBottom: '60px' }}>🔥 WHAT WE STAND FOR</h2>
        </MotionWrapper>
        <div className={styles.grid}>
          <MotionWrapper direction="left" delay={0.1}>
            <TiltCard className={`${styles.card} glass`}>
              <ShieldCheck className="neon-text-green" size={40} />
              <h3>Authenticity</h3>
              <p>Over Hype</p>
            </TiltCard>
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <TiltCard className={`${styles.card} glass`}>
              <Star className="neon-text-yellow" size={40} />
              <h3>Talent</h3>
              <p>Over Trends</p>
            </TiltCard>
          </MotionWrapper>
          <MotionWrapper direction="right" delay={0.3}>
            <TiltCard className={`${styles.card} glass`}>
              <Volume2 className="neon-text-green" size={40} />
              <h3>Culture</h3>
              <p>Over Noise</p>
            </TiltCard>
          </MotionWrapper>
        </div>
      </section>

      <section className={styles.founders}>
        <MotionWrapper>
          <h2 className="neon-text-green" style={{ textAlign: 'center', marginBottom: '60px' }}>THE MINDS BEHIND THE VERSE</h2>
        </MotionWrapper>
        <div className={styles.founderGrid}>
          <MotionWrapper delay={0.1} direction="left">
            <FounderCard 
              name="KAY-O" 
              role="Founder & Host" 
              bio="A veteran of the hip-hop scene, Kay-O has been battle-tested and refined in the fire of competitive culture."
              image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
          </MotionWrapper>
          <MotionWrapper delay={0.2}>
            <FounderCard 
              name="REVERB" 
              role="Technical Director" 
              bio="The architect of our digital ecosystem. Reverb ensures the platform is built for the future of entertainment."
              image="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
          </MotionWrapper>
          <MotionWrapper delay={0.3} direction="right">
            <FounderCard 
              name="VIBE" 
              role="Community Lead" 
              bio="The soul of the Battleverse community. Vibe ensures that every voice in the culture resonates."
              image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            />
          </MotionWrapper>
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
