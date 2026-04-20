import styles from './Events.module.css';
import { Calendar, MapPin, Clock, Ticket, Video, Image as ImageIcon } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      name: "The Iron Mic Invitational",
      date: "Oct 25, 2026",
      time: "8:00 PM EST",
      location: "Discord Main Stage",
      type: "Online Battle",
      image: "https://images.unsplash.com/photo-1514525253361-b83f859b43c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Street Cipher Vol. 4",
      date: "Nov 02, 2026",
      time: "6:00 PM EST",
      location: "Brooklyn Heights (Live)",
      type: "Offline Event",
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Neo-Lyricism Showcase",
      date: "Nov 15, 2026",
      time: "9:00 PM EST",
      location: "BattleVerse HQ",
      type: "Tournament",
      image: "https://images.unsplash.com/photo-1520110120181-4315bc2999c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const pastEvents = [
    { id: 1, name: "Summer Slam '25", views: "1.5M", winner: "Vox" },
    { id: 2, name: "Cypher Sundays #12", views: "800K", winner: "Zenith" },
    { id: 3, name: "The Underground Open", views: "2.1M", winner: "Rico" }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="neon-text-blue">THE CALENDAR</h1>
        <p className={styles.subtitle}>Secure your spot. Witness the history.</p>
      </header>

      <section className={styles.upcomingSection}>
        <div className={styles.grid}>
          {upcomingEvents.map(event => (
            <div key={event.id} className={`${styles.eventCard} glass`}>
              <div className={styles.imageBox}>
                <img src={event.image} alt={event.name} />
                <div className={styles.typeTag}>{event.type}</div>
              </div>
              <div className={styles.content}>
                <h3>{event.name}</h3>
                <div className={styles.meta}>
                  <div className={styles.metaItem}>
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
                <button className="btn btn-primary glitch-hover" style={{ width: '100%' }}>
                  <Ticket size={18} /> Get Tickets / Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.pastEvents}>
        <h2 className="neon-text-green" style={{ marginBottom: '40px' }}>PAST HIGHLIGHTS</h2>
        <div className={styles.pastGrid}>
          {pastEvents.map(event => (
            <div key={event.id} className={styles.pastCard}>
              <div className={styles.pastInfo}>
                <h4>{event.name}</h4>
                <p>Winner: <span className="neon-text-red">{event.winner}</span></p>
                <span>{event.views} Views</span>
              </div>
              <div className={styles.pastActions}>
                <button className={styles.iconBtn}><Video size={20} /></button>
                <button className={styles.iconBtn}><ImageIcon size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
