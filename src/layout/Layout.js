import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { Helmet } from '../components/helmet'
import CookieNotice from '../cookieNotice'
import Intercom from '../components/intercom'
import EventsContext from '../contexts/eventsContext'
import theme from '../theme/theme'
import {
  filterPastEvents,
  sortEventsByStartTime,
  calculateEndTime,
} from '../events/helpers'
import logo from '../assets/logo.svg'
import { colors } from '../theme/colors'
import logoWhite from '../assets/logo-white.svg'
import LayoutHelmet from './LayoutHelmet'
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
        site: { siteMetadata },
      }) => (
        <EventsContext.Provider
          value={events
            .filter(event => filterPastEvents(calculateEndTime(event.node)))
            .sort(sortEventsByStartTime)}
        >
          <Fragment>
            <Helmet title={siteMetadata.title} />
            <LayoutHelmet pathname={pathname} {...siteMetadata} />
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
              <Footer {...siteMetadata} />
              <CookieNotice />
            </SiteWrapper>
            <Intercom />
          </Fragment>
        </EventsContext.Provider>
      )}
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
