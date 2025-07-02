
import React from 'react';
import { motion } from 'framer-motion';
import styles from './SecretsInjectionFlow.module.css';

const steps = [
  "GitHub Secrets or Azure Key Vault",
  "Pulled into GitHub Actions or CI Runner",
  "Injected into Helm chart or env vars in manifest"
];

export default function SecretsInjectionFlow() {
  return (
    <div className={styles.flowWrapper}>
      {steps.map((step, i) => (
        <motion.div
          key={i}
          className={styles.stepCard}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.3 }}
        >
          <p>{step}</p>
        </motion.div>
      ))}
    </div>
  );
}
