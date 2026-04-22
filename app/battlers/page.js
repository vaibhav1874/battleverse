import styles from './Battlers.module.css';
import { Mic, Trophy, Flame, MessageSquare, Camera, Play, UserPlus } from 'lucide-react';

export default function BattlersPage() {
  return (
    <div className={styles.container}>
      <section className={styles.comingSoonSection}>
        <div className={styles.comingSoonContent}>
          <div className={styles.badge}>Vault Access Restricted</div>
          <h2 className={styles.comingSoonTitle}>
            WARRIORS <br />
            <span className={styles.highlight}>COMING SOON</span>
          </h2>
          <p className={styles.comingSoonSubtitle}>
            The legends of Season 2 are currently in training. 
            Stay tuned for the official roster reveal.
          </p>
          <div className={styles.decorLine}></div>
        </div>
      </section>

      <section className={styles.joinSection}>
        <div className={`${styles.joinCard} gritty-bg`}>
          <div className={styles.joinContent}>
            <h2 className="neon-text-blue">JOIN THE VERSE</h2>
            <p>Ready to prove yourself? Apply to become a featured artist on BattleVerse. We're always looking for fresh, raw talent.</p>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <input type="text" placeholder="Artist Name" required />
                <input type="text" placeholder="Style (e.g. Freestyle)" required />
              </div>
              <input type="email" placeholder="Email Address" required />
              <textarea placeholder="Tell us about yourself & link your best work..." rows={4} required></textarea>
              <button type="submit" className="btn btn-primary glitch-hover" style={{ width: '100%' }}>
                <UserPlus size={18} /> Submit Application
              </button>
            </form>
          </div>
          <div className={styles.joinGraphic}>
            <Mic size={120} className="neon-text-purple" />
          </div>
        </div>
      </section>
    </div>
  );
}
