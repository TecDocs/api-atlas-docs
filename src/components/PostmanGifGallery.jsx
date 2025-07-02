
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

const gifs = [
  { src: '/img/postman-setup-env.gif', caption: 'Figure 1. Setting up Postman environments with dynamic variables.' },
  { src: '/img/postman-get-users.gif', caption: 'Figure 2. Sending a GET request and validating response headers and body.' },
  { src: '/img/postman-post-users.gif', caption: 'Figure 3. Executing a POST request with payload and visual response.' },
];

export default function PostmanGifGallery() {
  const { colorMode } = useColorMode();

  return (
    <div style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
      {gifs.map((gif, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img
            src={gif.src}
            alt={`Postman demo ${index + 1}`}
            style={{
              width: '100%',
              maxWidth: '700px',
              borderRadius: '12px',
              boxShadow: colorMode === 'dark' ? '0 0 20px #ffc107' : '0 0 10px #999',
              transition: 'box-shadow 0.3s ease-in-out',
            }}
          />
          <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>{gif.caption}</p>
        </div>
      ))}
    </div>
  );
}
