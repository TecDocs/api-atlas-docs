
import React from 'react';
import { motion } from 'framer-motion';
import './AnimatedRecapTimeline.css';

const items = [
  "1. ✅ Setup & Quickstart: Toolchain, YAML, and environment alignment",
  "2. 🧾 Status Codes & Auth: Real-world semantics, token flow, and error diagnosis",
  "3. 🔍 Structured Data Debugging: JSON, YAML, and schema integrity",
  "4. 📦 OpenAPI Integration: Swagger, Redoc, CI linting, and Postman collections",
  "5. 🌐 Network & API Failures: DNS, proxies, TLS, 5xx, and latency traps",
];

export default function AnimatedRecapTimeline() {
  return (
    <div className="recap-container">
      <h3 className="recap-heading">📘 API Atlas Journey Recap</h3>
      <ul className="recap-list">
        {items.map((step, index) => (
          <motion.li
            key={index}
            className="recap-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            {step}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
