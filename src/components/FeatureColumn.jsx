import React from 'react';
import { motion } from 'framer-motion';
import './FeatureColumn.module.css';

export default function FeatureColumn({ items = [] }) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return (
    <div className="feature-column-container">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="feature-column-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h4>{item.title}</h4>
          <p>{item.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
