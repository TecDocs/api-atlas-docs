import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import HoverExplain from '@site/src/components/HoverExplain';

const statusGroups = [
  {
    code: '1xx',
    title: 'Informational',
    summary: 'These codes indicate that the request was received and is continuing to be processed.',
    example: '100 Continue',
  },
  {
    code: '2xx',
    title: 'Success',
    summary: 'The request was successfully received, understood, and accepted by the server.',
    example: '200 OK, 201 Created',
  },
  {
    code: '3xx',
    title: 'Redirection',
    summary: 'Further action is needed by the client to complete the request.',
    example: '301 Moved Permanently, 302 Found',
  },
  {
    code: '4xx',
    title: 'Client Error',
    summary: 'The request contains incorrect syntax or cannot be fulfilled by the server.',
    example: '400 Bad Request, 404 Not Found',
  },
  {
    code: '5xx',
    title: 'Server Error',
    summary: 'The server failed to complete a valid request due to internal issues.',
    example: '500 Internal Server Error, 503 Service Unavailable',
  },
];

export default function HttpStatusCards() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const cardBase = {
    backgroundColor: isDark ? '#1f1f1f' : '#f9f9f9',
    color: isDark ? '#ffffff' : '#111111',
    border: `1px solid ${isDark ? '#333' : '#e2e2e2'}`,
    borderRadius: '14px',
    padding: '1.5rem',
    boxShadow: isDark
      ? '0 6px 18px rgba(0,0,0,0.45)'
      : '0 6px 18px rgba(0,0,0,0.08)',
    cursor: 'default',
  };

  return (
    <div
      style={{
        display: 'grid',
        gap: '1.5rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        margin: '2rem 0',
      }}
    >
      {statusGroups.map((group, idx) => (
        <motion.div
          key={group.code}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -6, scale: 1.015 }}
          transition={{ duration: 0.6, delay: idx * 0.1, type: 'spring' }}
          style={cardBase}
        >
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>
            <HoverExplain
              word={`HTTP ${group.code}`}
              definition={`All HTTP ${group.code} responses fall into the "${group.title}" category.`}
            />
          </h3>
          <p style={{ fontSize: '0.95rem', marginBottom: '0.6rem', lineHeight: '1.5' }}>
            {group.summary}
          </p>
          <p style={{ fontSize: '0.85rem', opacity: 0.75 }}>
            <strong>Example:</strong> {group.example}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
