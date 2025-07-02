
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import './ToolComparisonTable.css';

export default function ToolComparisonTable({ items }) {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div className="tool-comparison-table">
      {items.map((tool, index) => {
        const imgName = tool.name.toLowerCase().replace(/\s/g, '-') + '-final.svg';
        return (
          <div
            key={tool.name}
            className={`tool-card ${isDark ? 'dark' : 'light'} float-idle`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="tool-header">
              <img
                src={`/img/${imgName}`}
                alt={`${tool.name} icon`}
                className="tool-icon"
              />
              <h3>{tool.name}</h3>
            </div>
            <p>{tool.description}</p>
            <div className="tool-section">
              <strong>✅ Pros</strong>
              <ul>{tool.pros.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
            <div className="tool-section">
              <strong>⚠️ Cons</strong>
              <ul>{tool.cons.map(c => <li key={c}>{c}</li>)}</ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
