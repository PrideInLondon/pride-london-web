import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import theme from '../theme/theme'
import BannerImage from '../components/banner/bannerImage'
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
      date="2020 date to be announced"
      imageSrc={BannerImg}
      color={theme.colors.eucalyptusGreen}
      large
      allowContentUnderflow
      videoId="348603446"
      fixed={childImageSharp}
    />
    <AnnouncementsContainer />
    <DonateContainer />
    <LatestNewsContainer />
    <VolunteerBoxInfo />
  </Fragment>
)

Home.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Home
