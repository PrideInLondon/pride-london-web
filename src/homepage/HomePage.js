import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../theme/theme'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import { Banner } from '../components/banner'
import bannerBackground from './bannerBackground.jpg'
import VolunteerBoxInfo from './VolunteerBoxInfo'
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

const HomePage = ({
  data: {
    file: { childImageSharp },
  },
}) => (
  <Fragment>
    <Banner
      titleText="Pride in London"
      subtitleText="The UK’s biggest, most diverse Pride. A home for every part of London’s LGBT+ community."
      titlePosition="bottom"
      date="Saturday 27 June 2020"
      imageSrc={bannerBackground}
      color={theme.colors.eucalyptusGreen}
      large
      allowContentUnderflow
      videoId="348603446"
      fixed={childImageSharp}
    />
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
