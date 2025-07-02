
import React from 'react';
import styles from './ResourceGrid.module.css';
import { motion } from 'framer-motion';

const data = [
  { method: 'GET', path: '/users', description: 'List users' },
  { method: 'GET', path: '/users/:id', description: 'Get user by ID' },
  { method: 'POST', path: '/users', description: 'Create user' },
  { method: 'PUT', path: '/users/:id', description: 'Update user' },
  { method: 'DELETE', path: '/users/:id', description: 'Delete user' },
];

export default function ResourceGrid() {
  return (
    <motion.div
      className={styles.grid}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {data.map(({ method, path, description }) => (
        <div key={path} className={styles.card}>
          <span className={styles.method}>{method}</span>
          <span className={styles.path}>{path}</span>
          <p className={styles.description}>{description}</p>
        </div>
      ))}
    </motion.div>
  );
}
