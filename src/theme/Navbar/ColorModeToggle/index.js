import React from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import './styles.css';

export default function CustomColorModeToggle() {
  const { colorMode, setColorMode } = useColorMode();

  if (!useIsBrowser()) return null;

  return (
    <button
      className="theme-toggle-icon"
      onClick={() => setColorMode(colorMode === 'dark' ? 'light' : 'dark')}
      aria-label="Toggle theme"
      type="button"
    >
      <img
        src="/api-atlas-docs/img/moon-icon.svg"
        alt="Dark Mode"
        className="theme-icon-image light-only"
      />
      <img
        src="/api-atlas-docs/img/sun-icon-white.svg"
        alt="Light Mode"
        className="theme-icon-image dark-only"
      />
    </button>
  );
}
