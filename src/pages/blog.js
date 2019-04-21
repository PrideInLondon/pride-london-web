import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import BannerImage from '../components/banner/bannerImage'
import ViewsContainer from '../features/blog/containers/viewsContainer'
import NewsContainer from '../features/blog/containers/newsContainer'
import StyledHR from '../components/horizontalRule'
import background from '../theme/assets/images/banners/blog/bg.svg'
import constants from '../constants'

const { articleCategories } = constants

const mapEntries = news => {
  if (!news.edges || !Array.isArray(news.edges)) return []
  return news.edges.map(({ node }) => ({ ...node }))
}

const Blog = ({ data: { articles, views } }) => {
  const mappedArticles = mapEntries(articles).map(art => ({
    ...art,
    category: articleCategories.find(cat => cat.title == art.category),
  }))
  const mappedViews = mapEntries(views)
  console.log(mappedViews)
  return (
    <Fragment>
      <BannerImage
        titleText="The Voice of Pride in London"
        subtitleText="Find out what we're talking about in the Pride in London Community"
        altText="The Voice of Pride in London"
        imageSrc={background}
        imageFullWidth
        large
      />
      <ViewsContainer views={mappedViews} />
      <StyledHR />
      <NewsContainer articles={mappedArticles} categories={articleCategories} />
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
