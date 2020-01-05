import React, { Component } from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import Helmet from 'react-helmet'
// import { noScroll } from '../utilities'
import { media } from '../theme/media'
import theme from '../theme/theme'
import { EventListingCard } from '../features/events'
// import EventsFilters from '../features/events/components/eventsFilters'
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
// import filterIcon from '../theme/assets/images/icon-filters.svg'
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

// const ColumnTextCenter = styled(Column)`
//   text-align: center;
// `
// const ContainerAddFilters = styled(Container)`
//   padding: 20px 0;
//   margin-bottom: 20px;
//   background-color: ${theme.colors.white};

//   ${media.tablet`
//     display: none;
//   `};
// `

const ColumnPagination = styled(Column)`
  text-align: center;
  padding-bottom: 20px;

  ${media.tablet`
    padding-top: 50px;
    padding-bottom: 60px;
  `};
`

// const OffsetContainer = styled(Container)`
//   ${media.tablet`
//     margin-top: -50px;
//     position: relative;
//     z-index: 1;
//   `};
// `

const EventCount = styled.p`
  font-size: 0.875rem;
  line-height: 1.214;
  color: ${theme.colors.darkGrey};
`

const DateGroupHeading = styled.h2`
  margin: 1rem 0;

  ${media.tablet`
    display: none;
  `};
`

// const FilterIcon = styled.img`
//   margin: 0 6px -2px 0;
// `

const PageWrapper = styled.div`
  background-color: ${theme.colors.lightGrey};
`
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
      const startDate = moment(event.node.startTime).format(constants.dateFormat)
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
          1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
          1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
        ]}
        key={event.node.id}
        py={[2, 2, 2, 3]}
      >
        {header && <DateGroupHeading>{header}</DateGroupHeading>}
        <EventListingCard event={event.node} />
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
  // const [state, setState] = useState({ showFiltersMobile: false })

  // const toggleFiltersMobile = () => {
  //   this.setState(
  //     prevState => ({
  //       ...prevState,
  //       showFiltersMobile: !prevState.showFiltersMobile,
  //     }),
  //     () => noScroll.toggle()
  //   )
  // }

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
        <PageWrapper>
          <Helmet title="Coming Out - The new way to find the best queer events for the queer community from Pride in London." />
          <EventsPageBanner
            title="Coming Out"
            subtitle=" The new way to find the best queer events for the queer community from Pride in London."
            backgroundColor={theme.colors.bondiBlue}
            image={childImageSharp}
          />
          {/* <OffsetContainer>
              <EventsFilters
                showFiltersMobile={showFiltersMobile}
                toggleFiltersMobile={this.toggleFiltersMobile}
              />
            </OffsetContainer>
            <ContainerAddFilters>
              <Row>
                <ColumnTextCenter width={1}>
                  <Button
                    aria-controls="filters"
                    aria-expanded={showFiltersMobile}
                    onClick={this.toggleFiltersMobile}
                    primary
                    fullmobile
                  >
                    <FilterIcon
                      src={filterIcon}
                      width="22"
                      height="18"
                      alt="Filters Icon"
                      role="presentation"
                    />
                    {context.filteredEvents.length < context.state.events.length
                      ? 'Edit Filters'
                      : 'Add Filters'}
                  </Button>
                </ColumnTextCenter>
              </Row>
            </ContainerAddFilters> */}
          <Container>
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
                      key={event.node.id}
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
