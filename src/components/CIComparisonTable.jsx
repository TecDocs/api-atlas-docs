import React from 'react';
import { motion } from 'framer-motion';

const tools = [
  {
    tool: 'GitHub Actions',
    strength: 'Native to GitHub, easy YAML setup, ideal for small to mid-size APIs.',
    example: 'Runs Spectral + Newman tests on push to main.',
  },
  {
    tool: 'GitLab CI',
    strength: 'Great for full-stack DevOps pipelines with visual config support.',
    example: 'Executes test matrix using .gitlab-ci.yml.',
  },
  {
    tool: 'CircleCI',
    strength: 'Parallel job support and caching. Great for fast, multi-env testing.',
    example: 'Validates across staging and production branches.',
  },
  {
    tool: 'Jenkins',
    strength: 'Highly customizable for enterprise APIs with advanced needs.',
    example: 'Postman test dashboards + OpenAPI contract gates.',
  },
  {
    tool: 'Bitbucket Pipelines',
    strength: 'Simple CI for Bitbucket users. YAML syntax mirrors GitHub Actions.',
    example: 'Executes Spectral on merge into release branches.',
  },
];

export default function CIComparisonTable() {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: '2rem',
        marginBottom: '2rem',
      }}
    >
      {tools.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.03 }}
          style={{
            backgroundColor: 'var(--ifm-background-surface-color)',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '10px',
            padding: '1rem',
            width: '280px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
          }}
        >
          <h3 style={{ marginBottom: '0.5rem' }}>{item.tool}</h3>
          <p>
            <strong>Strength:</strong> {item.strength}
          </p>
          <p>
            <strong>Example:</strong> {item.example}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
