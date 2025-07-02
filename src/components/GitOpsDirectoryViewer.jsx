
import React from 'react';
import styles from './GitOpsDirectoryViewer.module.css';

export default function GitOpsDirectoryViewer() {
  return (
    <div className={styles.viewer}>
      <h3>📁 GitOps Repository Layout</h3>
      <pre className={styles.code}>
        {`.
├── apps/
│   ├── frontend/
│   ├── backend/
│   └── shared/
├── clusters/
│   ├── dev/
│   ├── staging/
│   └── prod/
├── charts/
│   └── myapp/
└── values/
    ├── dev.yaml
    ├── staging.yaml
    └── prod.yaml`}
      </pre>
    </div>
  );
}
