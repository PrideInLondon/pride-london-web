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

const Layout = props => (
  <ThemeProvider theme={theme}>
    <StaticQuery
      query={query}
      render={data => (
        <Provider events={data.allContentfulEvent.edges}>
          <Fragment>
            <Helmet
              title={data.site.siteMetadata.title}
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content: data.site.siteMetadata.description,
                },

                // Schema meta tags
                {
                  itemprop: 'name',
                  content: data.site.siteMetadata.title,
                },
                {
                  itemprop: 'url',
                  content: data.site.siteMetadata.siteUrl,
                },
                {
                  itemprop: 'thumbnailUrl',
                  content: data.site.siteMetadata.siteUrl + metaImg,
                },
                {
                  itemprop: 'image',
                  content: data.site.siteMetadata.siteUrl + metaImg,
                },
                // OpenGraph Meta Tags
                {
                  property: 'og:site_name',
                  content: data.site.siteMetadata.name,
                },
                {
                  property: 'og:title',
                  content: data.site.siteMetadata.title,
                },
                {
                  property: 'og:type',
                  content: 'website',
                },
                {
                  property: 'og:url',
                  content: data.site.siteMetadata.siteUrl,
                },
                {
                  property: 'og:description',
                  content: data.site.siteMetadata.description,
                },
                {
                  property: 'og:image',
                  content: data.site.siteMetadata.siteUrl + metaImg,
                },
                {
                  property: 'og:image:secure_url',
                  content: data.site.siteMetadata.siteUrl + metaImg,
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
                  content: data.site.siteMetadata.title,
                },
                {
                  name: 'twitter:image',
                  content: data.site.siteMetadata.siteUrl + metaImg,
                },
                {
                  name: 'twitter:url',
                  content: data.site.siteMetadata.siteUrl,
                },
              ]}
              link={[
                {
                  rel: 'icon',
                  href: favicon,
                },
                {
                  rel: 'image_src',
                  content: data.site.siteMetadata.siteUrl + metaImg,
                },
                {
                  rel: 'canonical',
                  href: data.site.siteMetadata.siteUrl,
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
            <main>{props.children}</main>
            <Footer />
          </Fragment>
        </Provider>
      )}
    />
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
