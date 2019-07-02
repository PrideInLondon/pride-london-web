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
    name: 'Pride in London',
    legalName: 'London LGBT+ Community Pride CIC',
    title: 'Pride in London',
    description:
      "This June and July, enjoy events across the city culminating in London's iconic Pride parade and free Trafalgar Square performances on July 6th 2019.",
    appleAppId: '1250496471',
    phone: '+448443445428',
    email: 'info@prideinlondon.org',
    streetAddress: 'PO Box 71920',
    addressLocality: 'London',
    addressRegion: 'London',
    postalCode: 'NW2 9QN',
    addressCountry: 'UK',
    facebook: 'https://www.facebook.com/pg/LondonLGBTPride',
    twitter: 'https://twitter.com/PrideInLondon',
    instagram: 'http://instagram.com/prideinlondon',
    youtube: 'https://www.youtube.com/user/LondonLGBTPride',
    linkedin: 'https://www.linkedin.com/company/prideinlondon/',
    snapchat: 'http://www.snapchat.com/add/LondonLGBTPride',
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
            policy: [{ userAgent: '*' }],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/theme/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-offline',
  ],
}
