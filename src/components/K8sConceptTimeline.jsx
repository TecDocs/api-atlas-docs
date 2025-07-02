
import React from 'react';
import styles from './K8sConceptTimeline.module.css';
import { motion } from 'framer-motion';

const steps = [
  "OpenAPI Spec",
  "Postman Testing",
  "Redoc Documentation",
  "AKS YAML Config",
  "GitOps CI Pipeline",
  "AKS Deployment"
];

export default function K8sConceptTimeline() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className={styles.timelineWrapper}>
      <ul className={styles.timeline}>
        {steps.map((step, index) => (
          <li key={index} className={styles.timelineStep}>
            <span>{step}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
