
import React, { useState } from 'react';
import HoverExplain from '@site/src/components/HoverExplain';
import styles from './YAMLPlayground.module.css';

const baseYAML = `
apiVersion: v1
kind: Service
metadata:
  name: my-api
spec:
  selector:
    app: my-api
  ports:
    - protocol: TCP
      port: 80
      targetPort: 3000
`;

const optimizedYAML = `
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-api
  template:
    metadata:
      labels:
        app: my-api
    spec:
      containers:
      - name: my-api
        image: my-api:latest
        ports:
        - containerPort: 3000
        readinessProbe:
          httpGet:
            path: /healthz
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 10
`;

export default function YAMLPlayground() {
  const [showOptimized, setShowOptimized] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setShowOptimized(!showOptimized)} className={styles.toggleBtn}>
        {showOptimized ? '⬅️ Show Base Config' : '➡️ Show Optimized Config'}
      </button>
      <pre className={styles.codeBlock}>
        <code>{showOptimized ? optimizedYAML : baseYAML}</code>
      </pre>
    </div>
  );
}
