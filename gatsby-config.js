const env = process.env.NODE_ENV || 'development'
require('dotenv').config({ path: `.env.${env}` })

module.exports = {
  siteMetadata: {
    title: 'Pride in London Event Listing',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.SPACE_ID}`,
        accessToken: `${process.env.ACCESS_TOKEN}`,
      },
    },
    {
      resolve: 'gatsby-plugin-rollbar',
      options: {
        accessToken: `${process.env.ROLLBAR_ACCESS_TOKEN}`,
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
          environment: 'development',
        },
      },
    },
  ],
}
