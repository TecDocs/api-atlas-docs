import React from 'react';
import styles from './ProbeDemo.module.css';

export default function ProbeDemo() {
  return (
    <div className={styles.container}>
      <h3>🩺 Liveness vs. Readiness Probes</h3>
      <p><strong>Liveness Probe</strong> determines if a container should be restarted. <strong>Readiness Probe</strong> decides if it should receive traffic.</p>
      <ul>
        <li>Use <code>httpGet</code> or <code>exec</code> for health checks.</li>
        <li>Configure <code>initialDelaySeconds</code>, <code>timeoutSeconds</code>, and <code>periodSeconds</code>.</li>
      </ul>
    </div>
  );
}