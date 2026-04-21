import styles from './Events.module.css';
import { Calendar, MapPin, Clock, Ticket, Video, Image as ImageIcon } from 'lucide-react';

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      name: "Battleverse Season 2 Launch",
      date: "June 27, 2026",
      location: "Battleverse Discord",
      type: "Season Event",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const pastEvents = [
    { 
      id: 1, 
      name: "Battleverse Season 1", 
      winner: "shibz(oban music)",
      link: "https://youtu.be/7s8ffzMJY4Y?si=S9ae75myyBpQHI57"
    }
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
                  {event.time && (
                    <div className={styles.metaItem}>
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                  )}
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
        <h2 className="neon-text-purple" style={{ marginBottom: '40px' }}>PAST HIGHLIGHTS</h2>
        <div className={styles.pastGrid}>
          {pastEvents.map(event => (
            <div key={event.id} className={styles.pastCard}>
              <div className={styles.pastInfo}>
                <h4>{event.name}</h4>
                <p>Winner: <span className="neon-text-red">{event.winner}</span></p>
                {event.views && <span>{event.views} Views</span>}
              </div>
              <div className={styles.pastActions}>
                {event.link ? (
                  <a href={event.link} target="_blank" rel="noopener noreferrer" className={styles.iconBtn}>
                    <Video size={20} />
                  </a>
                ) : (
                  <button className={styles.iconBtn}><Video size={20} /></button>
                )}
                <button className={styles.iconBtn}><ImageIcon size={20} /></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
