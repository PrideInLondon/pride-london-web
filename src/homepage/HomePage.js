import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import { Banner } from '../components/banner'
// import { Button } from '../components/button'
// import { Social } from '../exploreLondon/CommunityPartnerCard.styles'
import { Container, Row } from '../components/grid'
import VolunteerBoxInfo from './VolunteerBoxInfo'
//import CampaignContainer from './CampaignContainer'
import LatestNewsContainer from './LatestNewsContainer'
//import Announcements from './Announcements'
// import SocialWall from './SocialWall'
//import { Container } from '../components/grid'
//import HighlightBanner from './HighlightBanner'
import Donate from './Donate'
//import LiveStreamEmbed from './Livestream'

const Divider = styled.hr`
  margin: 64px 20px 20px 20px;
  color: ${colors.mediumGrey};
  height: 1px;

  ${mediaQueries.md} {
    display: none;
  }
`

const StatementHeader = styled.h3`
  ${mediaQueries.xl} {
    max-width: 60%;
  }
`

/*
export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  margin: 20px;
  margin-bottom: 0;
`*/

export const Wrapper = styled(Container)`
  position: relative;
  z-index: 0;
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
      titleText="Pride in London"
      subtitleText={subtitles}
      titlePosition="bottom"
      color={theme.colors.eucalyptusGreen}
      large
      allowContentUnderflow
      videoId="841511573"
      fixed={childImageSharp}
    >
      {/* <Button to="/parade">What's happening</Button> */}
    </Banner>
    {/*<LiveStreamEmbed />*/}
    <Container>
      <Row>
        <Row>
          <StatementHeader>
            Statement from the Board of Directors regarding recent allegations
            relating to Mr Christopher Joell-Deshields
          </StatementHeader>
          <p>
            “The Board of Directors is aware of a number of allegations and is
            taking action to investigate these claims.”
          </p>
          <p>
            “We are not in a position to comment further while these
            investigations are taking place, save to say that we take such
            allegations extremely seriously, and remain committed to upholding a
            safe, open and inclusive organisation that is compliant with its
            legal and governance obligations.”
          </p>
          <p>
            For press queries, please contact{' '}
            <a
              href="mailto:projectpaddington@drdpartnership.com"
              aria-label="email the press contact"
            >
              projectpaddington@drdpartnership.com
            </a>
            .
          </p>
        </Row>
      </Row>
    </Container>

    {/*<HighlightBanner />*}
    {/*<AnnouncementsList />*/}
    {/* <Divider /> */}
    {/*<div style={{ marginBottom: '80px' }} />*/}

    <Divider />
    {/*<CampaignContainer />*/}
    {/*<Announcements />*/}
    <LatestNewsContainer />
    <Divider />
    <VolunteerBoxInfo />
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
