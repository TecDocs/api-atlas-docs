import React from 'react';
import styles from './TokenCard.module.css';

export default function TokenCard({ tokenType, description }) {
  return (
    <div className={styles.token}>
      <h4>{tokenType}</h4>
      <p>{description}</p>
    </div>
  );
}