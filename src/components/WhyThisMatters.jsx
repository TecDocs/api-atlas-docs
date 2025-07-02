
import React from 'react';
import { motion } from 'framer-motion';
import HoverExplain from '@site/src/components/HoverExplain';

export default function WhyThisMatters() {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <ul>
        <li>🚧 <strong>Micro:</strong> A missing <HoverExplain word="header" definition="A key-value pair sent with HTTP requests or responses to provide metadata." /> causes a 500 on production? CI could've caught it.</li>
        <li>🔍 <strong>Macro:</strong> CI pipelines eliminate tribal knowledge—every team uses the same validation standard.</li>
        <li>🔄 <strong>Sustainable Dev:</strong> Without CI, manual testing introduces human error and slows delivery.</li>
        <li>📊 <strong>Auditing:</strong> Every execution is logged—if a test fails, CI tells you where, when, and why.</li>
      </ul>
    </motion.div>
  );
}
