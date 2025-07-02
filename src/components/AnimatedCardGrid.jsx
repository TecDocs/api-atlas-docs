import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedCardGrid({ cards }) {
  return (
    <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          viewport={{ once: true }}
          style={{
            padding: '1.25rem',
            borderRadius: '0.75rem',
            backgroundColor: 'var(--ifm-background-surface-color)',
            boxShadow: '0 6px 16px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h4 style={{ marginBottom: '0.5rem' }}>{card.title}</h4>
          <p>{card.body}</p>
        </motion.div>
      ))}
    </div>
  );
}