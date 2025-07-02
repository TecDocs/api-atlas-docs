import React from 'react';
import './LintFailExample.css';

export default function LintFailExample({ code, error, caption }) {
  return (
    <div className="lint-example">
      <pre className="lint-code"><code>{code}</code></pre>
      <div className="lint-error">⚠️ {error}</div>
      {caption && <p className="lint-caption">{caption}</p>}
    </div>
  );
}