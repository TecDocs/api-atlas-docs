import React from 'react';
import styles from './YamlJsonSupportTable.module.css';

export default function YamlJsonSupportTable() {
  const tools = [
    { name: 'Swagger UI', yaml: '✅ Full Support', json: '✅ Full Support', notes: 'Accepts both; YAML preferred for large specs.' },
    { name: 'Redoc', yaml: '✅ Full Support', json: '✅ Full Support', notes: 'Uses YAML for documentation; converts to JSON internally.' },
    { name: 'Postman', yaml: '🟡 Partial', json: '✅ Full Support', notes: 'YAML support via import; JSON is native format.' },
    { name: 'VS Code', yaml: '✅ with Plugin', json: '✅ Native', notes: 'JSON has native linting; YAML requires extensions.' },
    { name: 'OpenAPI Generator', yaml: '✅ Full Support', json: '✅ Full Support', notes: 'Generates from both, YAML preferred for readability.' }
  ];

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.customTable}>
        <thead>
          <tr>
            <th>Tool</th>
            <th>YAML</th>
            <th>JSON</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool, index) => (
            <tr key={index}>
              <td>{tool.name}</td>
              <td>{tool.yaml}</td>
              <td>{tool.json}</td>
              <td>{tool.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}