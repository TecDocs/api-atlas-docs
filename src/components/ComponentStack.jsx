import React from 'react';
import './ComponentStack.css';

export default function ComponentStack({ items, caption }) {
  return (
    <div className="component-stack">
      {items.map((item, idx) => (
        <div key={idx} className="stack-block" style={{ backgroundColor: item.color }}>
          {item.label}
        </div>
      ))}
      {caption && <p className="stack-caption">{caption}</p>}
    </div>
  );
}