import React from 'react';
import { motion } from 'framer-motion';

export default function InteractiveRedocCard({ title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      style={{
        border: '1px solid #d1d5db',
        borderRadius: '0.75rem',
        padding: '1.5rem',
        backgroundColor: '#ffffff',
        marginBottom: '1rem'
      }}
    >
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
}