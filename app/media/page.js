import styles from './Media.module.css';
import { Play, Filter, Image as ImageIcon, Video } from 'lucide-react';

export default function MediaPage() {
  const categories = ["All", "Season 1", "Season 2", "Winner Highlights", "Viral Clips"];
  
  const videos = [
    {
      id: 1,
      title: "Vox vs. Zenith - The Finals",
      category: "Season 2",
      views: "1.2M",
      image: "https://images.unsplash.com/photo-1516280440614-37939bb91d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Underground Cypher #24",
      category: "Viral Clips",
      views: "450K",
      image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Rico's Best Rebuttals",
      category: "Winner Highlights",
      views: "890K",
      image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 4,
      title: "The Road to Iron Mic",
      category: "Season 1",
      views: "1.1M",
      image: "https://images.unsplash.com/photo-1514525253361-b83f859b43c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 5,
      title: "Luna vs. Cipher - Round 3",
      category: "Season 2",
      views: "600K",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 6,
      title: "Top 10 Haymakers of 2025",
      category: "Viral Clips",
      views: "2.5M",
      image: "https://images.unsplash.com/photo-1571287346585-cba4c82e700d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="neon-text-blue">THE VAULT</h1>
        <p className={styles.subtitle}>Relive the greatest moments in BattleVerse history.</p>
      </header>

      <div className={styles.filterBar}>
        <div className={styles.categories}>
          {categories.map(cat => (
            <button key={cat} className={cat === "All" ? styles.activeCat : styles.catBtn}>
              {cat}
            </button>
          ))}
        </div>
        <div className={styles.searchBox}>
          <Filter size={18} />
          <span>Filter</span>
        </div>
      </div>

      <section className={styles.videoGrid}>
        {videos.map(video => (
          <div key={video.id} className={styles.videoCard}>
            <div className={styles.thumbnail}>
              <img src={video.image} alt={video.title} />
              <div className={styles.overlay}>
                <button className={styles.playBtn}><Play size={24} fill="currentColor" /></button>
              </div>
              <div className={styles.categoryTag}>{video.category}</div>
            </div>
            <div className={styles.info}>
              <h3>{video.title}</h3>
              <div className={styles.meta}>
                <div className={styles.metaItem}>
                  <Video size={14} />
                  <span>{video.views}</span>
                </div>
                <span>4 months ago</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.galleryPeek}>
        <h2 className="neon-text-purple" style={{ marginBottom: '40px' }}>SNAPSHOTS</h2>
        <div className={styles.peekGrid}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={styles.peekItem}>
              <img src={`https://images.unsplash.com/photo-1514525253361-b83f859b43c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80&sig=${i}`} alt="Snap" />
              <div className={styles.peekOverlay}><ImageIcon /></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
