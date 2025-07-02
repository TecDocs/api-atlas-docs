import React from 'react';
import { motion } from 'framer-motion';

export default function UseCaseCard({ title, description, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="usecase-card"
      style={{
        padding: '1.5rem',
        background: 'var(--ifm-card-background-color)',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        margin: '1rem 0',
        textAlign: 'left',
        maxWidth: '100%',
      }}
    >
      <h3 style={{ marginBottom: '0.75rem' }}>{title}</h3>
      <p style={{ marginBottom: '0.75rem' }}>{description}</p>
      {children}
    </motion.div>
  );
}
