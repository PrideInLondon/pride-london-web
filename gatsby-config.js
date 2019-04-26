const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://prideinlondon.org',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === 'production'
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

const env = NODE_ENV || 'development'
require('dotenv').config({ path: `.env.${env}` })

module.exports = {
  siteMetadata: {
    siteUrl,
    name: 'Pride in London Events Listing',
    title:
      'Pride Festival 9 June - 7 July 2018 | Pride in London — Pride in London',
    description:
      "This June and July, enjoy events across the city culminating in London's iconic Pride parade and free Trafalgar Square performances on July 7th 2018.",
    appleAppId: '1250496471',
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            // policy: [{ userAgent: '*' }], // restore when switching over domain name to prideinlondon.org
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
  ],
}
