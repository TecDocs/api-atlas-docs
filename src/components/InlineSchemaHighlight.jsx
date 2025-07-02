
import React from 'react';
import './InlineSchemaHighlight.css';

export default function InlineSchemaHighlight({ children }) {
  return (
    <div className="inline-schema-highlight">
      <pre><code>{children}</code></pre>
    </div>
  );
}
