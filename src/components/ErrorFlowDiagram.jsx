import React from 'react';
import styles from './ErrorFlowDiagram.module.css';

const ErrorFlowDiagram = () => (
  <div className={styles.diagram}>
    <div className={styles.block}>🔵 Client Request</div>
    <div className={styles.arrow}>➡</div>
    <div className={styles.block}>🟢 API Gateway</div>
    <div className={styles.arrow}>➡</div>
    <div className={styles.block}>🟡 Backend</div>
    <div className={styles.arrow}>⛔</div>
    <div className={styles.block}>🔴 Error Response</div>
  </div>
);

export default ErrorFlowDiagram;