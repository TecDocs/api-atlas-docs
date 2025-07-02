import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCard({ title, subtitle, children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      style={{
        padding: '1.5rem',
        borderRadius: '0.75rem',
        backgroundColor: 'var(--ifm-background-surface-color)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.07)',
        marginBottom: '1.5rem',
      }}
    >
      <h3 style={{ marginBottom: '0.25rem', fontSize: '1.25rem' }}>{title}</h3>
      {subtitle && <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{subtitle}</p>}
      <div>{children}</div>
    </motion.div>
  );
}