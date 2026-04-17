import Link from 'next/link';
import styles from './Footer.module.css';
import { Camera, Play, Mail, Code, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className="neon-text-purple">BATTLE</span>
            <span className="neon-text-blue">VERSE</span>
          </Link>
          <p className={styles.description}>
            The ultimate underground lyrical combat platform. Join the verse, claim the throne.
          </p>
          <div className={styles.socials}>
            <Link href="#" className="glitch-hover"><Camera /></Link>
            <Link href="#" className="glitch-hover"><Play /></Link>
            <Link href="#" className="glitch-hover"><MessageSquare /></Link>
            <Link href="#" className="glitch-hover"><Mail /></Link>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h4>Platform</h4>
            <Link href="/battlers">Battlers</Link>
            <Link href="/events">Events</Link>
            <Link href="/media">Media</Link>
            <Link href="/news">News</Link>
          </div>
          <div className={styles.column}>
            <h4>Community</h4>
            <Link href="https://discord.gg">Discord</Link>
            <Link href="#">Instagram</Link>
            <Link href="#">YouTube</Link>
            <Link href="#">WhatsApp</Link>
          </div>
          <div className={styles.column}>
            <h4>Legal</h4>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} BATTLEVERSE. ALL RIGHTS RESERVED. RAW & UNCUT.</p>
      </div>
    </footer>
  );
}
