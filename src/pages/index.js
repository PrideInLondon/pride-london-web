import React, { Fragment } from 'react'
import styled from 'styled-components'
import theme from '../theme/theme'
import BannerImage from '../components/banner/bannerImage'
import Button from '../components/button'
import eventsBgLeft from '../theme/assets/images/featured-events-bg-left.png'
import eventsBgRight from '../theme/assets/images/featured-events-bg-right.png'
import FeaturedEvents from '../features/homepage/components/featuredEvents'
import { media } from '../theme/media'
import { Container, Row, Column } from '../components/grid'
import VolunteerBoxInfo from '../features/homepage/components/volunteerBoxInfo'
import BannerImg from '../theme/assets/images/banners/home/bg@3x.jpg'
import LatestNewsContainer from '../features/homepage/containers/latestNewsContainer'
import AnnouncementsContainer from '../features/homepage/containers/announcementsContainer'
import DonateContainer from '../features/homepage/containers/donateContainer'

const FeaturedEventsContainer = styled.div`
  background-color: #282a80;
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 30px 0;
  margin: 0 auto;

  ${media.tablet`
    padding: 58px 90px;
  `};
`

const FeaturedEventsHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 22px;
  justify-content: space-between;

  ${media.tablet`
    padding-bottom: 9px;
  `};

  a {
    display: none;

    ${media.tablet`
      display: block;
    `};
  }
`

const ButtonMobile = styled.div`
  padding: 20px 20px 10px 20px;
  display: block;

  ${media.tablet`
    display: none;
  `};
`

const FeaturedEventsTitle = styled.div`
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
    line-height: 1.38;
    color: #ffffff;
    margin: 0 0 10px;
    color: ${theme.colors.white};

    ${media.tablet`
      font-size: 18px;
      line-height: 1.44;
  `};
  }
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

const StyledContainer = styled(Container)`
  ${media.tablet`
    margin-top: -100px;
  `};

  ${media.desktop`
    margin-top: -250px;
  `};

  ${media.desktopHD`
    margin-top: -320px;
  `};

  ${media.tabletMax`
      margin: 0;
  `};
`

const StyledRow = styled(Row)`
  ${media.tabletMax`
      margin: 0;
  `};
`

const StyledColumn = styled(Column)`
  ${media.tabletMax`
      padding: 0;
  `};
`

const BannerButton = styled(Button)`
  ${media.tabletMax`
      margin-bottom: 20px;
  `};
`

const Home = () => (
  <Fragment>
    <BannerImage
      titleText={'Pride in London'}
      subtitleText={
        'The UK’s biggest, most diverse pride. A  home for every part of London’s LGBT+ community'
      }
      date={'Saturday 6 July'}
      imageSrc={BannerImg}
      color={theme.colors.eucalyptusGreen}
      large
      allowContentUnderflow
    >
      <BannerButton wide={false} white primary to="/events/whats-on">
        This year's event
      </BannerButton>
    </BannerImage>
    <StyledContainer>
      <StyledRow>
        <StyledColumn width={1}>
          <FeaturedEventsContainer>
            <EventsBackgroundLeft>
              <img alt="backgroundEventsLeft" src={eventsBgLeft} />
            </EventsBackgroundLeft>
            <EventsBackgroundRight>
              <img alt="backgroundEvents" src={eventsBgRight} />
            </EventsBackgroundRight>
            <FeaturedEventsHeader>
              <FeaturedEventsTitle>
                <h2>Featured events</h2>
                <p>View events from across the LGBT+ community.</p>
              </FeaturedEventsTitle>
              <Button wide={false} to="/events/whats-on">
                View all events
              </Button>
            </FeaturedEventsHeader>
            <FeaturedEvents />
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
          </FeaturedEventsContainer>
        </StyledColumn>
      </StyledRow>
    </StyledContainer>
    <AnnouncementsContainer />
    <DonateContainer />
    <LatestNewsContainer />
    <VolunteerBoxInfo />
  </Fragment>
)

export default Home
