import React from 'react';
import styles from './CodeSpotlight.module.css';

export default function CodeSpotlight({ code }) {
  return (
    <pre className={styles.container}>
      <code>{code}</code>
    </pre>
  );
}