
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useColorMode } from '@docusaurus/theme-common';
import clsx from 'clsx';
import styles from './SpotlightCode.module.css';

export default function SpotlightCode({ yamlCode = '', jsonCode = '', title = '', highlightLines = [] }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const [mode, setMode] = useState('yaml');

  const code = mode === 'yaml' ? yamlCode : jsonCode;
  const language = mode === 'yaml' ? 'yaml' : 'json';

  const customStyle = {
    fontSize: '0.9rem',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    background: isDark ? '#0f172a' : '#f9fafb',
    boxShadow: isDark
      ? '0 0 25px rgba(0, 255, 255, 0.12)'
      : '0 0 10px rgba(0,0,0,0.08)',
    overflowX: 'auto',
    transition: 'box-shadow 0.3s ease, background 0.3s ease',
  };

  return (
    <motion.div
      className={clsx(styles.spotlightContainer, isDark && styles.darkGlow)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.headerRow}>
        {title && <div className={styles.codeTitle}>{title}</div>}
        <div className={styles.toggleGroup}>
          <button
            onClick={() => setMode('yaml')}
            className={clsx(styles.toggleBtn, mode === 'yaml' && styles.active)}
          >
            YAML
          </button>
          <button
            onClick={() => setMode('json')}
            className={clsx(styles.toggleBtn, mode === 'json' && styles.active)}
          >
            JSON
          </button>
        </div>
      </div>

      {code.trim() ? (
        <SyntaxHighlighter
          language={language}
          style={isDark ? vscDarkPlus : oneLight}
          customStyle={customStyle}
          showLineNumbers
          wrapLines
          lineProps={lineNumber => {
            const isHighlighted = highlightLines.includes(lineNumber);
            return {
              style: {
                display: 'block',
                backgroundColor: isHighlighted
                  ? isDark
                    ? 'rgba(0,255,255,0.05)'
                    : 'rgba(255,255,100,0.15)'
                  : 'transparent',
                borderLeft: isHighlighted ? '3px solid #0ea5e9' : 'none',
                paddingLeft: '0.75rem',
                transition: 'all 0.2s ease-in-out',
              },
            };
          }}
        >
          {code}
        </SyntaxHighlighter>
      ) : (
        <div style={{ fontStyle: 'italic', padding: '1rem' }}>No code to display.</div>
      )}
    </motion.div>
  );
}
