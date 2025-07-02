import React from 'react';
import styles from './SecretInjectionCard.module.css';

export default function SecretInjectionCard() {
  return (
    <div className={styles.card}>
      <h3>🔐 Secure Secrets with Kubernetes</h3>
      <p>Secrets like API keys or passwords are stored securely using Kubernetes <code>Secret</code> objects.</p>
      <p>Use <code>envFrom</code> to inject secrets into containers safely.</p>
    </div>
  );
}