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
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/7s8ffzMJY4Y" 
              title="Battle Verse FeaturedBattle" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              style={{ border: 'none' }}
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
}
