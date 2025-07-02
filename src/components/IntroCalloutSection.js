import React from 'react';
import { motion } from 'framer-motion';
import Link from '@docusaurus/Link';

export default function IntroCalloutSection() {
  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>
          Why API Atlas Is the Future of Developer Docs
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginTop: '1.5rem' }}>
          In most teams, API documentation lives in too many places: Swagger files in one repo,
          Postman collections in another, and deployment guides lost in Confluence or Google Docs.
          This fragmentation slows down onboarding, increases support tickets, and adds friction to
          every dev handoff.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          API Atlas changes that by bringing everything into a unified, interactive experience. You
          don’t just read docs—you interact with them in real time. Try endpoints. Visualize request
          flows. Follow deployment steps to AKS or Kubernetes with confidence—all in one place.
        </p>

        <img
          src="/img/live.png"
          alt="Live API Testing Flow"
          style={{ display: 'block', margin: '2rem auto', maxWidth: '700px', borderRadius: '8px' }}
        />
        <p style={{ textAlign: 'center', fontSize: '0.95rem', fontStyle: 'italic' }}>
          Figure 1. Live API request and response flow using Swagger UI.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginTop: '2rem' }}>
          Built with OpenAPI, Swagger UI, and integrated with Postman and AKS deployments,
          API Atlas is a developer’s portal—custom-built for clarity, action, and scale.

          
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginTop: '2rem' }}>
          We also have custom error logging, so you can see real live examples of the common errors when using their APIs.
          Below is an image of the a common error, which is status code 500. This is a common one you may see on websites you use every day like Youtube or Google.com.

          
        </p>

         
        <img
          src="/img/live2.png"
          alt="Developer Debugging Tools"
          style={{ display: 'block', margin: '2rem auto', maxWidth: '700px', borderRadius: '8px' }}
        />
        <p style={{ textAlign: 'center', fontSize: '0.95rem', fontStyle: 'italic' }}>
          Figure 2. Example of integrated developer tooling and error logging inside the portal.
        </p>

        <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
          This isn’t a static wiki. It’s a full-stack documentation system that evolves with your
          product. Use it as your team’s single source of truth—or as an onboarding hub for external
          partners and developers.
        </p>

<p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginTop: '2rem' }}>
  At its core, <strong>API Atlas</strong> is built for velocity. It removes guesswork from every stage of the developer journey—whether you're authenticating for the first time or deploying live services to production. Instead of scattering your attention across multiple platforms, you get one seamless hub to test, learn, and launch with confidence.
</p>

<p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
  From Swagger-based API interaction to AKS deployment guidance, everything is streamlined with visual clarity and built-in logic. No more bouncing between documentation PDFs and Stack Overflow threads—everything you need is contextual, actionable, and tested.
</p>

<p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
  The best part? You’re not just reading theory. With <strong>live Swagger UI testing</strong> and real-world error logs, you're working with the same tools your backend engineers do—without needing to spin up your own server or duplicate Postman collections.
</p>

<p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
  Whether you’re a new developer onboarding for the first time, or a seasoned engineer looking to debug a complex integration, API Atlas meets you where you are. It’s fast, intuitive, and robust enough to handle your most demanding workflows.
</p>

<p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
  And we’re just getting started. The pages ahead walk you through everything from authentication and headers, to paginated endpoints, filtering options, and advanced AKS deployment with real CI/CD integration.
</p>

<p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
  So let’s dive in. 👇 
</p>

      
<div style={{ textAlign: 'center', marginTop: '4rem' }}>
  <Link
    to="/docs/welcome/how-to-use"
    className="next-doc-button"
  >
    <span className="next-label">Next:</span>{' '}
    <span className="next-title"> Start Reading the Docs →</span>
  </Link>
</div>

      </motion.div>
    </section>
  );
}
