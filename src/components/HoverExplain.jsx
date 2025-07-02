import React from 'react';
import Tooltip from '@mui/material/Tooltip';

export default function HoverExplain({ word, definition, externalLink }) {
  const hoverStyle = {
    display: 'inline-block',
    fontWeight: 'bold',
    textDecoration: 'underline dotted',
    cursor: 'help',
    color: '#0070f3',
    transition: 'transform 0.2s ease, color 0.2s ease',
  };

  const hoverActiveStyle = {
    transform: 'scale(1.06)',
    color: '#0055aa',
  };

  const [isHovering, setIsHovering] = React.useState(false);

  const content = (
    <Tooltip title={definition} arrow placement="top">
      <span
        className="hover-word"
        style={isHovering ? { ...hoverStyle, ...hoverActiveStyle } : hoverStyle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        tabIndex={0}
        aria-label={definition}
      >
        {word}
      </span>
    </Tooltip>
  );

  if (externalLink) {
    return (
      <a
        href={externalLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        {content}
      </a>
    );
  }

  return content;
}
