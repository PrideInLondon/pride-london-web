import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import { Banner } from '../components/banner'
import { Button } from '../components/button'
import VolunteerBoxInfo from './VolunteerBoxInfo'
import CampaignContainer from './CampaignContainer'
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

const HomePage = ({
  data: {
    file: { childImageSharp },
  },
}) => (
  <Fragment>
    <Banner
      titleText="Pride in London"
      subtitleText="1 Jul 2023 - The UK’s biggest, most diverse Pride. A home for every part of London’s LGBT+ community."
      titlePosition="bottom"
      color={theme.colors.eucalyptusGreen}
      large
      allowContentUnderflow
      videoId="348603446"
      fixed={childImageSharp}
    />
    <CampaignContainer />
    <Divider />
    <Container>
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
      <Button to="/help">Find out more</Button>
    </Container>

    <Divider />
    <Donate />
    <VolunteerBoxInfo />
    <Announcements />
    <LatestNewsContainer />
  </Fragment>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage
