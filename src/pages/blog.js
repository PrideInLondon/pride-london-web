import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
// import styled from 'styled-components'
// import { Container, Row, Column } from '../components/grid'
// import { media } from '../theme/media'
import ImageBanner from '../components/imageBanner'
import theme from '../theme/theme'
import ViewsContainer from '../features/blog/containers/viewsContainer'
import NewsContainer from '../features/blog/containers/newsContainer'
import StyledHR from '../components/horizontalRule'

const mapNewsArticles = news => {
  if (!news.edges || !Array.isArray(news.edges)) return []
  return news.edges.map(({ node }) => ({ ...node }))
}

const Blog = ({ data: { allContentfulNews, allContentfulNewsCategory } }) => {
  const articles = mapNewsArticles(allContentfulNews)
  const categories = mapNewsArticles(allContentfulNewsCategory)
  console.log(categories)
  return (
    <Fragment>
      <ImageBanner
        titleText="The Voice of Pride in London"
        subtitleText="Find out what we're talking about in the Pride in London Community"
        altText=""
        color={theme.colors.beachBlue}
        large
        allowContentUnderflow
      />
      <ViewsContainer />
      <StyledHR />
      <NewsContainer articles={articles} categories={categories} />
    </Fragment>
  )
}

export default Blog

export const blogLandingPageQuery = graphql`
  query allContentfulNews {
    allContentfulNewsCategory {
      edges {
        node {
          id
          title
          hexColour
        }
      }
    }

    allContentfulNews {
      edges {
        node {
          id
          title
          newsCategory {
            title
            hexColour
          }
        }
      }
    }
  }
`
