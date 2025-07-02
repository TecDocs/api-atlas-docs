
import React from 'react';
import styles from './GitOpsRepoVisualizer.module.css';

export default function GitOpsRepoVisualizer() {
  return (
    <div className={styles.visualizer}>
      <h2>📂 GitOps Repository Structure</h2>
      <pre>
{`
.
├── base
│   ├── deployment.yaml
│   ├── service.yaml
│   └── hpa.yaml
├── overlays
│   ├── dev
│   │   └── values.yaml
│   ├── staging
│   │   └── values.yaml
│   └── prod
│       └── values.yaml
├── secrets
│   ├── dev-secrets.yaml
│   └── prod-secrets.yaml
└── pipelines
    └── github-actions.yaml
`}
      </pre>
      <p>This layout supports scalable environments using Kustomize or Helm, separating base logic from environment-specific overrides.</p>
    </div>
  );
}
