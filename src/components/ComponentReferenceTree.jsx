import React from 'react';
import './ComponentReferenceTree.css';

export default function ComponentReferenceTree({ root, refs, caption }) {
  return (
    <div className="reference-tree">
      <div className="tree-root">{root}</div>
      <div className="tree-branches">
        {refs.map((ref, idx) => (
          <div key={idx} className="tree-branch">↳ {ref}</div>
        ))}
      </div>
      {caption && <p className="tree-caption">{caption}</p>}
    </div>
  );
}