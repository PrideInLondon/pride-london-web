import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Provider } from '../components/appContext'
import Nav from '../components/navigation/nav'
import Footer from '../components/footer/footerQuery'
import favicon from '../theme/assets/images/favicons/favicon.ico'
import favicon16 from '../theme/assets/images/favicons/favicon-16x16.png'
import favicon32 from '../theme/assets/images/favicons/favicon-32x32.png'
import favicon96 from '../theme/assets/images/favicons/favicon-96x96.png'
import favicon128 from '../theme/assets/images/favicons/favicon-128x128.png'
import favicon196 from '../theme/assets/images/favicons/favicon-196x196.png'
import apple57 from '../theme/assets/images/favicons/apple-touch-icon-57x57.png'
import apple60 from '../theme/assets/images/favicons/apple-touch-icon-60x60.png'
import apple72 from '../theme/assets/images/favicons/apple-touch-icon-72x72.png'
import apple76 from '../theme/assets/images/favicons/apple-touch-icon-76x76.png'
import apple114 from '../theme/assets/images/favicons/apple-touch-icon-114x114.png'
import apple152 from '../theme/assets/images/favicons/apple-touch-icon-152x152.png'
import mstile70 from '../theme/assets/images/favicons/mstile-70x70.png'
import mstile144 from '../theme/assets/images/favicons/mstile-144x144.png'
import mstile150 from '../theme/assets/images/favicons/mstile-150x150.png'
import mstile310 from '../theme/assets/images/favicons/mstile-310x310.png'
import mstile310150 from '../theme/assets/images/favicons/mstile-310x150.png'
import logo from '../theme/assets/images/logo-pride.svg'

import theme from '../theme/theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import './fonts.css'
import metaImg from '../theme/assets/images/pride-logo-social.png'

const query = graphql`
  query rootQuery {
    site {
      siteMetadata {
        title
        name
        legalName
        siteUrl
        description
        phone
        email
        streetAddress
        addressLocality
        addressRegion
        postalCode
        addressCountry
        facebook
        twitter
        instagram
        youtube
        linkedin
        snapchat
      }
    }

    allContentfulEvent(filter: {}, sort: { fields: [startTime], order: ASC }) {
      edges {
        node {
          id
          name
          startTime
          endTime
          recurrenceDates
          eventPriceLow
          eventCategories
          venueDetails
          audience
          accessibilityOptions
          postcode
          eventsListPicture {
            fixed(
              width: 400
              height: 235
              resizingBehavior: FILL
              quality: 90
              cropFocus: FACE
            ) {
              ...GatsbyContentfulFixed
            }
            title
            file {
              url
            }
          }
        }
      }
    }
  }
`

const Layout = ({ children, location: { pathname } }) => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={query}
      render={({
        allContentfulEvent: { edges: events },
        site: {
          siteMetadata: {
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
          },
        },
      }) => {
        const metaUrl = pathname === '/' ? siteUrl : siteUrl + pathname
        const metaImgUrl = `${siteUrl}${metaImg}`
        return (
          <Provider events={events}>
            <Fragment>
              <Helmet
                title={title}
                meta={[
                  {
                    name: 'description',
                    content: description,
                  },

                  // Schema meta tags
                  {
                    itemprop: 'name',
                    content: title,
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
                    src:
                      'https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.2.5/polyfill.js',
                  },
                  {
                    type: 'application/ld+json',
                    innerHTML: JSON.stringify({
                      '@context': 'https://schema.org',
                      '@type': 'Organization',
                      name: name,
                      legalName,
                      url: siteUrl,
                      logo,
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
                      sameAs: [
                        facebook,
                        twitter,
                        instagram,
                        youtube,
                        linkedin,
                        snapchat,
                      ],
                    }),
                  },
                ]}
              />

              <Nav />
              <main>{children}</main>
              <Footer
                facebook={facebook}
                twitter={twitter}
                instagram={instagram}
                youtube={youtube}
                linkedin={linkedin}
                snapchat={snapchat}
              />
            </Fragment>
          </Provider>
        )
      }}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default Layout
