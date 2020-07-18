import React from 'react'
import { Banner } from '../components/banner'
import bannerImage from './bannerImage.svg'

export const FiftyTwoPage = () => (
  <>
    <Banner
      titleText="Fifty-Two"
      subtitleText="Celebrating queer art and shining a spotlight on the work of LGBT+ artists."
      imageSrc={bannerImage}
      imageFullWidth
    />
  </>
)
