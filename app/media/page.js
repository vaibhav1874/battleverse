import styles from './Media.module.css';

export default function MediaPage() {
  return (
    <div className={`${styles.container} page-fade-in`}>
      <div className={styles.bgCircle}></div>
      
      <div className={styles.comingSoonContent}>
        <div className={styles.badge}>Vault Access Restricted</div>
        <h1 className={styles.title}>
          COMING <br />
          <span className={styles.highlight}>SOON</span>
        </h1>
        <p className={styles.subtitle}>
          The Vault is being remastered for Season 2. 
          Stay tuned for the greatest moments in BattleVerse history.
        </p>
        <div className={styles.decorLine}></div>
      </div>
    </div>
  );
}
