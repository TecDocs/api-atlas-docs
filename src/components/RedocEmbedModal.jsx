import React, { useState } from 'react';
import { RedocStandalone } from 'redoc';

export default function RedocEmbedModal({ url }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>🔍 View Redoc</button>
      {open && (
        <div className="modal">
          <button onClick={() => setOpen(false)} style={{ float: 'right' }}>❌ Close</button>
          <RedocStandalone specUrl={url} options={{ scrollYOffset: 60 }} />
        </div>
      )}
    </div>
  );
}
