
import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedParagraph({ children, delay = 0.2 }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}
