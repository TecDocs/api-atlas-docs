import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialOceanic } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function YamlSpotlight({ code }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <SyntaxHighlighter language="yaml" style={materialOceanic}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
}