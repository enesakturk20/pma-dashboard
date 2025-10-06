'use client';
import styles from './AboutTextarea.module.css';

export default function AboutTextarea() {
  return (
    <div className={styles.aboutTextareaContainer}>
      <label className={styles.sectionTitle}>Hakkımızda Metni</label>
      <textarea
        placeholder="Hakkında..."
        rows={10}
        className={styles.textarea}
      />
    </div>
  );
}
