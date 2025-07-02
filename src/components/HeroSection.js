import React from 'react';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className={styles.title}>API Atlas Docs</h1>
          <p className={styles.subtitle}>
        Your all-in-one reference for interactive OpenAPI documentation, Postman collections,
        Swagger UI testing, and AKS/Kubernetes deployment workflows. <br />
     
      </p>
    </motion.section>
  );
}
