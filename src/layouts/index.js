import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { Provider } from '../components/appContext'
import Nav from '../components/nav'
import Footer from '../components/footer'
import favicon from '../favicon.ico'

import './index.css'
import './fonts.css'

const query = graphql`
  query rootQuery {
    site {
      siteMetadata {
        title
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
  <StaticQuery
    query={query}
    render={data => (
      <Provider events={data.allContentfulEvent.edges}>
        <Fragment>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
            link={[
              {
                rel: 'icon',
                href: favicon,
              },
            ]}
            htmlAttributes={{
              lang: 'en-gb',
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
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
