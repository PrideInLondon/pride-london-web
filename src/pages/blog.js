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

const Blog = ({
  data: { allContentfulNews, allContentfulNewsCategory, allContentfulViews },
}) => {
  const articles = mapEntries(allContentfulNews)
  const categories = mapEntries(allContentfulNewsCategory)
  const views = mapEntries(allContentfulViews)
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
      <ViewsContainer views={views} />
      <StyledHR />
      <NewsContainer articles={articles} categories={categories} />
    </Fragment>
  )
}

Blog.propTypes = {
  data: PropTypes.shape({
    allContentfulNews: PropTypes.arrayOf(PropTypes.shape({})),
    allContentfulNewsCategory: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
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
          date
          newsCategory {
            title
            hexColour
          }
        }
      }
    }

    allContentfulViews {
      edges {
        node {
          id
          date
          portraitPhoto {
            file {
              url
            }
          }
          title
          author
        }
      }
    }
  }
`
