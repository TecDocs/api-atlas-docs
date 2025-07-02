import React from 'react';
import './NamingConventionGrid.css';

export default function NamingConventionGrid({ examples, caption }) {
  return (
    <div className="naming-grid">
      <table>
        <thead><tr><th>✅ Recommended</th><th>🚫 Avoid</th></tr></thead>
        <tbody>
          {examples.map((e, idx) => (
            <tr key={idx}>
              <td>{e.correct}</td>
              <td>{e.wrong}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {caption && <p className="grid-caption">{caption}</p>}
    </div>
  );
}