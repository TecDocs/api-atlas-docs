import React, { useState } from 'react';
import { RedocStandalone } from 'redoc';
import { useColorMode } from '@docusaurus/theme-common';

export default function RedocModalEmbed({ url }) {
  const [open, setOpen] = useState(false);
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="redoc-launcher float-idle"
        style={{
          background: isDark ? '#1e293b' : '#f1f5f9',
          color: isDark ? '#e2e8f0' : '#1e293b',
          borderRadius: '12px',
          padding: '1.25rem',
          cursor: 'pointer',
          boxShadow: isDark
            ? '0 0 12px rgba(0,255,255,0.2)'
            : '0 2px 8px rgba(0,0,0,0.1)',
          transition: 'transform 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <h3 style={{ margin: 0 }}>🧪 Launch Full Redoc Viewer</h3>
        <p style={{ margin: 0 }}>Click to explore the full API spec using Redoc</p>
      </div>

      {open && (
        <div
          className="redoc-modal-backdrop"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1000,
            width: '100vw',
            height: '100vh',
            background: isDark ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.95)',
            overflowY: 'scroll',
          }}
        >
          <div
            style={{
              position: 'sticky',
              top: 0,
              background: isDark ? '#0f172a' : '#fff',
              padding: '1rem',
              zIndex: 1100,
              display: 'flex',
              justifyContent: 'flex-end',
              borderBottom: `1px solid ${isDark ? '#334155' : '#e2e8f0'}`,
            }}
          >
            <button
              onClick={() => setOpen(false)}
              style={{
                fontSize: '1.25rem',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: isDark ? '#f8fafc' : '#1e293b',
              }}
            >
              ❌ Close
            </button>
          </div>

          <RedocStandalone
            specUrl={url}
            options={{
              scrollYOffset: 80,
              hideDownloadButton: true,
              noAutoAuth: true,
              theme: {
                colors: {
                  primary: { main: isDark ? '#38bdf8' : '#3b82f6' },
                  text: { primary: isDark ? '#e2e8f0' : '#1e293b' },
                },
                sidebar: { width: '280px', backgroundColor: isDark ? '#1e293b' : '#f1f5f9' },
              },
            }}
          />
        </div>
      )}
    </>
  );
}
