import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import theme from '../theme/theme'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import BannerImage from '../components/banner/bannerImage'
import ParadeApplications from '../features/homepage/components/paradeApplications'
import VolunteerBoxInfo from '../features/homepage/components/volunteerBoxInfo'
import BannerImg from '../theme/assets/images/banners/home/bg@3x.jpg'
import LatestNewsContainer from '../features/homepage/containers/latestNewsContainer'
import AnnouncementsContainer from '../features/homepage/containers/announcementsContainer'
import DonateContainer from '../features/homepage/containers/donateContainer'

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
    <BannerImage
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
    <ParadeApplications />
    <Divider />
    <DonateContainer />
    <VolunteerBoxInfo />
    <AnnouncementsContainer />
    <LatestNewsContainer />
  </Fragment>
)

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home
