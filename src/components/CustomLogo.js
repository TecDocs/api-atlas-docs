// components/CustomLogo.tsx
import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';

export default function CustomLogo() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <div className="custom-logo floating-logo">
      <img
        src={`/img/cloud-icon${isDark ? '-white' : ''}.svg`}
        alt="Cloud Icon"
        className="logo-icon"
      />
      <span className={`logo-text ${isDark ? 'dark' : 'light'}`}>
        API Atlas · Interactive docs, guides, and references for modern cloud APIs
      </span>
    </div>
  );
}
