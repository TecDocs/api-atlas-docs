import React from 'react';

export default function CompanyAksUsageMatrix() {
  const companies = [
    {
      name: 'Microsoft',
      use: `Microsoft uses Azure Kubernetes Service (AKS) to power its internal engineering platforms and public APIs, including Azure DevOps and GitHub integration services. Their infrastructure strategy incorporates GitOps workflows using Azure Repos, Helm, and Bicep templates to manage API microservices at scale. By combining AKS with Azure Monitor, Microsoft enables detailed observability, cost tracking, and zero-downtime deployments for enterprise clients. This dogfooding of AKS across multiple teams allows Microsoft to validate new Kubernetes features while delivering highly available developer tools.`,
    },
    {
      name: 'Adobe',
      use: `Adobe uses AKS to operate containerized backend services that support Creative Cloud, Adobe Document Services, and API-based rendering engines. Their approach includes running AKS across multiple regions with service mesh capabilities like Istio to ensure global API availability and strong service discovery. Adobe's telemetry is deeply integrated with Azure Log Analytics and Defender for Containers, enabling advanced threat monitoring and continuous compliance. AKS lets them dynamically scale processing APIs for media, forms, and e-signature pipelines across cloud-native environments.`,
    },
    {
      name: 'Cisco',
      use: `Cisco integrates AKS into its hybrid cloud deployments to run edge-aware APIs across on-prem and public Azure regions. Their typical setup includes AKS clusters deployed with Terraform and linked into SecureX for real-time observability, incident correlation, and network policy enforcement. These Kubernetes clusters run Cisco’s microservices for infrastructure telemetry, device provisioning APIs, and operational dashboards. By using AKS, Cisco automates updates to services via CI/CD pipelines while adhering to strict compliance and availability standards for enterprise customers.`,
    },
    {
      name: 'Starbucks',
      use: `Starbucks relies on AKS to operate APIs behind its global mobile ordering, loyalty program, and in-store point-of-sale systems. Helm charts are used to configure and deploy these APIs consistently across geographies. AKS enables Starbucks to manage rolling updates for core services—like payment processing, customer data retrieval, and order queuing—while maintaining global uptime. With Azure DevOps pipelines, they validate new deployments via Helm linting, secrets management, and traffic mirroring, ensuring consistent delivery of services to millions of users daily.`,
    },
  ];

 

  return (
    <div className="aks-usage-matrix-wrapper">
      <div className="aks-company-matrix">
        {companies.map((company, index) => (
          <div key={index} className="aks-matrix-card">
            <div className="aks-matrix-info">
              <h4>{company.name}</h4>
              <p>{company.use}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}
