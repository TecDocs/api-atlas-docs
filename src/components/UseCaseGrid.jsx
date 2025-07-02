import React from 'react';

export default function UseCaseGrid({ children }) {
  return (
    <div
      className="usecase-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem',
        padding: '1rem 0',
      }}
    >
      {children}
    </div>
  );
}
