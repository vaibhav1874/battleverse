'use client';
import styles from './Battlers.module.css';
import { Mic, UserPlus } from 'lucide-react';
import dynamic from 'next/dynamic';
const TiltCard = dynamic(() => import('@/components/TiltCard'), { ssr: false });

export default function BattlersPage() {
  const legacyBattlers = [
    {
      name: "SHIBZ",
      title: "SEASON 1 WINNER",
      role: "The Champion",
      image: "/images/battlers/shibz.jpg",
      color: "var(--primary)"
    },
    {
      name: "LOWEND",
      title: "SEASON 1 RUNNER-UP",
      role: "The Challenger",
      image: "/images/battlers/lowend.jpg",
      color: "var(--accent)"
    },
    {
      name: "SURKH",
      title: "SEASON 1 - 3RD PLACE",
      role: "The Finisher",
      image: "/images/battlers/surkh.jpeg",
      color: "var(--secondary)"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="text-primary">LEGENDS OF THE VERSE</h1>
        <p className={styles.subtitle}>Honoring the warriors who paved the way in Season 1.</p>
      </header>

      <div className={styles.legacyGrid}>
        {legacyBattlers.map((battler, index) => (
          <TiltCard key={index} className={`${styles.battlerCard} glass`}>
            <div className={styles.battlerImage}>
              <img src={battler.image} alt={battler.name} />
              <div className={styles.rankBadge} style={{ backgroundColor: battler.color }}>
                {battler.title}
              </div>
            </div>
            <div className={styles.battlerInfo}>
              <h3>{battler.name}</h3>
              <span className={styles.battlerRole}>{battler.role}</span>
            </div>
          </TiltCard>
        ))}
      </div>

      <div className={styles.divider}></div>

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
