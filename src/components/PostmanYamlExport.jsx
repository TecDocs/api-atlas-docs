import React from 'react';
import HoverExplain from '@site/src/components/HoverExplain';

export default function PostmanYamlExport() {
  return (
    <div
      style={{
        backgroundColor: '#1f1f1f',
        color: '#f0f0f0',
        padding: '2rem',
        borderRadius: '12px',
        lineHeight: '1.7',
        fontSize: '1rem',
        marginTop: '2.5rem',
        boxShadow: '0 0 12px rgba(0, 0, 0, 0.4)',
      }}
    >
      <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
        📤 Exporting Collections as YAML
      </h3>
      <p style={{ marginBottom: '1rem' }}>
        After building your Postman Collection, you can export it as a{' '}
        <HoverExplain
          word="YAML"
          definition="A human-readable data format used for OpenAPI and configuration files."
        />{' '}
        file:
      </p>
      <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
        <li style={{ marginBottom: '0.75rem' }}>
          Click <code style={{ backgroundColor: '#333', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>...</code> next to the collection → <strong>Export</strong>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          Choose{' '}
          <code style={{ backgroundColor: '#333', padding: '0.1rem 0.3rem', borderRadius: '4px' }}>
            Collection v2.1 (JSON)
          </code>
        </li>
        <li style={{ marginBottom: '0.75rem' }}>
          Use a converter (e.g.,{' '}
          <a
            href="https://www.json2yaml.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#4da6ff', textDecoration: 'underline' }}
          >
            json2yaml.com
          </a>
          ) to convert it to YAML
        </li>
        <li>Embed it into your OpenAPI spec if needed</li>
      </ul>

      <pre
        style={{
          backgroundColor: '#2a2a2a',
          color: '#fff',
          padding: '1.25rem',
          borderRadius: '8px',
          fontSize: '0.95rem',
          overflowX: 'auto',
        }}
      >
{`paths:
  /users:
    get:
      summary: Fetch all users
      responses:
        '200':
          description: A list of users
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/User'`}
      </pre>
    </div>
  );
}
