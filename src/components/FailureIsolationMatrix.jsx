
import React from 'react';
import { motion } from 'framer-motion';
import './FailureIsolationMatrix.css';

export default function FailureIsolationMatrix() {
  return (
    <motion.div className="failure-matrix" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
      <h3>🧪 Failure Isolation Matrix</h3>
      <table>
        <thead>
          <tr>
            <th>Layer</th><th>Failure Type</th><th>Tool</th><th>Fix Strategy</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Client</td><td>400 / 401</td><td>Postman / Linter</td><td>Fix syntax / tokens</td></tr>
          <tr><td>Spec</td><td>Schema Mismatch</td><td>Swagger / Redoc</td><td>Validate against contract</td></tr>
          <tr><td>Infra</td><td>500 / 503</td><td>cURL / logs</td><td>Retry logic / investigate backend</td></tr>
          <tr><td>Network</td><td>504 / DNS Fail</td><td>Ping / Traceroute</td><td>Check routing / DNS</td></tr>
          <tr><td>Security</td><td>TLS / SSL</td><td>OpenSSL / Certbot</td><td>Renew certificate</td></tr>
        </tbody>
      </table>
    </motion.div>
  );
}
