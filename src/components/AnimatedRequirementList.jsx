import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';

export default function AnimatedRequirementList({ items = [] }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      style={{
        listStyle: 'none',
        padding: 0,
        marginTop: '1rem',
      }}
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          variants={{
            hidden: { opacity: 0, x: -25 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`requirement-item ${isDark ? 'dark-mode-glow' : 'light-mode-shadow'}`}
          style={{
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : '#ffffff',
            borderRadius: '8px',
            marginBottom: '1rem',
            padding: '0.85rem 1.2rem',
            fontSize: '1rem',
            fontWeight: 500,
            color: isDark ? '#d1d5db' : '#333',
            boxShadow: isDark
              ? '0 0 10px rgba(0, 200, 255, 0.2)'
              : '0 4px 12px rgba(0, 0, 0, 0.05)',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'default',
          }}
          whileHover={{
            scale: 1.015,
            boxShadow: isDark
              ? '0 0 14px rgba(0, 255, 255, 0.3)'
              : '0 6px 18px rgba(0, 0, 0, 0.08)',
          }}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
