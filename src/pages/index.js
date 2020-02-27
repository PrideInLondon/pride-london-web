import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import theme from '../theme/theme'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import { Banner } from '../components/banner'
import VolunteerBoxInfo from '../homepage/VolunteerBoxInfo'
import BannerImg from '../theme/assets/images/banners/home/bg@3x.jpg'
import LatestNewsContainer from '../homepage/LatestNewsContainer'
import Announcements from '../homepage/Announcements'
import Donate from '../homepage/Donate'

export const HomePageQuery = graphql`
  query HomePageQuery {
    file(relativePath: { regex: "/video-poster/" }) {
      size
      name
      childImageSharp {
        desktop: fixed(width: 1600, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
        tablet: fixed(width: 800, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
        mobile: fixed(width: 400, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const Divider = styled.hr`
  margin: 64px 20px 20px 20px;
  color: ${colors.mediumGrey};
  height: 1px;

  ${mediaQueries.md} {
    display: none;
  }
`

const Home = ({
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
      imageSrc={BannerImg}
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

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home
