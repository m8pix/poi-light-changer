import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PoiLC Docs',
  tagline: 'Poi Light Changer documentation for VRChat avatars using Poiyomi Shader.',
  favicon: 'img/logo.svg',
  future: {
    v4: true,
  },
  url: 'https://m8pix.github.io',
  baseUrl: '/poi-light-changer/',
  organizationName: 'm8pix',
  projectName: 'poi-light-changer',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/m8pix/poi-light-changer/tree/main/website/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: 'keywords',
        content:
          'poilc, poi light changer, poiyomi, vrchat, docs, documentation, vpm, ndmf, modular avatar',
      },
    ],
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    navbar: {
      title: 'PoiLC Docs',
      logo: {
        alt: 'PoiLC Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/install', label: 'Install', position: 'left'},
        {
          to: '/reference/controls-overview',
          label: 'Controls',
          position: 'left',
        },
        {
          href: 'https://m8pix.github.io/poi-light-changer/index.json',
          label: 'VPM',
          position: 'right',
        },
        {
          href: 'https://github.com/m8pix/poi-light-changer',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Intro', to: '/intro'},
            {label: 'Install', to: '/install'},
            {label: 'Getting Started', to: '/getting-started'},
          ],
        },
        {
          title: 'Repository',
          items: [
            {
              label: 'VPM index.json',
              href: 'https://m8pix.github.io/poi-light-changer/index.json',
            },
            {
              label: 'policy.json',
              href: 'https://m8pix.github.io/poi-light-changer/policy.json',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/m8pix/poi-light-changer',
            },
          ],
        },
        {
          title: 'Project',
          items: [
            {label: 'Controls Overview', to: '/reference/controls-overview'},
            {label: 'License', to: '/reference/license'},
            {label: 'GitHub Pages', to: '/reference/github-pages'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} m8pix. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
