require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `🍕 thais.pizza`,
    siteTitleAlt: `Thaís Watanabe ✨ Full-Stack Developer`,
    siteUrl: `https://thais.pizza`,
    siteDescription: `Hi, I'm Thais.`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
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
            name: `twitter`,
            url: `https://twitter.com/watanabethata`,
          },
          {
            name: `instagram`,
            url: `https://www.instagram.com/watanabethais/`,
          },
          {
            name: `github`,
            url: `https://github.com/watanabethais`,
          },
          {
            name: `linkedin`,
            url: `https://www.linkedin.com/in/watanabethais/`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-172851240-1`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `thais.pizza`,
        short_name: `thais.pizza`,
        description: `Hi, I'm Thais.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {        
        langKeyDefault: 'en',
        useLangKeyLayout: false,
      }
    },
    `gatsby-plugin-offline`,
  ].filter(Boolean),
}
