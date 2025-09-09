import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'XT API',
  tagline: 'Comprehensive API solutions for all your trading needs',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docusaurus.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  scripts: [
    {
      src: '/js/product-dropdown.js',
      async: true,
    },
  ],

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'XT API', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'detect',
    mermaid: true,
    mdx1Compat: {
      // comments: false,
    },
    remarkRehypeOptions: {
      footnoteLabel: 'Footnotes',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    path: 'i18n',
    localeConfigs: {
      'en': {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en',
        calendar: 'gregory',
        path: 'en',
      },
      'zh-Hans': {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-Hans',
        calendar: 'gregory',
        path: 'zh-Hans',
      },
    },
  },

  // Ignore broken links during build
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',

  themes: [
    ['@docusaurus/theme-search-algolia', {id: 'search-algolia'}],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    algolia: {
      appId: 'GTNEYZMA9V',
      apiKey: '94dde6ff0f8c11017908f21fab41a06b',
      indexName: 'xt_api_docs',
      contextualSearch: false,
      searchParameters: {
        facetFilters: [], // 清空默认的过滤器
      },
      searchPagePath: 'search',
    },
    navbar: {
      hideOnScroll: true,
      title: '',
      logo: {
        alt: 'XT API Logo',
        src: 'img/xtlogo.png',
        srcDark: 'img/xtlogo.png',
        width: 85,
        height: 36,
      },
      items: [
        {
          type: 'dropdown',
          position: 'left',
          label: 'Product',
          items: [
            {
              type: 'html',
              value:
                '<div style="padding: 0; width: 100%; background: white;   min-width:90vw; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);"><div style="display: flex; min-height: 480px;"><div style="width: 200px; background: #f9fafb; border-right: 1px solid #e5e7eb; padding: 0;"><div style="padding: 20px 0;"><div id="all-products-nav" style="padding: 12px 20px; background: #f3f4f6; cursor: pointer; font-weight: 600; font-size: 16px; color: #1f2937;" onclick="showCategory(\'AllProducts\')">All Products</div><div style="padding: 12px 20px; cursor: pointer; transition: background-color 0.2s; color: #6b7280; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.color=\'#1f2937\';" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#6b7280\';" onclick="showCategory(\'Index\')" data-category="Index">Index</div><div style="padding: 12px 20px; cursor: pointer; transition: background-color 0.2s; color: #6b7280; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.color=\'#1f2937\';" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#6b7280\';" onclick="showCategory(\'spot\')" data-category="spot">Spot Trading</div><div style="padding: 12px 20px; cursor: pointer; transition: background-color 0.2s; color: #6b7280; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.color=\'#1f2937\';" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#6b7280\';" onclick="showCategory(\'futures\')" data-category="futures">Futures Trading</div><div style="padding: 12px 20px; cursor: pointer; transition: background-color 0.2s; color: #6b7280; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.color=\'#1f2937\';" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#6b7280\';" onclick="showCategory(\'marginSpot\')" data-category="marginSpot">Margin Trading</div><div style="padding: 12px 20px; cursor: pointer; transition: background-color 0.2s; color: #6b7280; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.color=\'#1f2937\';" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#6b7280\';" onclick="showCategory(\'copyTrading\')" data-category="copyTrading">Copy Trading</div><div style="padding: 12px 20px; cursor: pointer; transition: background-color 0.2s; color: #6b7280; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.color=\'#1f2937\';" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#6b7280\';" onclick="showCategory(\'futuresCopy\')" data-category="futuresCopy">Futures Copy</div><div style="padding: 12px 20px; cursor: pointer; transition: background-color 0.2s; color: #6b7280; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.color=\'#1f2937\';" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#6b7280\';" onclick="showCategory(\'tradingThirdParty\')" data-category="tradingThirdParty">Trading Third Party</div><div style="padding: 12px 20px; cursor: pointer; transition: background-color 0.2s; color: #6b7280; font-size: 14px;" onmouseover="this.style.backgroundColor=\'#f3f4f6\'; this.style.color=\'#1f2937\';" onmouseout="this.style.backgroundColor=\'transparent\'; this.style.color=\'#6b7280\';" onclick="showCategory(\'userCenter\')" data-category="userCenter">User Center</div></div></div><div style="flex: 1; padding: 32px; background: white;"><div style="margin-bottom: 24px;"><h2 id="categoryTitle" style="margin: 0 0 8px 0; font-size: 24px; font-weight: 600; color: #1f2937;">All Products</h2><p id="categoryDesc" style="margin: 0; color: #6b7280; font-size: 14px;">Comprehensive API solutions for all your trading needs</p></div><div id="productsGrid" style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 24px;"><a id="index-content-link" href="/docs/index_overview/overview" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Index</div><div style="font-size: 12px; color: #6b7280;">Index APIs</div></a><a href="/docs/index_overview/index_overview_resource" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">API Resources and Support</div><div style="font-size: 12px; color: #6b7280;">API Resources and Support</div></a><a href="/docs/spot/AccessDescription/RestApi" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Spot Trading</div><div style="font-size: 12px; color: #6b7280;">Spot Trading APIs</div></a><a href="/docs/futures/AccessDescription/apiDemo" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Futures Trading</div><div style="font-size: 12px; color: #6b7280;">Futures Trading APIs</div></a><a href="/docs/margin-spot/AccessDescription/RestApi" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Margin Trading</div><div style="font-size: 12px; color: #6b7280;">Margin Trading APIs</div></a><a href="/docs/copy-trading/Access Description/RestApi" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Copy Trading</div><div style="font-size: 12px; color: #6b7280;">Copy Trading API</div></a><a href="/docs/futures-copy/AccessDescription/RestApi" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Futures Copy</div><div style="font-size: 12px; color: #6b7280;">Futures Copy API</div></a><a href="/docs/trading-third-party/AccessDescription/RestApi" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Trading Third Party</div><div style="font-size: 12px; color: #6b7280;">Trading Third Party API</div></a><a href="/docs/user-center/AccessDescription/RestApi" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">User Center</div><div style="font-size: 12px; color: #6b7280;">User Center API</div></a><a href="/docs/spot/Balance/GetCurrencyInfo" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Balance</div><div style="font-size: 12px; color: #6b7280;">Balance APIs</div></a><a href="/docs/spot/Deposit&Withdrawal/GetSupportedCurrencies" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Deposit&Withdrawal</div><div style="font-size: 12px; color: #6b7280;">Deposit&Withdrawal APIs</div></a><a href="/docs/spot/Market/GetServerTime" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Market</div><div style="font-size: 12px; color: #6b7280;">Market APIs</div></a><a href="/docs/spot/Order/PlaceOrder" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Order</div><div style="font-size: 12px; color: #6b7280;">Order APIs</div></a><a href="/docs/spot/Trade/GetTradeHistory" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Trade</div><div style="font-size: 12px; color: #6b7280;">Trade APIs</div></a><a href="/docs/spot/Transfer/InternalTransfer" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Transfer</div><div style="font-size: 12px; color: #6b7280;">Transfer APIs</div></a><a href="/docs/spot/WebSocket_Private/RequestMessageFormat" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">WebSocket Private</div><div style="font-size: 12px; color: #6b7280;">WebSocket Private APIs</div></a><a href="/docs/spot/WebSocket_Public/subscribeParam" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">WebSocket Public</div><div style="font-size: 12px; color: #6b7280;">WebSocket Public APIs</div></a><a href="/docs/futures/WEBSOCKET(V2)/Request message format" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Futures WebSocket</div><div style="font-size: 12px; color: #6b7280;">Futures WebSocket APIs</div></a><a href="/docs/margin-spot/Balance/GetMarginAccount" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Margin Balance</div><div style="font-size: 12px; color: #6b7280;">Margin Balance APIs</div></a><a href="/docs/copy-trading/Account/GetAccountInfo" style="text-decoration: none; color: inherit; transition: opacity 0.2s;" onmouseover="this.style.opacity=\'0.7\';" onmouseout="this.style.opacity=\'1\';"><div style="font-weight: 600; margin-bottom: 4px; font-size: 14px; color: #1f2937;">Copy Account</div><div style="font-size: 12px; color: #6b7280;">Copy Account APIs</div></a></div></div></div></div>',
            },
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {
              href: 'https://github.com/facebook/docusaurus/issues/3526',
              label: 'Help Us Translate',
            },
          ],
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
