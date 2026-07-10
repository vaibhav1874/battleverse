'use client';

import Link from 'next/link';
import styles from './UpcomingEvents.module.css';
import { Calendar, MapPin } from 'lucide-react';

export default function UpcomingEvents() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.eventInfo}>
          <div className={styles.tag}>Upcoming Season</div>
          <h2 className={styles.eventName}>BATTLEVERSE SEASON 2</h2>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <Calendar size={18} />
              <span>To Be Announced</span>
            </div>
            <div className={styles.metaItem}>
              <MapPin size={18} />
              <span>Battleverse Discord</span>
            </div>
          </div>
          <p className={styles.description}>
            Battleverse Season 2 will be coming soon. 
            The next chapter of underground hip-hop culture. 
            Registrations will be announced to secure your spot in the arena.
          </p>
          <div className={styles.actions}>
            <Link href="/register" className="btn btn-primary glitch-hover" style={{ textDecoration: 'none' }}>
              Register Now
            </Link>
            <Link href="/news" className="btn btn-outline" style={{ textDecoration: 'none' }}>
              View Details
            </Link>
          </div>
        </div>

        <div className={styles.countdownBox}>
          <h3 className={styles.countdownTitle}>BATTLES START</h3>
          <div className={styles.tba}>TO BE ANNOUNCED</div>
          <div className={styles.glowEffect}></div>
        </div>
      </div>
    </section>
  );
}

