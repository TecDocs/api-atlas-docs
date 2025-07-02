
import React from 'react';
import styles from './MultiClusterDiagram.module.css';

export default function MultiClusterDiagram() {
  return (
    <div className={styles.diagram}>
      <h3>🌐 Multi-Cluster Deployment Flow</h3>
      <p>Code → CI/CD → AKS Dev + AKS Prod via GitOps</p>
      <div className={styles.graph}>
        Dev Repo → CI → ArgoCD → AKS Dev
        <br />
        Prod Repo → CI → ArgoCD → AKS Prod
      </div>
    </div>
  );
}
