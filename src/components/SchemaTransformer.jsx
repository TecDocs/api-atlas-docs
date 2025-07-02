import React from 'react';
import { motion } from 'framer-motion';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './SchemaTransformer.module.css';

export default function SchemaTransformer() {
  const { colorMode } = useColorMode();

  const blockStyle = {
    borderRadius: '12px',
    padding: '1rem',
    marginBottom: '1.5rem',
    fontSize: '0.9rem',
    fontFamily: 'var(--ifm-font-family-monospace)',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    transition: 'all 0.4s ease',
    backgroundColor: colorMode === 'dark' ? '#1e1e1e' : '#f5f5f5',
    border: colorMode === 'dark' ? '1px solid #444' : '1px solid #ddd',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
  };

  const yamlSchema = `components:
  schemas:
    User:
      type: object
      properties:
        id:
          type: string
        name:
          type: string
        email:
          type: string
          format: email`;

  const openApiJson = `{
  "components": {
    "schemas": {
      "User": {
        "type": "object",
        "properties": {
          "id": { "type": "string" },
          "name": { "type": "string" },
          "email": { "type": "string", "format": "email" }
        }
      }
    }
  }
}`;

  const apiOutput = `{
  "id": "abc123",
  "name": "Jane Doe",
  "email": "jane@example.com"
}`;

  return (
    <div className={styles.transformerContainer}>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>📄 YAML Schema</h3>
        <div className={styles.hoverBlock}>
          <code>{yamlSchema}</code>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>🔁 Converted OpenAPI JSON</h3>
        <div className={styles.hoverBlock}>
          <code>{openApiJson}</code>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3>📦 Final API Output Example</h3>
        <div className={styles.hoverBlock}>
          <code>{apiOutput}</code>
        </div>
        <a
          href="/schema-transformer-example.txt"
          download
          className={styles.downloadLink}
        >
          📥 Download This Example
        </a>
      </motion.div>
    </div>
  );
}