import React from 'react';
import { motion } from 'framer-motion';

export default function Figure({
  src,
  caption,
  animation = 'fadeInOnScroll',
  delay = 0.8,
  duration = 0.6,
}) {
  // Choose animation variants
  const variants = {
    fadeInOnScroll: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    zoomIn: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  const selected = variants[animation] || variants.fadeInOnScroll;

  return (
    <motion.figure
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, duration }}
      variants={selected}
      style={{
        margin: '2rem 0',
        textAlign: 'center',
      }}
    >
      <img
        src={src}
        alt={caption}
        style={{
          width: '50%',
          height: '50%',
          maxHeight: '500px',
          maxWidth: '700px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        }}
      />
      {caption && (
        <figcaption
          style={{
            marginTop: '0.5rem',
            fontSize: '0.95rem',
            color: '#555',
            fontStyle: 'italic',
          }}
        >
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
