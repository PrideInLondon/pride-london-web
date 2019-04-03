import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import theme from '../theme/theme'
import ImageBanner from '../components/imageBanner'
import Button from '../components/button'
import eventsBgLeft from '../theme/assets/images/featured-events-bg-left.png'
import eventsBgRight from '../theme/assets/images/featured-events-bg-right.png'
import EventCards from '../features/home/components/featuredEvents'
import { media } from '../theme/media'
import { Container, Column } from '../components/grid'

const FuturedEventsContainer = styled.div`
  background-color: #282a80;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 30px 0;

  ${media.tablet`
    padding: 60px 107px;
  `};
`

const FuturedEventsHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 22px;
  justify-content: space-between;

  a {
    display: none;

    ${media.tablet`
      display: block;
    `};
  }
`

const ButtonMobile = styled.div`
  padding: 20px 10px 10px;
  display: block;

  ${media.tablet`
      display: none;
    `};
`

const FuturedEventsTitle = styled.div`
  h2 {
    font-size: 26px;
    line-height: 32px;
    font-weight: 600;
    margin: 0;
    color: ${theme.colors.white};

    ${media.tablet`
    font-size: 36px;
    line-height: 38px;
    font-weight: 600;
  `};
  }

  p {
    font-size: 16px;
    line-height: 22px;
    color: #ffffff;
    margin: 0 0 10px;
    color: ${theme.colors.white};
    ${media.tablet`
    font-size: 18px;
    line-height: 26px;
  `};
  }
`

const ColumnTextCenter = styled(Column)`
  text-align: center;
  width: fit-content;
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
      <FuturedEventsContainer>
        <EventsBackgroundLeft>
          <img alt="backgroundEventsLeft" src={eventsBgLeft} />
        </EventsBackgroundLeft>
        <EventsBackgroundRight>
          <img alt="backgroundEvents" src={eventsBgRight} />
        </EventsBackgroundRight>
        <FuturedEventsHeader>
          <FuturedEventsTitle>
            <h2>Featured events</h2>
            <p>View events drom across the LGBT+ comminuity </p>
          </FuturedEventsTitle>
          <Button wide={false} link to="/events/">
            View all events
          </Button>
        </FuturedEventsHeader>
        <EventCards />
        <ButtonMobile>
          <Button
            isTabletHidden
            secondary
            small
            wide={false}
            link
            to="/events/"
          >
            View all events
          </Button>
        </ButtonMobile>
      </FuturedEventsContainer>
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
