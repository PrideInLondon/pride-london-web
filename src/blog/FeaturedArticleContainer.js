import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Banner } from '../components/banner'
import { Container, Row, Column } from '../components/grid'
import FeaturedArticle from './FeaturedArticle'

export const query = graphql`
  query articleQuery {
    contentfulArticleFeatured {
      featuredArticle {
        slug
        datePublished
        title
        headerImage {
          gatsbyImageData(width: 1920, quality: 90)
        }
      }
    }
  }
`

const FeaturedArticleContainer = () => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const { src } =
          data.contentfulArticleFeatured.featuredArticle.headerImage.sizes

        return (
          <>
            <Banner color="blue" imageSrc={src} imageFullWidth />
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
