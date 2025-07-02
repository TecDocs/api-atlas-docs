const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: '🎓 Welcome & Onboarding',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: '🏠 Return To API Atlas Home Page',
          href: '/',
        },
        'welcome/how-to-use',
        'welcome/quickstart',
      ],
    },
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: true,
      items: [
        'getting-started/requirements',
        'getting-started/demo-api',
        'getting-started/test-your-first-endpoint',
      ],
    },
    {
      type: 'category',
      label: '📡 API Reference',
      collapsed: true,
      items: [
        'api-reference/understanding-status-codes',
        'api-reference/authentication-and-authorization',
        'api-reference/endpoints-overview',
        'api-reference/api-token',
        'api-reference/rate-limits',
        'api-reference/use-cases', // moved to end for smoother transition
      ],
    },
    {
      type: 'category',
      label: '📦 OpenAPI & Integration',
      collapsed: true,
      items: [
        'integration/openapi-yaml-explained',     // core spec structure
        'integration/openapi-spec',               // blueprint concepts
        'integration/swagger-ui',                 // interactive docs
        'integration/redoc',                      // visual rendering
        'integration/postman-collection-And-WorkFlows',         // basic import
        'integration/integration-ci-pipelines',   // validation, Redoc CLI (to be added)
        'integration/spec-design-philosophy',     // optional strategy page
      ],
    },
    {
      type: 'category',
      label: '☁️ Deployment & DevOps',
      collapsed: true,
      items: [
     'devops/devops-aks-deployment',
        'devops/kubernetes-config',
        'devops/kubernetes-patterns',
        'devops/ci-cd-setup',
        'devops/scaling-apis',
      ],
    },
    
    
   {
  type: 'category',
  label: '🛠️ Troubleshooting & FAQ',
  collapsed: true,
  items: [
    'faq/common-api-errors',
    'faq/debugging-json-and-yaml',
    'faq/network-errors-and-api-failures',
  ],
},

    {
      type: 'category',
      label: '📘 About API Atlas',
      collapsed: true,
      items: [
        'about/project-purpose',
      ],
    },
  ],
};

export default sidebars;
