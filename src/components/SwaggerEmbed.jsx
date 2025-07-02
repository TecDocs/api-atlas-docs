import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

export default function SwaggerEmbed({ url }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div
      style={{
        backgroundColor: isDark ? '#0f172a' : '#ffffff',
        borderRadius: '12px',
        padding: '1.5rem',
        marginBottom: '2rem',
        boxShadow: isDark
          ? '0 0 18px rgba(0, 255, 255, 0.15)'
          : '0 0 10px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <div
        style={{
          fontSize: '0.95rem',
          fontWeight: 500,
          marginBottom: '1rem',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          backgroundColor: isDark ? '#1e293b' : '#f8fafc',
          color: isDark ? '#38bdf8' : '#0369a1',
          border: `1px solid ${isDark ? '#334155' : '#cbd5e1'}`,
        }}
      >
        💡 <strong>Note:</strong> Make sure your local server (e.g., Mockoon) is running at <code>http://localhost:3000</code> for the <em>Try It Out</em> feature to work properly.
      </div>

      <SwaggerUI
        url={url}
        docExpansion="list"
        deepLinking
        displayOperationId
        defaultModelsExpandDepth={-1}
        tryItOutEnabled
        syntaxHighlight={{
          theme: isDark ? 'monokai' : 'agate',
        }}
        layout="BaseLayout"
        defaultModelRendering="schema"
        showExtensions
        showCommonExtensions
      />
    </div>
  );
}
