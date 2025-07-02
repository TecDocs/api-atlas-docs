import React from 'react';
import { motion } from 'framer-motion';
import HoverExplain from '@site/src/components/HoverExplain';

const steps = [
  {
    icon: '🗂️',
    title: 'Open Postman Collection',
    description: 'Locate your Postman workspace and open the "Fake-Users-API" collection. This is the folder that holds all your endpoints (GET, POST, PUT, DELETE) mimicking what you previously defined in your OpenAPI YAML paths.',
  },
  {
    icon: '🌍',
    title: 'Switch to Development Environment',
    description: 'Click the top-right dropdown in Postman and choose the "Development" environment. This injects variables like {{base_url}} and {{api_key}} into your requests, just like the servers and securitySchemes defined earlier.',
  },
  {
    icon: '📬',
    title: 'Send GET /users Request',
    description: 'Expand the GET /users request inside your collection. Click "Send" to dispatch it. Postman will automatically fill in your base URL, attach authorization headers, and return a formatted JSON response for inspection.',
  },
  {
    icon: '🧪',
    title: 'Inspect Test Scripts and Pre-Request',
    description: 'Switch to the "Tests" tab of your request. View the JavaScript assertions that check for 200 OK, valid response structure, or header values. If included, pre-request scripts run beforehand to set tokens or dynamic timestamps.',
  },
  {
    icon: '🚀',
    title: 'Test POST /users Request',
    description: 'Move to the POST /users request. Enter a sample JSON body and hit "Send". This tests schema compliance, body validation, and response formatting—linked to our OpenAPI component definitions.',
  },
  {
    icon: '🧰',
    title: 'Simulate Workflow with Collection Runner',
    description: 'Open Postman’s Collection Runner. Select the "Fake-Users-API" collection, choose the "Development" environment, and execute multiple requests in sequence. This helps simulate full user flows like login → fetch → update.',
  },
  {
    icon: '🖥️',
    title: 'Export and Run via Newman CLI',
    description: 'Go to File → Export Collection. Use Newman to run it from your terminal with `newman run Fake-Users-API.postman_collection.json`. This bridges your API tests into CI pipelines—covered in the next Integration section.',
  },
];

export default function PostmanWorkflowTimeline() {
  return (
    <div style={{ marginTop: '2rem' }}>
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
          style={{
            background: 'var(--ifm-background-surface-color)',
            border: '1px solid var(--ifm-color-emphasis-300)',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '1rem',
            boxShadow: '0 0 10px var(--ifm-color-emphasis-300)',
          }}
        >
          <h3 style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>{step.icon}</span>
            {step.title}
          </h3>
          <p>{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
