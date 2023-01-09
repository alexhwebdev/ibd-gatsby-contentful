// require('dotenv').config('./.env');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})


module.exports = {
  siteMetadata: {
    title: `IBD Gatsby Contentful`,
    siteUrl: `https://ibdgatsbycontentfulmain.gatsbyjs.io`,
    description: `IBD Gatsby Contentful`,
    author: `Alex Hong`,
    keywords: `Investor's, Business, Daily`,
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sitemap`,

    // https://blog.nimbleways.com/step-by-step-seo-gatsby/
    `gatsby-plugin-react-helmet`,
    {
      // https://sjmitchblog.gatsbyjs.io/blog/gatsby-plugin-robots-txt/
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://ibdgatsbycontentfulmain.gatsbyjs.io/',
        sitemap: 'https://ibdgatsbycontentfulmain.gatsbyjs.io/sitemap.xml',
        policy: [{ 
          userAgent: '*', 
          allow: '/', 
          disallow: '/search' 
        }]
      },
    },

    // This allows styled-components to work in 'pages/ibd-digital'
    // `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    { // Animation Options : fade, slide-up, slide-down, slide-left, slide-right, zoom-in, zoom-out, flip-up, flip-down, flip-left, flip-right
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
          threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation. 0 - 1.
          once: false, // Defines if animation needs to be launched once
          disable: false, // Flag for disabling animations

          // Advanced Options
          selector: '[data-sal]', // Selector of the elements to be animated
          animateClassName: 'sal-animate', // Class name which triggers animation
          disabledClassName: 'sal-disabled', // Class name which defines the disabled state
          rootMargin: '0% 50%', // Corresponds to root's bounding box margin
          enterEventName: 'sal:in', // Enter event name
          exitEventName: 'sal:out', // Exit event name
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      // options: {
      //   // useResolveUrlLoader: true,

      //   useResolveUrlLoader: {
      //     options: {
      //       sourceMap: true, //default is false
      //     },
      //   },
      // },
    },
    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-subfont`,
      options: {
        silent: true,
        fallbacks: false,
        inlineFonts: true,
      },
    },
  ],
  flags: {
   DEV_SSR: false
  }
};





