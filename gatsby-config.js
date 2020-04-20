const feed = require('./src/@lekoarts/gatsby-theme-minimal-blog/utils/newsletterFeed')

module.exports = {
  siteMetadata: {
    author: '@tonkla',
    siteDescription: `Stradeji: @tonkla's writings`,
    siteHeadline: '',
    siteImage: '',
    siteLanguage: 'th',
    siteTitle: 'Stradeji',
    siteTitleAlt: 'Stradeji',
    siteUrl: 'https://www.stradeji.com',
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/tonkla`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/tonkla`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-20960086-1',
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: { ...feed(`Stradeji: @tonkla's writings`) },
    },
    `gatsby-plugin-sitemap`,
  ],
}
