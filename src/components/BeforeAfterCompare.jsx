import React from 'react';
import './BeforeAfterCompare.css';

export default function BeforeAfterCompare({ before, after, caption }) {
  return (
    <div className="before-after-compare">
      <div className="compare-column">
        <h4>Before</h4>
        <pre><code>{before}</code></pre>
      </div>
      <div className="compare-column">
        <h4>After</h4>
        <pre><code>{after}</code></pre>
      </div>
      {caption && <p className="compare-caption">{caption}</p>}
    </div>
  );
}