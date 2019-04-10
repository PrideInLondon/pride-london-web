import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ImageBanner from '../components/imageBanner'
import theme from '../theme/theme'
import ViewsContainer from '../features/blog/containers/viewsContainer'
import NewsContainer from '../features/blog/containers/newsContainer'
import StyledHR from '../components/horizontalRule'

const mapEntries = news => {
  if (!news.edges || !Array.isArray(news.edges)) return []
  return news.edges.map(({ node }) => ({ ...node }))
}

const Blog = props => {
  const {
    data: { news, views, categories },
  } = props
  const mappedArticles = mapEntries(news)
  const mappedCategories = mapEntries(categories)
  const mappedViews = mapEntries(views)
  return (
    <Fragment>
      <ImageBanner
        titleText="The Voice of Pride in London"
        subtitleText="Find out what we're talking about in the Pride in London Community"
        altText="The Voice of Pride in London"
        color={theme.colors.beachBlue}
        large
        allowContentUnderflow
      />
      <ViewsContainer views={mappedViews} />
      <StyledHR />
      <NewsContainer articles={mappedArticles} categories={mappedCategories} />
    </Fragment>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    views: PropTypes.arrayOf(PropTypes.shape({})),
    news: PropTypes.arrayOf(PropTypes.shape({})),
    categories: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
}

export default Blog

export const blogLandingPageQuery = graphql`
  query allContentfulNews {
    categories: allContentfulNewsCategory {
      edges {
        node {
          id
          title
          hexColour
        }
      }
    }

    news: allContentfulNews(
      filter: { isFeatured: { ne: true }, isView: { ne: true } }
    ) {
      edges {
        node {
          id
          title
          date
          newsCategory {
            title
            hexColour
          }
        }
      }
    }

    views: allContentfulNews(
      filter: { isFeatured: { ne: true }, isView: { eq: true } }
    ) {
      edges {
        node {
          id
          title
          date
          portraitImage {
            file {
              url
            }
          }
          newsCategory {
            title
            hexColour
          }
        }
      }
    }
  }
`
