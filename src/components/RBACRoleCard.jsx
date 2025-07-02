import React from 'react';
import styles from './RBACRoleCard.module.css';

export default function RBACRoleCard() {
  return (
    <div className={styles.card}>
      <h3>🛡️ RBAC Role Binding</h3>
      <p>Use Kubernetes <code>Role</code> or <code>ClusterRole</code> with <code>RoleBinding</code> to manage access.</p>
      <p>Grant least privilege using verbs like <code>get</code>, <code>watch</code>, <code>list</code>.</p>
    </div>
  );
}