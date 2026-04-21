'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { Trophy, Users, PlaySquare, Newspaper, Disc, Camera, MessageCircle, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`${styles.navbar} glass ${isMenuOpen ? styles.navbarOpen : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className="text-primary">BATTLE</span>
          <span className="text-secondary">VERSE</span>
        </Link>
        
        {/* Desktop Links */}
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
          <Link href="/register" className={`btn btn-neon-blue glitch-hover ${styles.navBtn}`}>
            Register S2
          </Link>
          <Link href="https://discord.gg/Mv5Qkq5r" target="_blank" className={`btn btn-primary glitch-hover ${styles.navBtn}`}>
            Join Discord
          </Link>
          <Link href="https://www.instagram.com/battleverse.hq?igsh=MWg0dWg4NW94YmZ0bA==" target="_blank" className={`btn btn-instagram (glitch-hover) ${styles.navBtn} ${styles.socialBtn}`}>
            <Camera size={18} /> <span>INSTA</span>
          </Link>
          <Link href="https://chat.whatsapp.com/CX47jPP3cpXIWTvUaV9P99" target="_blank" className={`btn btn-whatsapp glitch-hover ${styles.navBtn} ${styles.socialBtn}`}>
            <MessageCircle size={18} /> <span>WHATSAPP</span>
          </Link>
          
          <button className={styles.menuToggle} onClick={toggleMenu}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
          <div className={styles.mobileLinks}>
            <Link href="/about" className={styles.mobileLink} onClick={toggleMenu}>About</Link>
            <Link href="/events" className={styles.mobileLink} onClick={toggleMenu}>Events</Link>
            <Link href="/battlers" className={styles.mobileLink} onClick={toggleMenu}>Battlers</Link>
            <Link href="/media" className={styles.mobileLink} onClick={toggleMenu}>Media</Link>
            <Link href="/news" className={styles.mobileLink} onClick={toggleMenu}>News</Link>
            
            <div className={styles.mobileActions}>
              <Link href="https://www.instagram.com/battleverse.hq?igsh=MWg0dWg4NW94YmZ0bA==" target="_blank" className="btn btn-instagram" style={{ width: '100%', justifyContent: 'center' }}>
                <Camera size={18} /> INSTAGRAM
              </Link>
              <Link href="https://chat.whatsapp.com/CX47jPP3cpXIWTvUaV9P99" target="_blank" className="btn btn-whatsapp" style={{ width: '100%', justifyContent: 'center' }}>
                <MessageCircle size={18} /> WHATSAPP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
