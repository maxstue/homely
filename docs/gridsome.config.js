// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Smarthub',
  siteUrl: 'https://SmartHub-Docs.github.io',
  pathPrefix: '/SmartHub-Docs',
  icon: {
    favicon: './src/assets/default_64.png',
    touchicon: './src/assets/default_64.png'
  },
  settings: {
    URL_GITHUB: 'https://github.com/masxstue/homely',
    github: true,
    nav: {
      links: [
        { path: '/docs/', title: 'Docs' },
        { path: '/plugins/', title: 'Plugins'}
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
              '/docs/installation/',
              '/docs/concepts/',
            ]
          },
          {
            title: 'Configuration',
            items: [
              '/docs/settings/',
              '/docs/deploying/',
            ]
          },
          {
            title: 'Guides',
            items: [
              '/docs/guide/'
            ]
          },
          {
            title: 'Api',
            items: [
              '/docs/smarthub-cli/',
              '/docs/endpoints/',
            ]
          },
          {
            title: 'Contribution',
            items: [
                '/docs/how-to-contribute/',
                '/docs/how-to-create-a-plugin/',
                '/docs/code-of-conduct/'
            ]
          },
          {
            title: 'Help',
            items: [
                '/docs/prerequisites/',
                '/docs/how-to-upgrade/',
                '/docs/troubleshooting/',
                '/docs/devtools/',
                '/docs/faq/'
            ]
          }
        ]
      },
      {
        name: 'plugins',
        sections: [
          {
            title: 'Available Plugins',
            items: [
              '/plugins/',
              '/plugins/mock/',
              '/plugins/shelly/',
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
