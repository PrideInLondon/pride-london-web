import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Provider } from '../components/appContext'
import Nav from '../components/navigation/nav'
import Footer from '../components/footer/footerQuery'
import favicon from '../favicon.ico'
import theme from '../theme/theme'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './index.css'
import './fonts.css'
import metaImg from '../theme/assets/images/Pride-in-London-2018-save-the-date1024.jpg'

const query = graphql`
  query rootQuery {
    site {
      siteMetadata {
        title
        siteUrl
        description
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
          siteMetadata: { title, siteUrl, description },
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
                ]}
                link={[
                  {
                    rel: 'icon',
                    href: favicon,
                  },
                  {
                    rel: 'image_src',
                    content: metaImgUrl,
                  },
                  {
                    rel: 'canonical',
                    href: metaUrl,
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
                ]}
              />

              <Nav />
              <main>{children}</main>
              <Footer />
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
