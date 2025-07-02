import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveFigure({
  src,
  caption,
  animation = 'fadeInOnScroll',
  delay = 0.3,
  duration = 0.6,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    fadeInOnScroll: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
    },
  };

  return (
    <>
      <motion.figure
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay, duration }}
        variants={variants[animation]}
        style={{
          margin: '2rem 0',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.02 }}
      >
        <motion.img
          src={src}
          alt={caption}
          style={{
            width: '100%',
            maxWidth: '1000px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
          }}
          whileHover={{ scale: 1.03 }}
        />
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
      </motion.figure>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              cursor: 'zoom-out',
            }}
          >
            <motion.img
              src={src}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{
                maxHeight: '90%',
                maxWidth: '90%',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
