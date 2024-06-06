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
    legalName: 'London LGBTQ+ Community Pride CIC',
    title: 'Pride in London',
    description:
      'The UK’s biggest, most diverse Pride. A home for every part of London’s LGBTQ+ community',
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
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.GATSBY_GTM_ID,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/layout/Layout.js'),
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        ...(process.env.CONTENTFUL_HOST && {
          host: process.env.CONTENTFUL_HOST,
        }),
        ...(process.env.CONTENTFUL_ENV && {
          environment: process.env.CONTENTFUL_ENV,
        }),
        // we need this to ensure full data resolution on nested custom types
        // https://github.com/gatsbyjs/gatsby/issues/10592#issuecomment-542919638
        forceFullSync: env === 'development',
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
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/blog/', '/blog/*'],
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-gatsby-cloud`,
      options: {
        allPageHeaders: [
          'X-Frame-Options: SAMEORIGIN',
          'X-XSS-Protection: 1; mode=block',
          'X-Content-Type-Options: nosniff',
          'Strict-Transport-Security: max-age=31536000; includeSubdomains',
          'Referrer-Policy: strict-origin',
        ],
      },
    },
  ],
}
