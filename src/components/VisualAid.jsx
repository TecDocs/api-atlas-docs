
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function VisualAid() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const styles = {
    container: {
      margin: '2rem auto',
      padding: '1rem',
      borderRadius: '12px',
      background: isDark ? '#1f2937' : '#f9fafb',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      maxWidth: '800px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      maxWidth: '700px',
      height: 'auto',
      borderRadius: '8px',
      boxShadow: isDark
        ? '0 4px 20px rgba(255,255,255,0.08)'
        : '0 4px 20px rgba(0,0,0,0.08)',
    },
    caption: {
      marginTop: '0.5rem',
      fontSize: '0.95rem',
      color: isDark ? '#cbd5e1' : '#374151',
    },
  };

  return (
    <div style={styles.container}>
      <img
        src="/img/openapi-flow.png"
        alt="Visual flow of OpenAPI interacting with Swagger and Redoc"
        style={styles.image}
      />
      <p style={styles.caption}>
        Figure: OpenAPI as the foundation—used by Swagger UI and Redoc to generate interactive docs.
      </p>
    </div>
  );
}
