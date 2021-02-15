import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { ConsentGate, MetomicProvider } from '@metomic/react'
import { Helmet } from '../components/helmet'
import Intercom from '../components/intercom'
import EventsContext from '../contexts/eventsContext'
import theme from '../theme/theme'
import { filterPastEvents, sortEventsByStartTime } from '../events/helpers'
import { colors } from '../theme/colors'
import LayoutHelmet from './LayoutHelmet'
import { Navigation } from './navigation'
import { Footer } from './Footer'
import { SiteWrapper } from './Layout.styles'
import { GlobalStyle } from './GlobalStyle'

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

    allContentfulEvent(
      sort: { fields: [date___dates___startDate], order: ASC }
    ) {
      edges {
        node {
          id
          name
          date {
            dates {
              id
              startDate
              endDate
            }
          }
          eventPriceLow
          eventCategories
          venueDetails
          audience
          accessibilityOptions
          onDemand: ondemand
          location2
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
            .filter(event => {
              const lastOccurenceEndDate =
                event.node.date.dates[event.node.date.dates.length - 1].endDate
              return filterPastEvents(lastOccurenceEndDate)
            })
            .sort(sortEventsByStartTime)}
        >
          <Fragment>
            <Helmet title={siteMetadata.title} />
            <LayoutHelmet pathname={pathname} {...siteMetadata} />
            <SiteWrapper>
              <Navigation
                backgroundColor={
                  pathname.replace(/\/$/, '') === '/events'
                    ? colors.mexicanPink
                    : colors.indigo
                }
              />
              <main>{children}</main>
              <Footer {...siteMetadata} />
            </SiteWrapper>
          </Fragment>
          <Intercom />
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
