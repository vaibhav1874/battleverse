'use client';

import { useState, useEffect } from 'react';
import styles from './UpcomingEvents.module.css';
import { Calendar, MapPin, Ticket } from 'lucide-react';

export default function UpcomingEvents() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0
  });

  useEffect(() => {
    // Set landing date for Battleverse Season 2
    const eventDate = new Date('2026-06-27T20:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.eventInfo}>
          <div className={styles.tag}>Upcoming Season</div>
          <h2 className={styles.eventName}>BATTLEVERSE SEASON 2</h2>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <Calendar size={18} />
              <span>June 27, 2026 | 8:00 PM</span>
            </div>
            <div className={styles.metaItem}>
              <MapPin size={18} />
              <span>Main Stage & Global Stream</span>
            </div>
          </div>
          <p className={styles.description}>
            Battleverse Season 2 will be coming on 27th June 2026. 
            The next chapter of underground hip-hop culture. 
            Register now to secure your spot in the arena.
          </p>
          <div className={styles.actions}>
            <button className="btn btn-primary glitch-hover">Register Now</button>
            <button className="btn btn-outline">View Details</button>
          </div>
        </div>

        <div className={styles.countdownBox}>
          <h3 className={styles.countdownTitle}>BATTLES START IN</h3>
          <div className={styles.timer}>
            <div className={styles.unit}>
              <span className={styles.number}>{timeLeft.days}</span>
              <span className={styles.label}>Days</span>
            </div>
            <div className={styles.unit}>
              <span className={styles.number}>{timeLeft.hours}</span>
              <span className={styles.label}>Hours</span>
            </div>
            <div className={styles.unit}>
              <span className={styles.number}>{timeLeft.minutes}</span>
              <span className={styles.label}>Mins</span>
            </div>
            <div className={styles.unit}>
              <span className={styles.number}>{timeLeft.seconds}</span>
              <span className={styles.label}>Secs</span>
            </div>
          </div>
          <div className={styles.glowEffect}></div>
        </div>
      </div>
    </section>
  );
}
