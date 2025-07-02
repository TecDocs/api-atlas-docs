import React from 'react';
import styles from './AnimatedComparisonTable.module.css';

const tools = [
  { name: 'Swagger', feature: 'Interactive Docs', supported: true },
  { name: 'Redoc', feature: 'Static Rendering', supported: true },
  { name: 'Postman', feature: 'Testing & Mocking', supported: true },
  { name: 'Stoplight', feature: 'Visual Editing', supported: true },
];

export default function AnimatedComparisonTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Tool</th>
          <th>Key Feature</th>
          <th>Supports OpenAPI</th>
        </tr>
      </thead>
      <tbody>
        {tools.map((tool, idx) => (
          <tr key={idx} className={styles.row}>
            <td>{tool.name}</td>
            <td>{tool.feature}</td>
            <td>{tool.supported ? '✅' : '❌'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
