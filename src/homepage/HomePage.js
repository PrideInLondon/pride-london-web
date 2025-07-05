import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import { Banner } from '../components/banner'
import { Button } from '../components/button'
// import { Social } from '../exploreLondon/CommunityPartnerCard.styles'
import VolunteerBoxInfo from './VolunteerBoxInfo'
//import CampaignContainer from './CampaignContainer'
import LatestNewsContainer from './LatestNewsContainer'
import AnnouncementsList from './AnnouncementList'
// import Announcements1 from './Announcements'
// import SocialWall from './SocialWall'
import HighlightBanner from './HighlightBanner'
import Donate from './Donate'
import LiveStreamEmbed from './Livestream'

const Divider = styled.hr`
  margin: 64px 20px 20px 20px;
  color: ${colors.mediumGrey};
  height: 1px;

  ${mediaQueries.md} {
    display: none;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  margin-bottom: 0;
`

export const BoldText = styled.span`
  background-color: ${theme.colors.indigo};
  font-size: 3rem;
  padding: 0 10px;
  box-shadow: 7px 0 0 3px #2d2f7f, -7px 0 0 3px #2d2f7f;
`

const subtitles = [
  // <BoldText>1 Jul 2023 </BoldText>,
  // <br key={1} />,
  'Embracing Every Shade: Celebrating Diversity Together',
  <br key={2} />,
  'A home for every part of London’s LGBTQ+ community.',
]

const HomePage = ({
  data: {
    file: { childImageSharp },
  },
}) => (
  <Fragment>
    <Banner
      titleText="Pride in London - 5 July 2025"
      subtitleText={subtitles}
      titlePosition="bottom"
      color={theme.colors.eucalyptusGreen}
      large
      allowContentUnderflow
      videoId="fkXw_OFyBmo"
      fixed={childImageSharp}
    >
      <Button to="https://www.youtube.com/watch?v=f_XDwCxle0A">Watch live</Button>
    </Banner>
    <LiveStreamEmbed />
    {/*<Container>
      <p
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: 600,
          color: '#2D2F7F',
        }}
      >
        Looking for more information about Pride in London{' '}
        {new Date().getFullYear()} and what to do on the day?
      </p>
      </Container>*/}
    <HighlightBanner />
    {/*<AnnouncementsList />*/}
    {/* <Divider /> */}
    <div style={{ marginBottom: '80px' }} />
    <VolunteerBoxInfo />
    <Divider />
    {/*<CampaignContainer />*/}
    {/* <Announcements /> */}
    <LatestNewsContainer />
    {/* <Divider />
    <SocialWall /> */}
    <Divider />
    <Donate />
    {/*<Donate />*/}
    {/**/}
  </Fragment>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage
