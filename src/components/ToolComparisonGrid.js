import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import HoverExplain from './HoverExplain';
import Link from '@docusaurus/Link';

export default function ToolComparisonGrid() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  const tools = [
    {
      icon: '🖥️',
      title: 'Mockoon',
      content: (
        <>
          Run a local <strong>mock API server</strong> by importing your YAML file.<br />
          <HoverExplain word="Mockoon" definition="A GUI-based mock server for simulating REST endpoints locally." /> lets you define fake responses, headers, and routes like <code>POST /users</code>.
        </>
      ),
    },
    {
      icon: '📬',
      title: 'Postman',
      content: (
        <>
          Send live requests to test endpoints and headers.<br />
          <HoverExplain word="Postman" definition="An API testing platform that sends requests, checks tokens, and views real responses." /> pairs perfectly with Mockoon for simulating full workflows.
        </>
      ),
    },
    {
      icon: '🚀',
      title: 'Swagger UI',
      content: (
        <>
          Render your OpenAPI YAML as a fully interactive frontend.<br />
          <Link to="/docs/api-reference/swagger-ui"><HoverExplain word="Swagger UI" definition="A browser-based explorer that lets users try endpoints via the OpenAPI spec." /></Link> includes <code>Try it Out</code> support for <strong>live payloads</strong>.
        </>
      ),
    },
    {
      icon: '📘',
      title: 'Redoc',
      content: (
        <>
          View a clean, structured <strong>reference doc</strong> built from your YAML file.<br />
          <HoverExplain word="Redoc" definition="A React-based OpenAPI renderer ideal for documentation and developer onboarding." /> is styled for readability, with expandable models and schema navigation.
        </>
      ),
    },
  ];

  return (
    <div
      className={`tool-grid ${isDark ? 'theme-dark' : 'theme-light'}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '2rem',
        marginTop: '2rem',
      }}
    >
      {tools.map((tool, index) => (
        <motion.div
          key={tool.title}
          className="tool-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15, duration: 0.5 }}
         whileHover={{ scale: 1.08 }}

                    style={{
              background: isDark ? '#1b1f22' : '#ffffff',
              color: isDark ? '#ffffff' : '#111111',
              borderRadius: '14px',
              padding: '1.6rem',
              boxShadow: isDark
                ? '0 0 22px rgba(0, 255, 255, 0.25)'
                : '0 4px 14px rgba(0, 0, 0, 0.1)',
              border: isDark ? '1px solid rgba(0,255,255,0.2)' : '1px solid #e0e0e0',
              transition: 'all 0.3s ease-in-out',
              cursor: 'pointer',
            }}

        >
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>
            {tool.icon} {tool.title}
          </h3>
          <p style={{ marginTop: '0.5rem', fontSize: '0.95rem', lineHeight: '1.6' }}>
            {tool.content}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
