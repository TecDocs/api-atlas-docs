import React from 'react';

export default function ConceptDiagram({ src, caption }) {
  return (
    <div style={{ textAlign: 'center', margin: '2rem 0' }}>
      <img src={src} alt={caption} style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }} />
      <p><strong>Figure:</strong> {caption}</p>
    </div>
  );
}