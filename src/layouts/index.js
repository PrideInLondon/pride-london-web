import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Provider } from '../components/appContext'
// import Navigation from '../components/navigation'
import SimpleNav from '../components/simpleNav'
import theme from '../theme/theme'
import favicon from '../favicon.ico'

import './index.css'
import './fonts.css'

const Layout = props => (
  <Provider events={props.data.allContentfulEvent.edges}>
    <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet
          title={props.data.site.siteMetadata.title}
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
        <main>{props.children()}</main>
      </Fragment>
    </ThemeProvider>
  </Provider>
)

// <Navigation
// items={{
//   logo: 'http://via.placeholder.com/164x64',
//   listItems: [
//     'Learn',
//     'Attend',
//     'Support us',
//     'Take part',
//     'Plan',
//     'Help',
//   ],
//   cta: 'donate',
// }}
// />

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Layout

export const query = graphql`
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
