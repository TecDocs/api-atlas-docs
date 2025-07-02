import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedUsageTip({ title, tips = [] }) {
  return (
    <motion.div
      className="usage-tip-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4>{title}</h4>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}> {tip}</li>
        ))}
      </ul>
    </motion.div>
  );
}
