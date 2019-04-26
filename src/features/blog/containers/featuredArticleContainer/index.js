import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BannerImage from '../../../../components/banner/bannerImage'
import FeaturedArticle from '../../components/featuredArticle'
import { Container, Row, Column } from '../../../../components/grid'

export const query = graphql`
  query articleQuery {
    contentfulArticleFeatured {
      featuredArticle {
        slug
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
          <>
            <BannerImage color="blue" imageSrc={src} imageFullWidth />
            <Container>
              <Row>
                <Column width={1}>
                  <FeaturedArticle data={data} />
                </Column>
              </Row>
            </Container>
          </>
        )
      }}
    />
  )
}

export default FeaturedArticleContainer
