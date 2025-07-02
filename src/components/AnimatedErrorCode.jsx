import React from 'react';
import { motion } from 'framer-motion';
import styles from './AnimatedErrorCode.module.css';

// Predefined emoji icons per status code
const errorAnimations = {
  404: '🔍',
  429: '⏳',
  500: '💥',
  401: '🔒',
  403: '⛔',
};

export default function AnimatedErrorCode({ code = 404, message = "Not Found", hint }) {
  const emoji = errorAnimations[code] || '❗';

  return (
    <motion.div
      className={styles.errorBox}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.6, type: 'spring' }}
    >
      <motion.div
        className={styles.icon}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      >
        {emoji}
      </motion.div>
      <div className={styles.code}>{code}</div>
      <div className={styles.message}>{message}</div>
      {hint && <div className={styles.hint}>{hint}</div>}
    </motion.div>
  );
}
