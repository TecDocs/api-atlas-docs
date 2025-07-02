
import React from 'react';
import { motion } from 'framer-motion';
import styles from './PipelineStageViewer.module.css';

const stages = [
  { title: "🔍 Lint", description: "Code is linted for syntax and formatting issues." },
  { title: "🧪 Test", description: "Unit and integration tests are run for reliability." },
  { title: "🔧 Build", description: "The container image is built and tagged." },
  { title: "📦 Helm Template", description: "Kubernetes manifests are rendered from Helm charts." },
  { title: "🚀 Deploy", description: "Manifests are applied to the AKS cluster." }
];

export default function PipelineStageViewer() {
  return (
    <div className={styles.pipelineContainer}>
      {stages.map((stage, index) => (
        <motion.div
          key={index}
          className={styles.stageCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.2 }}
        >
          <h3>{stage.title}</h3>
          <p>{stage.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
