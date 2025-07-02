import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HeroSection';
import FeatureGrid from '@site/src/components/FeatureGrid';
import ProblemSection from '@site/src/components/ProblemSection';
import IntroCalloutSection from '@site/src/components/IntroCalloutSection';




export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="API Atlas Docs"
      description="Interactive API docs, Swagger, Azure AKS, and Kubernetes tutorials"
    >
      <HeroSection />
      <FeatureGrid />
      <ProblemSection />  
      <IntroCalloutSection />
    </Layout>
  );
}
