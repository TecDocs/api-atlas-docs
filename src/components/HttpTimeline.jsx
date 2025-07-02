import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const steps = [
  {
    title: '1. DNS Lookup',
    description:
      'Your browser resolves the domain (e.g., api.example.com) to an IP address using DNS before the request begins.',
  },
  {
    title: '2. TCP Handshake',
    description:
      'A connection is opened between the client and server using TCP or TLS (for HTTPS). This sets up the communication channel.',
  },
  {
    title: '3. Request Sent',
    description:
      'The client sends an HTTP request—like GET /users—with headers, optional auth tokens, and sometimes a request body.',
  },
  {
    title: '4. Server Processing',
    description:
      'The server routes the request to the correct logic, queries a database, performs actions, and prepares a response.',
  },
  {
    title: '5. Response Returned',
    description:
      'The server sends back an HTTP response with a status code (like 200 or 404), headers, and optional JSON body.',
  },
  {
    title: '6. Rendering or Handling',
    description:
      'The client interprets the response. A browser renders the content or a frontend app parses the JSON for display or logic.',
  },
];

export default function HttpTimeline() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  const bgColor = isDark ? '#1b1b1d' : '#ffffff';
  const dotColor = isDark ? '#facc15' : '#3b82f6';
  const lineColor = isDark ? '#444' : '#ccc';

  return (
    <div style={{ padding: '2rem 1rem' }}>
      <div
        style={{
          position: 'relative',
          marginLeft: '1rem',
          borderLeft: `3px solid ${lineColor}`,
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              position: 'relative',
              marginBottom: '2rem',
              paddingLeft: '1.5rem',
              color: isDark ? '#fff' : '#111',
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: '-0.6rem',
                top: '0.3rem',
                width: '1rem',
                height: '1rem',
                backgroundColor: dotColor,
                borderRadius: '50%',
                boxShadow: isDark
                  ? '0 0 8px rgba(250, 204, 21, 0.7)'
                  : '0 0 6px rgba(59, 130, 246, 0.5)',
              }}
            ></div>
            <h4 style={{ margin: 0, fontSize: '1.1rem', fontWeight: '600' }}>{step.title}</h4>
            <p style={{ fontSize: '0.92rem', marginTop: '0.35rem', opacity: 0.85 }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}


