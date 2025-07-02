
import React from 'react';
import './AksArchitectureDiagram.css';

export default function AksArchitectureDiagram() {
  return (
    <div className="aks-architecture-wrapper">
      <div className="aks-layer control-plane">
        <span>Azure-Managed Control Plane</span>
        <ul>
          <li>API Server</li>
          <li>Scheduler</li>
          <li>Etcd</li>
          <li>Azure RBAC</li>
        </ul>
      </div>

      <div className="aks-layer node-pool">
        <span>User Node Pool</span>
        <ul>
          <li>Kubelet</li>
          <li>Container Runtime</li>
          <li>Pods/Deployments</li>
        </ul>
      </div>

      <div className="aks-layer networking">
        <span>Networking Layer</span>
        <ul>
          <li>Ingress Controller</li>
          <li>Load Balancer</li>
          <li>DNS Routing</li>
        </ul>
      </div>

      <div className="aks-layer application">
        <span>API Application Layer</span>
        <ul>
          <li>REST APIs</li>
          <li>OpenAPI Specs</li>
          <li>Autoscaling</li>
        </ul>
      </div>
    </div>
  );
}
