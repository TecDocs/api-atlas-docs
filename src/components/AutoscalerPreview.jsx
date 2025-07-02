import React from 'react';
import styles from './AutoscalerPreview.module.css';

export default function AutoscalerPreview() {
  return (
    <div className={styles.panel}>
      <h3>📊 Autoscaler Preview</h3>
      <p>The Horizontal Pod Autoscaler automatically scales pods based on CPU or memory thresholds.</p>
      <p>Sample config: <code>minReplicas: 2</code>, <code>maxReplicas: 10</code>, <code>targetCPUUtilizationPercentage: 80</code>.</p>
    </div>
  );
}