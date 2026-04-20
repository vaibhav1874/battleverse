import Link from 'next/link';
import styles from './Footer.module.css';
import { Camera, Play, MessageCircle, Send, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <span className="text-primary">BATTLE</span>
            <span className="text-secondary">VERSE</span>
          </Link>
          <p className={styles.description}>
            The ultimate underground lyrical combat platform. Join the verse, claim the throne.
          </p>
          <div className={styles.socials}>
            <Link href="https://www.instagram.com/battleverse.hq?igsh=MWg0dWg4NW94YmZ0bA==" target="_blank" className="glitch-hover"><Camera /></Link>
            <Link href="https://discord.gg/Mv5Qkq5r" target="_blank" className="glitch-hover"><Send /></Link>
            <Link href="https://chat.whatsapp.com/CX47jPP3cpXIWTvUaV9P99" target="_blank" className="glitch-hover"><MessageCircle /></Link>
            <Link href="mailto:contact@battleverse.hq" className="glitch-hover"><Mail /></Link>
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
            <Link href="https://discord.gg/Mv5Qkq5r" target="_blank">Discord</Link>
            <Link href="https://www.instagram.com/battleverse.hq?igsh=MWg0dWg4NW94YmZ0bA==" target="_blank">Instagram</Link>
            <Link href="https://www.youtube.com/@BattleVerse" target="_blank">YouTube</Link>
            <Link href="https://chat.whatsapp.com/CX47jPP3cpXIWTvUaV9P99" target="_blank">WhatsApp</Link>
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
