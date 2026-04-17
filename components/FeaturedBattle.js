import styles from './FeaturedBattle.module.css';
import { Play, TrendingUp } from 'lucide-react';

export default function FeaturedBattle() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.label}>
            <TrendingUp size={16} />
            <span>Trending Battle</span>
          </div>
          <h2 className={styles.title}>CHAMPIONSHIP FINALS: <span className="neon-text-red">VOX vs. ZENITH</span></h2>
        </div>

        <div className={styles.videoWrapper}>
          <div className={styles.videoPlaceholder}>
            {/* In a real app, this would be a YouTube embed or custom player */}
            <img src="https://images.unsplash.com/photo-1516280440614-37939bb91d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Battle" />
            <div className="video-overlay"></div>
            <button className={`${styles.playBtn} glitch-hover`}>
              <Play size={40} fill="currentColor" />
            </button>
          </div>
          
          <div className={styles.details}>
            <div className={styles.stat}>
              <span className={styles.statValue}>1.2M</span>
              <span className={styles.statLabel}>Views</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>45K</span>
              <span className={styles.statLabel}>Votes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>UNDERGROUND</span>
              <span className={styles.statLabel}>League</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
