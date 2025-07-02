
import React from 'react';
import './DocContextCallout.css';

export default function DocContextCallout({ title, body }) {
  return (
    <div className="doc-context-callout">
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}
