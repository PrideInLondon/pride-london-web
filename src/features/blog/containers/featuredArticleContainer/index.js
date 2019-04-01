import React from 'react'
import ImageBanner from '../../../../components/imageBanner'
import FeaturedArticle from '../../components/featuredArticle'
import { RelativeContainer, CenteredContainer } from './styles'

const FeaturedArticleContainer = () => {
  return (
    <RelativeContainer>
      <ImageBanner altText="" color="blue" />
      <CenteredContainer>
        <FeaturedArticle />
      </CenteredContainer>
    </RelativeContainer>
  )
}

export default FeaturedArticleContainer
