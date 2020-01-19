import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import Helmet from 'react-helmet'
import { color } from 'styled-system'
import { media } from '../theme/media'
import { colors } from '../theme/colors'
import { EventListingCard } from '../features/events'
import Button from '../components/button'
import {
  Container,
  Row,
  Column,
  StyledFlipMove,
  FlexColumn,
} from '../components/grid'
import { Consumer } from '../components/appContext'
import { filterByLimit } from '../features/events/helpers'
import constants from '../constants'
import { EventsPageBanner } from '../features/events/components/eventsPageBanner'

export const EventsPageQuery = graphql`
  query eventsPageQuery {
    file(relativePath: { regex: "/banners/events/bg@3x/" }) {
      size
      name
      childImageSharp {
        desktop: fixed(
          width: 920
          height: 500
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
        tablet: fixed(
          width: 768
          height: 417
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
        mobile: fixed(
          width: 480
          height: 260
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const ColumnPagination = styled(Column)`
  text-align: center;
  padding-bottom: 20px;

  ${media.tablet`
    padding-top: 50px;
    padding-bottom: 60px;
  `};
`

const EventCount = styled.p`
  font-size: 0.875rem;
  line-height: 1.214;
  color: ${colors.white};
`

const DateGroupHeading = styled.h2`
  margin: 1rem 0;
  color: ${colors.white};
  ${media.tablet`
    display: none;
  `};
`

const PageWrapper = styled.div`
  ${color}
`
PageWrapper.defaultProps = {
  backgroundColor: colors.lightGrey,
}
/* eslint-disable */
class GroupedEventsCards extends Component {
  static propTypes = {
    events: PropTypes.array.isRequired,
    index: PropTypes.number.isRequired,
    event: PropTypes.object.isRequired,
  }
  render() {
    const { event, index, events } = this.props
    let header
    const longDayOfMonth = 'dddd D MMM'

    if (index === 0) {
      header = moment(event.node.startTime).format(longDayOfMonth)
    } else {
      const startDate = moment(event.node.startTime).format(
        constants.dateFormat
      )
      const prevStartDate = moment(events[index - 1].node.startTime).format(
        constants.dateFormat
      )

      if (startDate !== prevStartDate) {
        header = moment(event.node.startTime).format(longDayOfMonth)
      }
    }
    return (
      <FlexColumn
        width={[
          1, // 100% between 0px screen width and first breakpoint (375px)
          1, // 100% between first breakpoint(375px) and second breakpoint (768px)
          1 / 2, // 75% between second breakpoint(768px) and third breakpoint (1024px)
          1 / 3,
          1 / 4, // 25% between third breakpoint(1280px) and fourth breakpoint (1440px)
        ]}
        key={event.node.id}
        py={[2, 2, 2, 3]}
      >
        {header && <DateGroupHeading>{header}</DateGroupHeading>}
        <EventListingCard event={event.node} variant={{default: 'row', md: 'column'}} />
      </FlexColumn>
    )
  }
}
/* eslint-enable */

/* eslint-disable react/no-multi-comp */

export const Events = ({
  data: {
    file: { childImageSharp },
  },
}) => {
  const renderEventCount = (filteredCount, eventsToShow) => {
    let text

    if (filteredCount) {
      text = `You're viewing ${
        eventsToShow <= filteredCount ? eventsToShow : filteredCount
      } of ${filteredCount} events`
    } else {
      text =
        'There are no events matching your criteria. Please try changing your filter options.'
    }

    return <EventCount>{text}</EventCount>
  }

  return (
    <Consumer>
      {context => (
        <PageWrapper backgroundColor={colors.indigo}>
          <Helmet title="Coming Out - The new way to find the best queer events for the queer community from Pride in London." />
          <EventsPageBanner
            title="Coming Out"
            subtitle=" The new way to find the best queer events for the queer community from Pride in London."
            backgroundColor={colors.darkCyan}
            image={childImageSharp}
          />
          <Container marginTop={{ default: 0, md: '60px' }}>
            <Row>
              <StyledFlipMove>
                {context.filteredEvents
                  .filter(filterByLimit, context.state.eventsToShow)
                  .sort((event1, event2) => {
                    return (
                      new Date(event1.node.startTime) -
                      new Date(event2.node.startTime)
                    )
                  })
                  .map((event, index, events) => (
                    <GroupedEventsCards
                      events={events}
                      index={index}
                      event={event}
                      key={event.node.id + event.node.startTime}
                    />
                  ))}
              </StyledFlipMove>
              <ColumnPagination width={1}>
                {renderEventCount(
                  context.filteredEvents.length,
                  context.state.eventsToShow
                )}
                {context.state.eventsToShow < context.filteredEvents.length && (
                  <Button
                    onClick={() =>
                      context.actions.showMore(context.filteredEvents.length)
                    }
                    disabled={
                      context.state.eventsToShow >=
                      context.filteredEvents.length
                    }
                    width={{ default: '100%', md: 'auto' }}
                    variant="outline-white"
                  >
                    Show more events
                  </Button>
                )}
              </ColumnPagination>
            </Row>
          </Container>
        </PageWrapper>
      )}
    </Consumer>
  )
}

Events.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Events
