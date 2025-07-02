
import React from 'react';
import styles from './ScalingChecklist.module.css';

export default function ScalingChecklist() {
  const items = [
    "✅ Helm values are modular across environments",
    "✅ RBAC is scoped per service",
    "✅ Probes are in place and validated",
    "✅ Secrets are injected securely via pipeline",
    "✅ GitOps repo is cleanly structured with overlays",
    "✅ CI/CD has rollback and linting support"
  ];

  return (
    <div className={styles.checklist}>
      <h2>🛠️ Production Scaling Checklist</h2>
      <ul>
        {items.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}
