// src/components/RateLimitGif.jsx
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function RateLimitGif() {
  const { colorMode } = useColorMode();
  const borderColor = colorMode === 'dark' ? '#0ff' : '#333';

  return (
    <div
      style={{
        borderRadius: '12px',
        padding: '0.75rem',
        backgroundColor: colorMode === 'dark' ? '#111827' : '#ffffff',
        boxShadow: colorMode === 'dark'
          ? '0 0 24px rgba(0, 255, 255, 0.15)'
          : '0 0 12px rgba(0, 0, 0, 0.08)',
        border: `1.5px solid ${borderColor}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src="/img/rate-limit-gif.gif"
        alt="Rate limit animated gif"
        style={{
          width: '100%',
          maxWidth: '720px',
          borderRadius: '8px',
        }}
      />
    </div>
  );
}
