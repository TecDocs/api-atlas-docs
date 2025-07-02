import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function StatusCodeCard({ step }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  if (!step) return null; // Prevents error if step is undefined

  const backgroundColor = step.color || (isDark ? '#2e2e2e' : '#e9eef3');
  const textColor = isDark ? '#ffffff' : '#000000';
  const boxShadow = isDark
    ? '0 2px 4px rgba(0,0,0,0.6)'
    : '0 2px 6px rgba(0,0,0,0.1)';

  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'inline-block',
        verticalAlign: 'top',
        textAlign: 'center',
        minWidth: '160px',
        padding: '1rem',
        margin: '0.5rem',
        borderRadius: '10px',
        backgroundColor,
        color: textColor,
        boxShadow,
      }}
    >
      <div style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>{step.icon}</div>
      <strong style={{ fontSize: '1.1rem' }}>{step.code}</strong>
      <div style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>{step.label}</div>
    </motion.div>
  );
}
