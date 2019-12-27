import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Helmet from 'react-helmet'
// import { noScroll } from '../utilities'
import { media } from '../theme/media'
import theme from '../theme/theme'
import { GroupedEventsCards } from '../features/events'
//import EventsFilters from '../features/events/components/eventsFilters'
import Button from '../components/button'
import { Container, Row, Column } from '../components/grid'
import { Consumer } from '../components/appContext'
import { filterByLimit } from '../features/events/helpers'
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

const ListingCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
`

// const FilterIcon = styled.img`
//   margin: 0 6px -2px 0;
// `

const PageWrapper = styled.div`
  background-color: ${theme.colors.lightGrey};
`

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
              <ListingCardWrapper>
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
                      toLoad={context.state.eventsToShow}
                    />
                  ))}
              </ListingCardWrapper>

              <ColumnPagination width={1}>
                {renderEventCount(
                  context.filteredEvents.length,
                  context.state.eventsToShow
                )}
                {context.state.eventsToShow < context.filteredEvents.length && (
                  <Button
                    onClick={() => {
                      context.actions.showMore(context.filteredEvents.length)
                    }}
                    primary
                    disabled={
                      context.state.eventsToShow >=
                      context.filteredEvents.length
                    }
                    fullmobile
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
