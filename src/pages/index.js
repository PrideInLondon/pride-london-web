import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import theme from '../theme/theme'
import ImageBanner from '../components/imageBanner'
import Button from '../components/button'
import { media } from '../theme/media'
import eventsBgLeft from '../theme/assets/images/featured-events-bg-left.png'
import eventsBgRight from '../theme/assets/images/featured-events-bg-right.png'
import iconChevronLeft from '../theme/assets/images/icon-chevron-left.svg'
import iconChevronRight from '../theme/assets/images/icon-chevron-right.svg'
import {
  Container,
  Row,
  StyledFlipMove,
  FlexColumn,
  Column,
} from '../components/grid'
import { EventListingCard } from '../features/events'
import { Consumer } from '../components/appContext'

const ColumnTextCenter = styled(Column)`
  text-align: center;
  width: fit-content;
`
const FuturedEventsHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 14px;
  justify-content: space-between;
`

const FuturedEventsTitle = styled.h2`
  font-size: 1.125rem;
  line-height: 1.375rem;
  font-weight: 600;
  margin: 0 0 1.25rem 0;
  color: ${theme.colors.white};

  ${media.tablet`
    font-size: 1.5rem;
    line-height: 1.8125rem;
  `};
`

const FuturedEventsContainer = styled.div`
  background-color: #282a80;
  padding: 60px 107px;
  width: 100%;
  position: relative;
  z-index: 1;
`
const EventsBackgroundLeft = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;

  & img {
    max-height: 100%;
  }
`
const EventsBackgroundRight = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;

  & img {
    max-height: 100%;
  }
`
const ButtonSwipeRight = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: ${theme.colors.white};
  position: absolute;
  top: 50%;
  left: -74px;
  background: url(${iconChevronLeft}) ${theme.colors.white} 50% 50% no-repeat;
  transform: translate(0, -50%);
`

const ButtonSwipeLeft = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  background-color: ${theme.colors.white};
  position: absolute;
  top: 50%;
  right: -74px;
  background: url(${iconChevronRight}) ${theme.colors.white} 50% 50% no-repeat;
  transform: translate(0, -50%);
`

const EventCards = () => {
  return (
    <Consumer>
      {context => (
        <Fragment>
          <StyledFlipMove>
            <ButtonSwipeLeft />
            {context.filteredEvents.map(event => (
              <FlexColumn
                width={[
                  1, // 100% between 0px screen width and first breakpoint (375px)
                  1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                  1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
                  1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
                ]}
                key={event.node.id}
              >
                <EventListingCard event={event.node} />
              </FlexColumn>
            ))}
            <ButtonSwipeRight />
          </StyledFlipMove>
        </Fragment>
      )}
    </Consumer>
  )
}

const Home = ({ data: { contentfulHeaderBanner } }) => (
  <Fragment>
    <ImageBanner
      titleText={contentfulHeaderBanner.heading}
      subtitleText={contentfulHeaderBanner.subHeading}
      imageSrc={
        contentfulHeaderBanner && contentfulHeaderBanner.heroImage.file.url
      }
      altText={contentfulHeaderBanner.heroImage.title}
      color={contentfulHeaderBanner.backgroundColour}
      large="true"
    >
      <ColumnTextCenter>
        <Button wide={false} primary link to="/events/">
          Find out more
        </Button>
      </ColumnTextCenter>
    </ImageBanner>
    <Container>
      <Row>
        <FuturedEventsContainer>
          <EventsBackgroundLeft>
            <img src={eventsBgLeft} />
          </EventsBackgroundLeft>
          <EventsBackgroundRight>
            <img src={eventsBgRight} />
          </EventsBackgroundRight>
          <FuturedEventsHeader>
            <FuturedEventsTitle>
              Featured events
              <p>View events drom across the LGBT+ comminuity </p>
            </FuturedEventsTitle>
            <Button wide={false} primary link to="/events/">
              View all events
            </Button>
          </FuturedEventsHeader>
          <EventCards />
        </FuturedEventsContainer>
      </Row>
    </Container>
  </Fragment>
)

export default Home

Home.propTypes = {
  data: PropTypes.object,
}

Home.defaultProps = {
  data: {},
}

export const homePageQuery = graphql`
  query contentfulHeaderBanner {
    contentfulHeaderBanner {
      title
      heading
      headingLine2
      backgroundColour
      heroImage {
        file {
          url
          fileName
          contentType
        }
        title
      }
      subHeading
    }
  }
`
