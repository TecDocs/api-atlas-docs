import React from 'react';

export default function Quiz({ question, options, correctIndex }) {
  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', background: 'var(--ifm-background-color)' }}>
      <h4>{question}</h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {options.map((opt, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            <button
              onClick={() => alert(index === correctIndex ? '✅ Correct!' : '❌ Try Again.')}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'var(--ifm-color-primary)',
                border: 'none',
                color: '#fff',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {opt}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}