import React from 'react';
import styles from './TimelineHorizontal.module.css';

export default function TimelineHorizontal({ steps }) {
  return (
    <div className={styles.timeline}>
      {steps.map((step, idx) => (
        <div key={idx} className={styles.step}>
          <div className={styles.circle}>{idx + 1}</div>
          <div className={styles.label}>{step}</div>
        </div>
      ))}
    </div>
  );
}