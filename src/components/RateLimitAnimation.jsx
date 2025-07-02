import { useColorMode } from '@docusaurus/theme-common';

const RateLimitGif = () => {
  const { colorMode } = useColorMode();
  const borderColor = colorMode === 'dark' ? '#0ff' : '#333';

  return (
    <div
      style={{
        borderRadius: '12px',
        padding: '0.75rem',
        backgroundColor: colorMode === 'dark' ? '#111827' : '#ffffff',
        boxShadow: colorMode === 'dark'
          ? '0 0 24px rgba(0, 255, 255, 0.15)'
          : '0 0 12px rgba(0, 0, 0, 0.08)',
        textAlign: 'center',
        marginBottom: '2rem',
      }}
    >
      <a
        href="/img/rate-limit-demo.gif"
        target="_blank"
        rel="noopener noreferrer"
        title="Click to view full size"
        style={{ display: 'block' }}
      >
        <img
          src="/img/rate-limit-demo.gif"
          alt="Rate limit animation"
          style={{
            borderRadius: '8px',
            width: '100%',
            maxWidth: '800px',
            height: 'auto',
            transition: 'transform 0.2s ease',
            border: `2px solid ${borderColor}`,
          }}
        />
      </a>
      <p style={{ marginTop: '0.75rem', fontSize: '0.95rem', opacity: 0.8 }}>
        <strong>Figure 1.</strong> <em>Visual walkthrough of rate limiting</em> — simulates request overflow with enforced limits per user or token. Click to enlarge.
      </p>
    </div>
  );
};

<RateLimitGif />
