// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Arka Docs',
  tagline: 'Documentación técnica — Plataforma E-Commerce B2B',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  markdown: {
    mermaid: true,
    format: 'md',
  },
  themes: ['@docusaurus/theme-mermaid'],

  // Set the production url of your site here
  url: 'https://saisho137.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/arka-docs/',

  // GitHub pages deployment config.
  organizationName: 'Saisho137',
  projectName: 'arka-docs',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Arka Docs',
        logo: {
          alt: 'Arka Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Documentación',
          },
          {
            href: 'https://github.com/AceleraTI',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentación',
            items: [
              {
                label: 'Contexto de Negocio',
                to: '/docs/contexto-negocio',
              },
              {
                label: 'Arquitectura',
                to: '/docs/arquitectura',
              },
              {
                label: 'Microservicios',
                to: '/docs/microservicios',
              },
            ],
          },
          {
            title: 'Stack',
            items: [
              {
                label: 'Java 21',
                href: 'https://openjdk.org/projects/jdk/21/',
              },
              {
                label: 'Spring Boot',
                href: 'https://spring.io/projects/spring-boot',
              },
              {
                label: 'Apache Kafka',
                href: 'https://kafka.apache.org/',
              },
            ],
          },
          {
            title: 'Herramientas',
            items: [
              {
                label: 'Bancolombia Scaffold',
                href: 'https://github.com/bancolombia/scaffold-clean-architecture',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Arka — AceleraTI. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'groovy', 'protobuf', 'bash', 'json', 'yaml', 'sql', 'docker'],
      },
    }),
};

export default config;
