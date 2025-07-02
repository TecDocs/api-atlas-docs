// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'API Atlas Docs',
  tagline: 'Interactive API reference, deployment, and onboarding site',
  favicon: 'img/tecdocs-favicon.ico',

  // Production site config for GitHub Pages
  url: 'https://tecdocs.github.io', // GitHub Pages domain
  baseUrl: '/api-atlas-docs/', // GitHub repo name

  // GitHub Pages deployment settings
  organizationName: 'TecDocs', // GitHub user/org
  projectName: 'api-atlas-docs', // GitHub repo name
  deploymentBranch: 'gh-pages', // Where site gets deployed
  trailingSlash: false, // No trailing slashes in URLs

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/TecDocs/api-atlas-docs/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Joshua Schoen',
      logo: {
        alt: 'Joshua Logo',
        src: 'img/transparent-icon.svg',
      },
      items: [
        {
          href: 'https://joshua-schoen.com',
          position: 'right',
          className: 'custom-icon portfolio-icon',
          'aria-label': 'Portfolio',
        },
        {
          href: 'https://github.com/TecDocs',
          position: 'right',
          className: 'custom-icon github-icon',
          'aria-label': 'GitHub',
        },
        {
          href: 'https://www.linkedin.com/in/joshua-schoen-77b742252/',
          position: 'right',
          className: 'custom-icon linkedin-icon',
          'aria-label': 'LinkedIn',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© 2025 Joshua Schoen`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  plugins: [],

  // Enable Docusaurus v4 compatibility
  future: {
    v4: true,
  },
};

export default config;
