import React from 'react';
import styles from './OpenApiCompanyGrid.module.css';

const companies = [
  { name: 'Stripe', logo: '/img/stripe-logo.svg', alt: 'Stripe Logo' },
  { name: 'Twilio', logo: '/img/twilio-logo.svg', alt: 'Twilio Logo' },
  { name: 'Shopify', logo: '/img/shopify-logo.svg', alt: 'Shopify Logo' },
  { name: 'GitHub', logo: '/img/github-logo.svg', alt: 'GitHub Logo' },
  { name: 'Atlassian', logo: '/img/atlassian-logo.svg', alt: 'Atlassian Logo' }
];

export default function OpenApiCompanyGrid() {
  return (
    <div className={styles.grid}>
      {companies.map((company, index) => (
        <div key={index} className={styles.card}>
          <img src={company.logo} alt={company.alt} className={styles.logo} />
          <p>{company.name}</p>
        </div>
      ))}
    </div>
  );
}
