import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function EndpointCard() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const containerStyle = {
    backgroundColor: isDark ? '#1e293b' : '#f9f9f9',
    borderRadius: '12px',
    padding: '1.5rem',
    boxShadow: isDark
      ? '0 0 10px rgba(0,255,255,0.15)'
      : '0 0 6px rgba(0,0,0,0.08)',
    marginBottom: '2rem',
    transition: 'all 0.3s ease-in-out',
  };

  const codeBlockStyle = {
    backgroundColor: isDark ? '#0f172a' : '#ffffff',
    color: isDark ? '#e2e8f0' : '#1e293b',
    borderRadius: '8px',
    padding: '1rem 1.25rem',
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    fontSize: '0.9rem',
    overflowX: 'auto',
    border: isDark ? '1px solid #334155' : '1px solid #e5e7eb',
  };

  return (
    <div style={containerStyle}>
      <h3><strong>GET /users</strong></h3>
      <p>Returns a list of all users in the system.</p>
      <div style={codeBlockStyle}>
{`[
  {
    "id": "123",
    "name": "Alice",
    "email": "alice@example.com"
  },
  {
    "id": "456",
    "name": "Bob",
    "email": "bob@example.com"
  }
]`}
      </div>
    </div>
  );
}
