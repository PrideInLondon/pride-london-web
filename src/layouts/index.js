import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Provider } from '../components/appContext'
// import Navigation from '../components/navigation'
import SimpleNav from '../components/simpleNav'
import theme from '../theme/theme'
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
    render={data =>
      console.log(data) || (
        <Provider events={data.allContentfulEvent.edges}>
          <ThemeProvider theme={theme}>
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
              />
              <SimpleNav />
              <main>{props.children}</main>
            </Fragment>
          </ThemeProvider>
        </Provider>
      )
    }
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
