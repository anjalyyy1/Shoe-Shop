require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

module.exports = {
  siteMetadata: {
    title: `Coffee Shop`,
    description: `Lets grab a cup of coffee...`,
    author: `Anjali Gupta`
  },
  plugins: [
    `gatsby-plugin-react-helmet`, // plugin to be used
    {
      resolve: `gatsby-source-filesystem`, // to use the current file system for files
      options: {
        name: `images`,
        path: `${__dirname}/src/images` // current folder
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`, // some options are to be attached therefore use object, resolve contains the name of the object
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.svg` // This path is relative to the root of the site.
      }
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    }
  ]
};
