import React from 'react';
import styles from './AksConfigFlow.module.css';
import { motion } from 'framer-motion';

export default function AksConfigFlow() {
  return (
    <div className={styles.flowContainer}>
      {/* CI-Driven Pipeline Flow */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        <img
          src="/img/aks-config-flow1.png"
          alt="CI pipeline from Swagger JSON to AKS with GitHub Actions and Helm"
          className={styles.flowImage}
        />
      
      </motion.div>

      {/* Simplified GitOps Model */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        <img
          src="/img/aks-config-flow2.png"
          alt="OpenAPI to YAML GitOps flow into AKS"
          className={styles.flowImage}
        />
       
      </motion.div>

      {/* YAML Anatomy Visual */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
        <img
          src="/img/aks-config-flow3.png"
          alt="YAML anatomy showing replica count, rollout, env, secrets, readinessProbe"
          className={styles.flowImage}
        />
        <p className={styles.caption}>
          <strong>Figure 3.</strong> This annotated YAML snippet breaks down the anatomy of a Kubernetes <code>Deployment</code> manifest. Each field—from <code>replicas</code> to <code>readinessProbe</code>—directly controls aspects of scaling, rollout strategy, config injection, and traffic gating. Understanding how these fields affect runtime behavior is essential to mastering Kubernetes operations.
        </p>
      </motion.div>

      {/* Final Summary */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className={styles.summary}
      >
        Together, these visuals demonstrate the full lifecycle of API-to-infrastructure workflows:
        from CI/CD pipelines that enforce quality gates, to GitOps flows that simplify delivery, all the way down to the declarative YAML controlling pod behavior. Whether you're managing services manually or automatically,
        these patterns reflect real-world DevOps practices used across top engineering teams.
      </motion.p>
    </div>
  );
}
