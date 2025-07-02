import React from 'react';
import {useColorMode} from '@docusaurus/theme-common';
import useIsBrowser from '@docusaurus/useIsBrowser';
import './styles.css';

export default function CustomColorModeToggle() {
  const {colorMode, setColorMode} = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  if (!useIsBrowser()) return null;

  return (
    <button
      className="theme-toggle-icon"
      onClick={() => setColorMode(isDarkTheme ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
      type="button"
    >
      <img
        src={isDarkTheme ? '/img/sun-icon-white.svg' : '/img/moon-icon.svg'}
        alt={isDarkTheme ? 'Light mode' : 'Dark mode'}
        className="theme-icon-image"
      />
    </button>
  );
}
