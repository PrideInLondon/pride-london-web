import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ReactHelmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Helmet } from '../components/helmet'
import CookieNotice from '../cookieNotice'
import Intercom from '../components/intercom'
import EventsContext from '../contexts/eventsContext'
import theme from '../theme/theme'
import { filterPastEvents, sortEventsByStartTime } from '../events/helpers'
import logo from '../assets/logo.svg'
import metaImg from '../assets/logo.png'
import { colors } from '../theme/colors'
import logoWhite from '../assets/logo-white.svg'
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
import { Navigation } from './navigation'
import { GlobalStyle, SiteWrapper } from './Layout.styles'
import { Footer } from './footer'

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
          locationName
          addressLine1
          postcode
          eventsListPicture {
            title
            fixed(
              width: 400
              height: 235
              resizingBehavior: FILL
              quality: 90
              cropFocus: FACE
            ) {
              ...GatsbyContentfulFixed_withWebp
            }
          }
        }
      }
    }
  }
`

const Layout = ({ children, location: { pathname } }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
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
          <EventsContext.Provider
            value={events.filter(filterPastEvents).sort(sortEventsByStartTime)}
          >
            <Fragment>
              <Helmet title={title} />
              <ReactHelmet
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
              <SiteWrapper>
                <Navigation
                  logoUrl={
                    pathname.replace(/\/$/, '') === '/events' ? logoWhite : logo
                  }
                  backgroundColor={
                    pathname.replace(/\/$/, '') === '/events'
                      ? colors.mexicanPink
                      : colors.indigo
                  }
                />
                <main>{children}</main>
                <Footer
                  facebook={facebook}
                  twitter={twitter}
                  instagram={instagram}
                  youtube={youtube}
                  linkedin={linkedin}
                  snapchat={snapchat}
                />
                <CookieNotice />
              </SiteWrapper>
              <Intercom />
            </Fragment>
          </EventsContext.Provider>
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
