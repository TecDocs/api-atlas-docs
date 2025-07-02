
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './AnimatedSwaggerStep.css';



const steps = [
  '1️⃣ Enter your server URL',
  '2️⃣ Click "Authorize" and paste your token',
  '3️⃣ Expand an endpoint',
  '4️⃣ Click “Try It Out”',
  '5️⃣ View the live response'
];

export default function AnimatedSwaggerStep() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="swagger-step-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h4>{steps[stepIndex]}</h4>
    </motion.div>
  );
}
