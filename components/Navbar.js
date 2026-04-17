import Link from 'next/link';
import styles from './Navbar.module.css';
import { Mic2, Trophy, Users, PlaySquare, Newspaper, Disc } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} glass`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className="neon-text-purple">BATTLE</span>
          <span className="neon-text-blue">VERSE</span>
        </Link>
        
        <div className={styles.links}>
          <Link href="/about" className={styles.link}>
            <Users size={18} />
            <span>About</span>
          </Link>
          <Link href="/events" className={styles.link}>
            <Trophy size={18} />
            <span>Events</span>
          </Link>
          <Link href="/battlers" className={styles.link}>
            <Disc size={18} />
            <span>Battlers</span>
          </Link>
          <Link href="/media" className={styles.link}>
            <PlaySquare size={18} />
            <span>Media</span>
          </Link>
          <Link href="/news" className={styles.link}>
            <Newspaper size={18} />
            <span>News</span>
          </Link>
        </div>

        <div className={styles.actions}>
          <Link href="https://discord.gg" target="_blank" className="btn btn-primary glitch-hover">
            Join Discord
          </Link>
        </div>
      </div>
    </nav>
  );
}
