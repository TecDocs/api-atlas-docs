
import React from 'react';
import styles from './BranchStrategyFlow.module.css';

export default function BranchStrategyFlow() {
  return (
    <div className={styles.flow}>
      <h3>🌳 Branching Strategy</h3>
      <pre className={styles.tree}>
        {`main
├── staging ← PRs from dev
│   └── dev ← active feature work`}
      </pre>
    </div>
  );
}
