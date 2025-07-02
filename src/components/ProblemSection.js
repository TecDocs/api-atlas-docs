import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProblemSection.module.css';

const problems = [
  {
    title: 'Fragmented Dev Workflows',
    description:
      'Most teams juggle Swagger files, outdated Confluence pages, and half-baked Postman docs. API Atlas unifies it all in one place.',
    emoji: '🧱',
  },
  {
    title: 'No Way to Try Endpoints',
    description:
      'Traditional docs don’t let you experiment. With API Atlas, every endpoint includes a “Try it now” feature using Swagger UI or Postman.',
    emoji: '⚡',
  },
  {
    title: 'DevOps Chaos',
    description:
      'Deploying APIs to Azure AKS or Kubernetes shouldn’t require 20 tabs open. API Atlas includes clean step-by-step deployment walkthroughs.',
    emoji: '🛠️',
  },
];

export default function ProblemSection() {
  return (
    <motion.section
      className={styles.problemSection}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className={styles.title}>What Problems Does API Atlas Solve?</h2>

      <div className={styles.subtitle}>
        <p>
          Building and documenting modern APIs has become increasingly
          fragmented. Developers are forced to jump between Swagger files,
          Postman collections, outdated Confluence pages, and manual DevOps
          playbooks—slowing down onboarding and creating unnecessary friction
          across teams.
        </p>
        <p>
          API Atlas solves this by combining interactive OpenAPI references,
          live Swagger testing, Postman integration, and AKS/Kubernetes
          deployment walkthroughs into one seamless, animated,
          developer-first experience.
        </p>
      </div>

      <div className={styles.cardGrid}>
        {problems.map((problem, i) => (
          <motion.div
            key={i}
            className={styles.card}
            whileHover={{ scale: 1.06, y: -8 }}
            initial={{ opacity: 0, x: i === 0 ? -50 : i === 1 ? 0 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            onClick={() =>
              alert(`${problem.title} — more info coming soon!`)
            }
          >
            <div className={styles.emoji}>{problem.emoji}</div>
            <h3>{problem.title}</h3>
            <p>{problem.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
