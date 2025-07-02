
import React from 'react';
import styles from './TeamOwnershipMatrix.module.css';

export default function TeamOwnershipMatrix() {
  return (
    <div className={styles.matrix}>
      <h2>🧬 Team Ownership Matrix</h2>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Responsible Team</th>
            <th>Fallback</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>RBAC Policies</td><td>Security</td><td>Platform</td></tr>
          <tr><td>CI/CD Pipelines</td><td>DevOps</td><td>Backend</td></tr>
          <tr><td>Helm Charts</td><td>Backend</td><td>DevOps</td></tr>
          <tr><td>Secrets Management</td><td>Security</td><td>DevOps</td></tr>
        </tbody>
      </table>
    </div>
  );
}
