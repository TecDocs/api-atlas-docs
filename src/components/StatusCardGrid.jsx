import React from 'react';
import styles from './StatusCardGrid.module.css';

const STATUS_CODES = [
  { code: '400', label: 'Bad Request', description: 'Client error due to malformed request.' },
  { code: '401', label: 'Unauthorized', description: 'Authentication is required or has failed.' },
  { code: '403', label: 'Forbidden', description: 'Authenticated but access is not allowed.' },
  { code: '404', label: 'Not Found', description: 'Requested resource does not exist.' },
  { code: '429', label: 'Too Many Requests', description: 'Rate limit exceeded.' },
];

const StatusCardGrid = () => (
  <div className={styles.grid}>
    {STATUS_CODES.map(({ code, label, description }) => (
      <div key={code} className={styles.card}>
        <div className={styles.code}>{code}</div>
        <div className={styles.label}>{label}</div>
        <div className={styles.description}>{description}</div>
      </div>
    ))}
  </div>
);

export default StatusCardGrid;