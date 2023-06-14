import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import { Banner } from '../components/banner'
import { Button } from '../components/button'
import VolunteerBoxInfo from './VolunteerBoxInfo'
//import CampaignContainer from './CampaignContainer'
import LatestNewsContainer from './LatestNewsContainer'
import Announcements from './Announcements'
import Donate from './Donate'

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

const subtitles = [
  '1 Jul 2023 - The UK’s biggest, most diverse Pride.',
  <br />,
  'A home for every part of London’s LGBT+ community.',
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
      videoId="791429324"
      fixed={childImageSharp}
    >
      <Button to="/help">What's happening</Button>
    </Banner>
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
    <VolunteerBoxInfo />
    <Divider />
    {/*<CampaignContainer />*/}
    <Announcements />
    <LatestNewsContainer />
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
