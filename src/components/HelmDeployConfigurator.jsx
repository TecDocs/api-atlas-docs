import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HelmDeployConfigurator.module.css';

const baseYaml = `replicaCount: 2
image:
  repository: app
  tag: latest`;

const prodYaml = `replicaCount: 4
image:
  repository: app
  tag: v2.1.0`;

export default function HelmDeployConfigurator() {
  const [useProd, setUseProd] = useState(false);
  const currentYaml = useProd ? prodYaml : baseYaml;
  const label = useProd ? "Production Config" : "Base Config";

  return (
    <div className={styles.configurator}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.label}
      >
        <strong>{label}</strong>
      </motion.div>

      <motion.pre
        className={styles.yamlOutput}
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <code>{currentYaml}</code>
      </motion.pre>

      <button
        className={styles.toggleButton}
        onClick={() => setUseProd(!useProd)}
      >
        Toggle to {useProd ? 'Base' : 'Production'} Values
      </button>
    </div>
  );
}
