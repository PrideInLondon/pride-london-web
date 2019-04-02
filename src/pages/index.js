import React, { Fragment } from 'react'
import ImageBanner from '../components/imageBanner'
import Button from '../components/button'
import BannerImg from '../theme/assets/images/banners/home/bg@3x.jpg'
import theme from '../theme/theme'

const Home = () => (
  <Fragment>
    <ImageBanner
      titleText={'Pride in London'}
      subtitleText={
        'The UK’s biggest, most diverse pride. A  home for every part of London’s LGBT+ community'
      }
      date={'Saturday 6 July'}
      imageSrc={BannerImg}
      color={theme.colors.eucalyptusGreen}
      large
    >
      <Button wide={false} primary link white to="/events/">
        Find out more
      </Button>
    </ImageBanner>
  </Fragment>
)

export default Home
