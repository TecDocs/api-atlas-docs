import React from 'react';
import { motion } from 'framer-motion';
import styles from './FeatureGrid.module.css';

const features = [
  {
    emoji: '🧪',
    title: 'Interactive API Explorer',
    description: 'Test endpoints live using Swagger UI and Postman.',
  },
  {
    emoji: '⚙️',
    title: 'DevOps Ready',
    description: 'Deploy services with Azure AKS & Kubernetes walkthroughs.',
  },
  {
    emoji: '📚',
    title: 'Comprehensive Guides',
    description: 'Includes authentication, rate limits, and error handling.',
  },
];

export default function FeatureGrid() {
  return (
    <motion.section
      className={styles.gridSection}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className={styles.heading}>Why Use API Atlas?</h2>

      <div className={styles.grid}>
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.emoji}>🧪</div>
          <h3>Interactive API Explorer</h3>
          <p>Test endpoints live using Swagger UI and Postman.</p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className={styles.emoji}>⚙️</div>
          <h3>DevOps Ready</h3>
          <p>Deploy services with Azure AKS & Kubernetes walkthroughs.</p>
        </motion.div>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.emoji}>📚</div>
          <h3>Comprehensive Guides</h3>
          <p>Includes authentication, rate limits, and error handling.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}