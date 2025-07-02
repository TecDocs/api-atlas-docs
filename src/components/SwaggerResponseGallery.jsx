
import React, { useState } from 'react';
import './SwaggerResponseGallery.css';

const responses = {
  '200 OK': '{ "id": 1, "status": "success" }',
  '400 Bad Request': '{ "error": "Invalid input" }',
  '401 Unauthorized': '{ "error": "Missing or invalid token" }',
  '500 Server Error': '{ "error": "Internal error occurred" }'
};

export default function SwaggerResponseGallery() {
  const [active, setActive] = useState('200 OK');

  return (
    <div className="swagger-gallery-wrapper">
      <div className="swagger-tabs">
        {Object.keys(responses).map((label) => (
          <button key={label} onClick={() => setActive(label)} className={label === active ? 'active' : ''}>
            {label}
          </button>
        ))}
      </div>
      <pre className="swagger-response">{responses[active]}</pre>
    </div>
  );
}
