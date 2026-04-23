'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { Trophy, Users, PlaySquare, Newspaper, Disc, Camera, MessageCircle, Home } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'About', href: '/about', icon: Users },
    { name: 'Events', href: '/events', icon: Trophy },
    { name: 'Battlers', href: '/battlers', icon: Disc },
    { name: 'Media', href: '/media', icon: PlaySquare },
    { name: 'News', href: '/news', icon: Newspaper },
  ];

  return (
    <>
      <nav className={`${styles.navbar} glass`}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <span className="text-primary">BATTLE</span>
            <span className="text-secondary">VERSE</span>
          </Link>
          
          {/* Desktop Links */}
          <div className={styles.links}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={styles.link}>
                <item.icon size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/register" className={`btn btn-neon-blue glitch-hover ${styles.navBtn} ${styles.registerBtn}`}>
              Register S2
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Premium Bottom Tab Bar */}
      <div className={styles.bottomNav}>
        <Link href="/" className={`${styles.bottomLink} ${pathname === '/' ? styles.activeBottomLink : ''}`}>
          <Home size={22} />
          <span>Home</span>
        </Link>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              className={`${styles.bottomLink} ${isActive ? styles.activeBottomLink : ''}`}
            >
              <item.icon size={22} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
