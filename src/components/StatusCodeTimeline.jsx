import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function StatusCodeTimeline({ steps = [] }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  if (!Array.isArray(steps) || steps.length === 0) return null;

  const backgroundColor = isDark ? '#141416' : '#f9f9f9';
  const textColor = isDark ? '#ffffff' : '#000000';
  const borderColor = isDark ? '#333' : '#ccc';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        padding: '1.5rem 1rem',
        backgroundColor,
        borderRadius: '12px',
        marginBottom: '2rem',
        border: `1px solid ${borderColor}`,
        scrollSnapType: 'x mandatory',
      }}
    >
      {steps.map((step, index) => (
        <motion.div
          key={index}
          whileHover={{
            scale: 1.08,
            boxShadow: isDark
              ? '0 0 12px rgba(255,255,255,0.3)'
              : '0 0 12px rgba(0,0,0,0.1)',
          }}
          transition={{ type: 'spring', stiffness: 300 }}
          style={{
            display: 'inline-block',
            verticalAlign: 'top',
            textAlign: 'center',
            minWidth: '160px',
            padding: '1rem',
            marginRight: '1rem',
            borderRadius: '10px',
            backgroundColor: step.color || (isDark ? '#2e2e2e' : '#e9eef3'),
            color: textColor,
            boxShadow: isDark
              ? '0 2px 4px rgba(0,0,0,0.6)'
              : '0 2px 6px rgba(0,0,0,0.1)',
            scrollSnapAlign: 'start',
            transition: 'all 0.3s ease',
          }}
        >
          <div style={{ fontSize: '1.8rem', marginBottom: '0.4rem' }}>{step.icon}</div>
          <strong style={{ fontSize: '1.1rem' }}>{step.code}</strong>
          <div style={{ fontSize: '0.9rem', marginTop: '0.4rem' }}>{step.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
}
