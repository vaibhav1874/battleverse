import styles from './About.module.css';
import { Target, Eye, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="neon-text-purple">OUR STORY</h1>
        <p className={styles.subtitle}>From the concrete to the cloud. The evolution of BattleVerse.</p>
      </header>

      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <h2>BORN IN THE <span className="neon-text-blue">UNDERGROUND</span></h2>
            <p>
              BattleVerse didn't start in a boardroom. It started in back alleys, cramped studios, and Discord voice channels where the only thing that mattered was the weight of your bars. 
            </p>
            <p>
              We saw the raw talent of underground artists being ignored by the mainstream. We saw the need for a platform that wasn't just about fame, but about the purity of the craft.
            </p>
            <p>
              Today, BattleVerse is the premier global hub for lyrical combat, bridging the gap between grassroots hip-hop and the digital frontier.
            </p>
          </div>
          <div className={styles.storyImage}>
            <div className={styles.imageBox}>
              <img src="https://images.unsplash.com/photo-1571287346585-cba4c82e700d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Underground Battle" />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.missionVision}>
        <div className={styles.grid}>
          <div className={`${styles.card} glass`}>
            <Target className="neon-text-red" size={40} />
            <h3>Our Mission</h3>
            <p>Elevating the art of lyrical combat by providing underground artists with the tools, stage, and community they need to thrive.</p>
          </div>
          <div className={`${styles.card} glass`}>
            <Eye className="neon-text-blue" size={40} />
            <h3>Our Vision</h3>
            <p>To become the world's most authentic and technologically advanced ecosystem for hip-hop culture and competitive lyricism.</p>
          </div>
          <div className={`${styles.card} glass`}>
            <Sparkles className="neon-text-purple" size={40} />
            <h3>Our Values</h3>
            <p>Authenticity over everything. Innovation in every beat. Community-driven and artist-focused.</p>
          </div>
        </div>
      </section>

      <section className={styles.founders}>
        <h2 className="neon-text-purple" style={{ textAlign: 'center', marginBottom: '60px' }}>THE MINDS BEHIND THE VERSE</h2>
        <div className={styles.founderGrid}>
          <FounderCard 
            name="KAY-O" 
            role="Founder & Host" 
            bio="A veteran of the NY underground scene, Kay-O has been battle-tested and refined in the fire of competitive hip-hop."
            image="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <FounderCard 
            name="REVERB" 
            role="Technical Director" 
            bio="The architect of our digital ecosystem. Reverb ensures the sound is crisp and the platform is unbreakable."
            image="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          />
          <FounderCard 
            name="VIBE" 
            role="Community Lead" 
            bio="The soul of the BattleVerse. Vibe manages our Discord and ensures every voice in the community is heard."
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
