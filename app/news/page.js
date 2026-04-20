import styles from './News.module.css';
import { Newspaper, ArrowRight, Share2, MessageSquare } from 'lucide-react';

export default function NewsPage() {
  const articles = [
    {
      id: 1,
      title: "BattleVerse Season 3 Announced: The Rise of the Underground",
      date: "Oct 10, 2026",
      excerpt: "The wait is over. Today we officially announce the start of Season 3, featuring a brand new tournament structure and a $20k grand prize.",
      category: "Announcements",
      image: "https://images.unsplash.com/photo-1516280440614-37939bb91d8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Interview: How Vox Prepared for the Grand Finals",
      date: "Oct 05, 2026",
      excerpt: "We sat down with the Season 2 champion to discuss his process, his rivals, and what the underground means to him.",
      category: "Artist Stories",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Recap: The Iron Mic Brooklyn Qualifiers",
      date: "Sep 28, 2026",
      excerpt: "Relive the fire from last week's live event where 32 artists battled for a spot in the main event.",
      category: "Event Recaps",
      image: "https://images.unsplash.com/photo-1571287346585-cba4c82e700d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="neon-text-purple">THE BEAT</h1>
        <p className={styles.subtitle}>Updates, interviews, and deep dives into the culture.</p>
      </header>

      <div className={styles.topNews}>
        <div className={styles.featuredArticle}>
          <img src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Featured" />
          <div className={styles.featuredOverlay}>
            <span className={styles.categoryTag}>Major News</span>
            <h2>BATTLEVERSE X DISCORD: THE EXCLUSIVE PARTNERSHIP</h2>
            <p>Elevating the digital battle experience with crystal clear audio and dedicated battle stages...</p>
            <button className={`${styles.readBtn} glitch-hover`}>Read Full Article <ArrowRight size={18} /></button>
          </div>
        </div>
      </div>

      <section className={styles.articleGrid}>
        {articles.map(article => (
          <article key={article.id} className={`${styles.card} glass`}>
            <div className={styles.cardImage}>
              <img src={article.image} alt={article.title} />
              <div className={styles.cardCategory}>{article.category}</div>
            </div>
            <div className={styles.cardContent}>
              <span className={styles.cardDate}>{article.date}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <div className={styles.cardFooter}>
                <button className={styles.moreBtn}>Read More</button>
                <div className={styles.actions}>
                  <Share2 size={18} />
                  <MessageSquare size={18} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.newsletter}>
        <div className={`${styles.newsletterCard} gritty-bg`}>
          <Newspaper size={48} className="neon-text-blue" />
          <div className={styles.newsletterInfo}>
            <h3>STAY IN THE LOOP</h3>
            <p>Get the latest battle announcements and interview drop notifications directly in your inbox.</p>
          </div>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
}
