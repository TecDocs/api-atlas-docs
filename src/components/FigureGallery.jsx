import React from 'react';
import styles from './FigureGallery.module.css';
import { motion } from 'framer-motion';

const FigureGallery = ({ images }) => {
  return (
    <div className={styles.galleryWrapper}>
      {images.map(({ src, caption }, index) => (
        <motion.figure
          key={index}
          className={styles.figure}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={src} alt={`Figure ${index + 1}`} />
          <figcaption>{caption}</figcaption>
        </motion.figure>
      ))}
    </div>
  );
};

export default FigureGallery;
