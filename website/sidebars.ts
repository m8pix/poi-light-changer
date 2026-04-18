import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    'intro',
    'install',
    'getting-started',
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/controls-overview',
        'reference/license',
        'reference/github-pages',
      ],
    },
  ],
};

export default sidebars;
