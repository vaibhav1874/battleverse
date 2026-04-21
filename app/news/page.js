import styles from './News.module.css';
import { Mic, Trophy, Users, Star, Calendar, ArrowRight } from 'lucide-react';

export default function NewsPage() {
  return (
    <div className={`${styles.container} page-fade-in`}>
      <header className={styles.header}>
        <h1 className="neon-text-purple">SEASON 2</h1>
        <p className={styles.subtitle}>ANNOUNCEMENT</p>
      </header>

      <article className={`${styles.mainArticle} glass`}>
        <img 
          src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
          alt="BattleVerse Season 2" 
          className={styles.heroImage} 
        />
        
        <div className={styles.contentBody}>
          <div className={styles.dateHighlight}>
            <Calendar size={18} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            LAUNCHING JUNE 27, 2026
          </div>

          <h2>THE RETURN OF THE ARENA</h2>
          <p>
            The silence is over. After months of preparation and scouting the deepest corners of the underground, 
            BattleVerse is officially returning for its most ambitious season yet. Season 2 isn't just a competition; 
            it's the evolution of the culture. We've refined the rules, elevated the stakes, and prepared a stage 
            worthy of the legends about to be born.
          </p>

          <p>
            This season, we are looking for more than just rhymes. We are looking for the next iconic voice of the 
            generation. Whether you're a veteran of the block or a newcomer with a laptop and a dream, the doors 
            of the Vault are opening for you.
          </p>

          <h2>TOURNAMENT STRUCTURE</h2>
          <div className={styles.roundGrid}>
            {/* Round 1 */}
            <div className={styles.roundCard}>
              <div className={styles.roundHeader}>
                <div className={styles.roundNumber}>1</div>
                <h3>REGISTRATION</h3>
              </div>
              <ul className={styles.process}>
                <li>
                  <span className={styles.dot}><Mic size={16} /></span>
                  <span><strong>Open Submissions:</strong> Upload your best 60-second freestyle starting June 27th.</span>
                </li>
                <li>
                  <span className={styles.dot}><Star size={16} /></span>
                  <span><strong>Selection:</strong> Our panel of industry judges will evaluate flow, lyricism, and presence.</span>
                </li>
                <li>
                  <span className={styles.dot}><Users size={16} /></span>
                  <span><strong>The Cut:</strong> Only the Top 24 artists will be selected for the live main event.</span>
                </li>
              </ul>
            </div>

            {/* Round 2 */}
            <div className={styles.roundCard}>
              <div className={styles.roundHeader}>
                <div className={styles.roundNumber}>2</div>
                <h3>MAIN COMPETITION</h3>
              </div>
              <ul className={styles.process}>
                <li>
                  <span className={styles.dot}><Trophy size={16} /></span>
                  <span><strong>Head-to-Head:</strong> The Top 24 enter a double-elimination bracket in the live arena.</span>
                </li>
                <li>
                  <span className={styles.dot}><ArrowRight size={16} /></span>
                  <span><strong>Survival:</strong> Artists must win their battles to maintain their spot in the Vault.</span>
                </li>
                <li>
                  <span className={styles.dot}><Star size={16} /></span>
                  <span><strong>Finalist Cut:</strong> Only the Top 12 elite will advance to the Quarter-Finals.</span>
                </li>
              </ul>
            </div>
          </div>

          <h2>PREPARE FOR BATTLE</h2>
          <p>
            The countdown has begun. Sharpen your pens, refine your delivery, and prepare to leave everything in the ring. 
            Detailed submission guidelines and the official registration portal will go live on June 27th at Midnight.
          </p>
          
          <p>
            This is your moment. This is your legacy. Welcome to Season 2.
          </p>

          <div className={styles.footerNote}>
            — Team BattleVerse
          </div>
        </div>
      </article>
    </div>
  );
}
