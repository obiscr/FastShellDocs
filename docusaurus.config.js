// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'FastShell',
  tagline: 'Fast Shell supports the management of custom scripts, which can quickly execute shell commands. The supported commands depend on the shell environment used by the current IDE. Fast Shell has a fairly high degree of freedom. All instructions are completely defined by the user.',
  url: 'https://github.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'obiscr', // Usually your GitHub org/user name.
  projectName: 'FastShell', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  scripts: [
    {
      src: 'https://platform-api.sharethis.com/js/sharethis.js#property=625d90eb96ae3f0019074bb5&product=sop',
      async: true,
    },
  ],
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['zh-CN', 'en'],
  //   localeConfigs: {
  //     en: {
  //       htmlLang: 'en-US',
  //     },
  //     zh: {
  //       htmlLang: 'ZH-CN',
  //     },
  //   },
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/obiscr/FastShellDocs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/obiscr/FastShellDocs/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
            '<b>🎉🎉🎉 <a href="https://plugins.jetbrains.com/plugin/18971-fastshell">FastShell</a> has now been released, <a href="https://plugins.jetbrains.com/plugin/18971-fastshell">Show me</a>!</b> 🎉🎉🎉',
        backgroundColor: '#499C54',
        textColor: '#fff',
        isCloseable: false,
      },
      navbar: {
        title: 'FastShell',
        logo: {
          alt: 'FastShell Logo',
          src: 'img/fast_shell.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
          {
            href: 'https://www.obiscr.com',
            position: 'right',
            className: 'header-obiscr-link',
            'aria-label': 'Observer & Creator',
          },
          {
            href: 'https://github.com/obiscr/FastShell',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {
            href: 'https://plugins.jetbrains.com/plugin/18971-fastshell',
            position: 'right',
            className: 'header-jetbrains-link',
            'aria-label': 'JetBrains Plugin Marketplace',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/observercreator/shared_invite/zt-14g3dnzkx-FGJM_WgY~vj0bJINTHQSAA',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © 2016 - ${new Date().getFullYear()} Observer & Creator. Built with <a href="https://docusaurus.io/">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
