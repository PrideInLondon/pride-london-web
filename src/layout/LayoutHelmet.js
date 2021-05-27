import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import favicon from './favicons/favicon.ico'
import favicon16 from './favicons/favicon-16x16.png'
import favicon32 from './favicons/favicon-32x32.png'
import favicon96 from './favicons/favicon-96x96.png'
import favicon128 from './favicons/favicon-128x128.png'
import favicon196 from './favicons/favicon-196x196.png'
import apple57 from './favicons/apple-touch-icon-57x57.png'
import apple60 from './favicons/apple-touch-icon-60x60.png'
import apple72 from './favicons/apple-touch-icon-72x72.png'
import apple76 from './favicons/apple-touch-icon-76x76.png'
import apple114 from './favicons/apple-touch-icon-114x114.png'
import apple152 from './favicons/apple-touch-icon-152x152.png'
import mstile70 from './favicons/mstile-70x70.png'
import mstile144 from './favicons/mstile-144x144.png'
import mstile150 from './favicons/mstile-150x150.png'
import mstile310 from './favicons/mstile-310x310.png'
import mstile310150 from './favicons/mstile-310x150.png'

const LayoutHelmet = ({
  pathname,
  name,
  legalName,
  title,
  siteUrl,
  description,
  phone,
  email,
  streetAddress,
  addressLocality,
  addressRegion,
  postalCode,
  addressCountry,
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  snapchat,
}) => {
  const metaUrl = pathname === '/' ? siteUrl : siteUrl + pathname
  const metaImgUrl = `${siteUrl}/logo.png`
  return (
    <Helmet
      meta={[
        // Schema meta tags for http://schema.org/WebPage
        {
          itemprop: 'name',
          content: title,
        },
        {
          itemprop: 'description',
          content: description,
        },
        {
          itemprop: 'url',
          content: siteUrl,
        },
        {
          itemprop: 'thumbnailUrl',
          content: metaImgUrl,
        },
        {
          itemprop: 'image',
          content: metaImgUrl,
        },

        // OpenGraph Meta Tags
        {
          property: 'og:site_name',
          content: title,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: siteUrl,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: metaImgUrl,
        },
        {
          property: 'og:image:secure_url',
          content: metaImgUrl,
        },
        {
          property: 'og:image:width',
          content: '1000',
        },
        {
          property: 'og:image:height',
          content: '562',
        },

        // Facebook Meta Tags
        {
          property: 'fb:app_id',
          content: process.env.GATSBY_FACEBOOK_APP_ID,
        },

        // Twitter Meta Tags
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:image',
          content: metaImgUrl,
        },
        {
          name: 'twitter:url',
          content: siteUrl,
        },

        // MS Application
        {
          name: 'application-name',
          content: title,
        },
        {
          name: 'msapplication-TileColor',
          content: '#FFFFFF',
        },
        {
          name: 'msapplication-TileImage',
          content: mstile144,
        },
        {
          name: 'msapplication-square70x70logo',
          content: mstile70,
        },
        {
          name: 'msapplication-square150x150logo',
          content: mstile150,
        },
        {
          name: 'msapplication-wide310x150logo',
          content: mstile310150,
        },
        {
          name: 'msapplication-square310x310logo',
          content: mstile310,
        },

        // Native Apps Prompt
        {
          name: 'theme-color',
          content: '#343692',
        },
        // Usercentrics privacy proxy
        ...(process.env.NODE_ENV === 'production'
          ? [
              {
                name: 'data-privacy-proxy-server',
                content: 'https://privacy-proxy-server.usercentrics.eu',
                'data-privacy-proxy-server':
                  'https://privacy-proxy-server.usercentrics.eu',
              },
            ]
          : []),
      ]}
      link={[
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: favicon,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: favicon16,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: favicon32,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '96x96',
          href: favicon96,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '128x128',
          href: favicon128,
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '196x196',
          href: favicon196,
        },
        {
          rel: 'image_src',
          content: metaImgUrl,
        },
        {
          rel: 'canonical',
          href: metaUrl,
        },
        {
          rel: 'apple-touch-icon-precomposed',
          sizes: '57x57',
          href: apple57,
        },
        {
          rel: 'apple-touch-icon-precomposed',
          sizes: '60x60',
          href: apple60,
        },
        {
          rel: 'apple-touch-icon-precomposed',
          sizes: '72x72',
          href: apple72,
        },
        {
          rel: 'apple-touch-icon-precomposed',
          sizes: '76x76',
          href: apple76,
        },
        {
          rel: 'apple-touch-icon-precomposed',
          sizes: '114x114',
          href: apple114,
        },
        {
          rel: 'apple-touch-icon-precomposed',
          sizes: '152x152',
          href: apple152,
        },
      ]}
      htmlAttributes={{
        lang: 'en-GB',
        itemscope: true,
        itemtype: 'http://schema.org/WebPage',
      }}
      script={[
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.js',
        },
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: name,
            legalName,
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: metaImgUrl,
              // recommended ratio 1.91:1
              height: 502,
              width: 960,
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress,
              addressLocality,
              addressRegion,
              postalCode,
              addressCountry,
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer support',
              telephone: phone,
              email: email,
            },
            sameAs: [facebook, twitter, instagram, youtube, linkedin, snapchat],
          }),
        },
        // Usercentrics cookie consent management
        ...(process.env.NODE_ENV === 'production' &&
        process.env.GATSBY_USERCENTRICS_ID
          ? [
              {
                id: 'usercentrics-cmp',
                src: 'https://app.usercentrics.eu/browser-ui/latest/bundle.js',
                'data-settings-id': process.env.GATSBY_USERCENTRICS_ID,
                defer: true,
              },
              {
                type: 'application/javascript',
                src: 'https://privacy-proxy.usercentrics.eu/latest/uc-block.bundle.js',
              },
            ]
          : []),
      ]}
    ></Helmet>
  )
}

LayoutHelmet.propTypes = {
  pathname: PropTypes.string,
  name: PropTypes.string,
  legalName: PropTypes.string,
  title: PropTypes.string,
  siteUrl: PropTypes.string,
  description: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  streetAddress: PropTypes.string,
  addressLocality: PropTypes.string,
  addressRegion: PropTypes.string,
  postalCode: PropTypes.string,
  addressCountry: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  youtube: PropTypes.string,
  linkedin: PropTypes.string,
  snapchat: PropTypes.string,
}

LayoutHelmet.defaultProps = {
  pathname: '',
  name: '',
  legalName: '',
  title: '',
  siteUrl: '',
  description: '',
  phone: '',
  email: '',
  streetAddress: '',
  addressLocality: '',
  addressRegion: '',
  postalCode: '',
  addressCountry: '',
  facebook: '',
  twitter: '',
  instagram: '',
  youtube: '',
  linkedin: '',
  snapchat: '',
}

export default LayoutHelmet
