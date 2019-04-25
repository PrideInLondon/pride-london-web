import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BannerImage from '../../../../components/banner/bannerImage'
import FeaturedArticle from '../../components/featuredArticle'
import { RelativeContainer, CenteredContainer } from './styles'

export const query = graphql`
  query articleQuery {
    contentfulArticleFeatured {
      featuredArticle {
        id
        datePublished
        title
        headerImage {
          sizes(maxWidth: 1920, quality: 90) {
            src
          }
        }
      }
    }
  }
`

const FeaturedArticleContainer = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const {
          src,
        } = data.contentfulArticleFeatured.featuredArticle.headerImage.sizes

        return (
          <RelativeContainer>
            <BannerImage color="blue" imageSrc={src} imageFullWidth />
            <CenteredContainer>
              <FeaturedArticle data={data} />
            </CenteredContainer>
          </RelativeContainer>
        )
      }}
    />
  )
}

export default FeaturedArticleContainer
