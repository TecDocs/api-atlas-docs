import React from 'react';
import styles from './AnimatedBox.module.css';

export default function AnimatedBox({ children }) {
  return <div className={styles.animated}>{children}</div>;
}