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

const Blog = ({ data: { articles, categories, views } }) => {
  const mappedCategories = mapEntries(categories)
  const mappedArticles = mapEntries(articles).map(art => ({
    ...art,
    category: mappedCategories.find(cat => cat.title == art.category),
  }))
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
    views: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.any) }),
    news: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.any) }),
    categories: PropTypes.shape({ edges: PropTypes.arrayOf(PropTypes.any) }),
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

    articles: allContentfulArticle(filter: { category: { ne: "Views" } }) {
      edges {
        node {
          id
          title
          category
          datePublished
        }
      }
    }

    views: allContentfulArticle(filter: { category: { eq: "Views" } }) {
      edges {
        node {
          id
          title
          category
          datePublished
          headerImage {
            file {
              url
            }
          }
          author {
            display_name {
              display_name
            }
          }
        }
      }
    }
  }
`
