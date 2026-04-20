import styles from './Battlers.module.css';
import { Mic, Trophy, Flame, MessageSquare, Camera, Play, UserPlus } from 'lucide-react';

export default function BattlersPage() {
  const battlers = [
    {
      id: 1,
      name: "VOX",
      style: "Technicals / Multi-syllabic",
      wins: 12,
      losses: 2,
      bio: "The technical wizard from the East Coast. Known for complex rhyme schemes and surgical precision.",
      image: "https://images.unsplash.com/photo-1520110323377-2e11831885ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "ZENITH",
      style: "Aggressive / Performance",
      wins: 10,
      losses: 4,
      bio: "Energy like no other. Zenith dominates the stage with presence and hard-hitting haymakers.",
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "RICO",
      style: "Freestyle / Witty",
      wins: 15,
      losses: 1,
      bio: "The king of off-the-dome rebuttals. Rico can turn any situation into a winning punchline.",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "LUNA",
      style: "Deep Lyricism / Storytelling",
      wins: 8,
      losses: 3,
      bio: "Painting pictures with words. Luna's battles are immersive journeys into the soul of the underground.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="neon-text-green">THE WARRIORS</h1>
        <p className={styles.subtitle}>The masters of the mic. The legends of the Verse.</p>
      </header>

      <section className={styles.gridSection}>
        <div className={styles.grid}>
          {battlers.map(artist => (
            <div key={artist.id} className={`${styles.artistCard} glass`}>
              <div className={styles.imageContainer}>
                <img src={artist.image} alt={artist.name} />
                <div className={styles.statsBadge}>
                  <Trophy size={14} /> {artist.wins} - {artist.losses}
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.topInfo}>
                  <h3>{artist.name}</h3>
                  <span className={styles.styleTag}>{artist.style}</span>
                </div>
                <p className={styles.bio}>{artist.bio}</p>
                <div className={styles.socials}>
                  <MessageSquare size={18} />
                  <Camera size={18} />
                  <Play size={18} />
                </div>
                <button className={styles.viewProfile}>Battle History</button>
              </div>
            </div>
          ))}
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
            <Mic size={120} className="neon-text-green" />
          </div>
        </div>
      </section>
    </div>
  );
}
