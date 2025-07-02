import React from 'react';
import styles from './YamlJsonTimeline.module.css';
import { useColorMode } from '@docusaurus/theme-common';

const timelineSteps = [
  {
    step: 1,
    title: 'The Rise of JSON',
    badge: '2001',
    description: 'JSON became the standard for lightweight data exchange. Its simplicity made it the go-to format for AJAX and REST APIs.'
  },
  {
    step: 2,
    title: 'OpenAPI Specification Adopts JSON',
    badge: '2010',
    description: 'Swagger (now OpenAPI) emerged and formalized JSON as the backbone of API definitions. It allowed developers to describe RESTful APIs in a standardized way.'
  },
  {
    step: 3,
    title: 'YAML Support Introduced in OpenAPI',
    badge: '2015',
    description: 'OpenAPI added support for YAML, offering a cleaner syntax that reduced verbosity, especially in large schema definitions.'
  },
  {
    step: 4,
    title: 'YAML Becomes the Default for Specs',
    badge: '2020+',
    description: 'Tools like Swagger Editor, Redoc, and Stoplight began defaulting to YAML for authoring. Git-based workflows favored it for its readability.'
  }
];

export default function YamlJsonTimeline() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div className={styles.timeline}>
      {timelineSteps.map(({ step, title, badge, description }) => (
        <div key={step} className={`${styles.timelineItem} ${isDark ? styles.dark : styles.light}`}>
          <div className={styles.stepNumber}>{step}</div>
          <div className={styles.badge}>{badge}</div>
          <div className={styles.timelineContent}>
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}