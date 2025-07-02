
import React from 'react';
import './StickyTipBanner.css';

export default function StickyTipBanner({ message, buttonText, href }) {
  return (
    <div className="sticky-tip-banner">
      <span>{message}</span>
      <a className="sticky-button" href={href}>{buttonText}</a>
    </div>
  );
}
