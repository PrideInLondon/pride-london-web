import React from 'react'
import BannerImage from '../../../../components/bannerImage'
import FeaturedArticle from '../../components/featuredArticle'
import { RelativeContainer, CenteredContainer } from './styles'

const FeaturedArticleContainer = () => {
  return (
    <RelativeContainer>
      <BannerImage altText="" color="blue" />
      <CenteredContainer>
        <FeaturedArticle />
      </CenteredContainer>
    </RelativeContainer>
  )
}

export default FeaturedArticleContainer
