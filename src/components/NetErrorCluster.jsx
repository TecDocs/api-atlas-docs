
import React from 'react';
import { motion } from 'framer-motion';
import './NetErrorCluster.css';

export default function NetErrorCluster() {
  return (
    <motion.div className="net-error-cluster" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <h3>🌐 Network Error Map</h3>
      <div className="cluster-grid">
        <div className="node">❌ 500 Internal Server</div>
        <div className="node">🚫 502 Bad Gateway</div>
        <div className="node">📉 503 Service Unavailable</div>
        <div className="node">🕒 504 Gateway Timeout</div>
        <div className="node">🧷 TLS Handshake Failure</div>
        <div className="node">🌍 DNS Not Resolved</div>
        <div className="node">🔒 SSL Expired</div>
        <div className="node">🧩 Proxy Misrouting</div>
      </div>
    </motion.div>
  );
}
