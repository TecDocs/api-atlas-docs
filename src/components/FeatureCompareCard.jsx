import React from 'react';

export default function FeatureCompareCard({ name, pros = [], cons = [] }) {
  return (
    <div className="feature-card">
      <h3>{name}</h3>
      <div className="pros-cons">
        <div>
          <h4>✅ Pros</h4>
          <ul>{pros.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
        <div>
          <h4>❌ Cons</h4>
          <ul>{cons.map((c, i) => <li key={i}>{c}</li>)}</ul>
        </div>
      </div>
    </div>
  );
}
