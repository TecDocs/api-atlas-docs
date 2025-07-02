
import React, { useState } from 'react';
import './ExpandablePanel.css';

export default function ExpandablePanel({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`expandable-panel ${open ? 'open' : ''}`}>
      <button className="expand-toggle" onClick={() => setOpen(!open)}>
        {open ? '▼' : '▶'} {title}
      </button>
      {open && <div className="expand-content">{children}</div>}
    </div>
  );
}
