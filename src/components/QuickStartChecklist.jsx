import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import { motion } from 'framer-motion';
import Link from '@docusaurus/Link';
import HoverExplain from './HoverExplain';

export default function QuickStartChecklist() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div
      className={`checklist-grid ${isDark ? 'theme-dark' : 'theme-light'}`}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem',
      }}
    >
      {[
        {
          icon: '📦',
          title: 'Install Core Tools',
          content: (
            <>
              Install <a href="https://www.postman.com/downloads/" target="_blank">Postman</a>, <a href="https://curl.se/download.html" target="_blank">curl</a>, and <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>.<br />
              <HoverExplain word="curl" definition="A terminal tool for sending HTTP requests." />, <HoverExplain word="Postman" definition="A GUI platform for API testing and monitoring." />, and YAML linting via VS Code are used throughout this site.
            </>
          ),
        },
        {
          icon: '🔐',
          title: 'Get API Token',
          content: (
            <>
              Start with the <Link to="/docs/getting-started/authentication-guide">Authentication Guide</Link> and get your <Link to="/docs/getting-started/api-token">API token</Link>.<br />
              <HoverExplain word="API token" definition="A secure string used to authenticate requests." /> is required to call routes like <code>/user/me</code> or <code>/payroll/summary</code>.
            </>
          ),
        },
        {
          icon: '📄',
          title: 'OpenAPI File',
          content: (
            <>
              Download the <a href="/spec/openapi.yaml" target="_blank">OpenAPI YAML</a>.<br />
              <HoverExplain word="OpenAPI spec" definition="Defines the structure of your API in YAML or JSON." /> powers both <Link to="/docs/api-reference/swagger-ui">Swagger UI</Link> and <Link to="/docs/api-reference/redoc">Redoc</Link>.
            </>
          ),
        },
        {
          icon: '🧪',
          title: 'Test a Request',
          content: (
            <>
              Use curl or Postman to hit <code>/status/ping</code> with your API token.<br />
              A <code>200 OK</code> response confirms valid <HoverExplain word="auth headers" definition="Headers like Authorization that validate access to protected endpoints." />.
            </>
          ),
        },
      ].map((card, index) => (
        <motion.div
          key={card.title}
          className="checklist-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <h3>{card.icon} {card.title}</h3>
          <p>{card.content}</p>
        </motion.div>
      ))}
    </div>
  );
}
