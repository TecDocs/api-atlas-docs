
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './CompanyOpenApiUsage.module.css';
import { motion } from 'framer-motion';

const companies = [
  {
    name: 'Stripe',
    logo: '/img/stripe-logo.svg',
    summary: 'Uses OpenAPI to power their developer portal and generate SDKs with accuracy.',
  },
  {
    name: 'Twilio',
    logo: '/img/twilio-logo.svg',
    summary: 'Leverages OpenAPI for managing dynamic APIs, webhooks, and product references.',
  },
  {
    name: 'Microsoft',
    logo: '/img/microsoft-logo.svg',
    summary: 'Azure APIs are documented via OpenAPI, enabling automation and integration.',
  },
  {
    name: 'Postman',
    logo: '/img/postman-logo.svg',
    summary: 'Imports OpenAPI specs to generate collections and simulate endpoints instantly.',
  },
  {
    name: 'GitHub',
    logo: '/img/github-logo.svg',
    summary: 'Exposes OpenAPI-based schemas for REST endpoints, webhooks, and integrations.',
  },
];

export default function CompanyOpenApiUsage() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div className={`${styles.gridWrapper} ${isDark ? styles.dark : styles.light}`}>
      {companies.map((company, index) => (
        <motion.div
          className={styles.card}
          key={company.name}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <img src={company.logo} alt={`${company.name} logo`} className={styles.logo} />
          <h3>{company.name}</h3>
          <p>{company.summary}</p>
        </motion.div>
      ))}
    </div>
  );
}
