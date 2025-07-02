import React from 'react';

export default function RedocComparisonBox({ feature, redocBenefit, other }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '1rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      marginBottom: '1rem',
      backgroundColor: '#f8fafc'
    }}>
      <div><strong>{feature}</strong></div>
      <div>✅ {redocBenefit}</div>
      <div>⚠️ {other}</div>
    </div>
  );
}