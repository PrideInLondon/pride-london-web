import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageHeader from '../features/blogDetails/containers/pageHeader'
import PageContent from '../features/blogDetails/containers/pageContent'
import PageFooter from '../features/blogDetails/containers/pageFooter'

const PageWrapper = styled.div`
  position: relative;
  background-color: white;
  margin: 0;
`
const BlogDetails = ({
  data: {
    contentfulArticle: {
      title,
      headerImage,
      article,
      datePublished,
      category,
      author,
    },
    otherArticles,
    categories,
  },
}) => (
  <PageWrapper>
    <PageHeader title={title} headerImage={headerImage} />
    <PageContent
      article={article}
      title={title}
      datePublished={datePublished}
      category={categories.edges.find(cat => cat.node.title == category).node}
      author={author}
    />
    <PageFooter otherArticles={otherArticles} categories={categories} />
  </PageWrapper>
)

export const articleDetailsQuery = graphql`
  query articleDetailsQuery($id: String!) {
    contentfulArticle: contentfulArticle(id: { eq: $id }) {
      id
      title
      article {
        json
      }
      headerImage {
        file {
          url
        }
      }
      datePublished
      category
      author {
        display_name {
          display_name
        }
        thumbnail {
          id
          file {
            url
          }
        }
        jobTitle
      }
    }
    otherArticles: allContentfulArticle(
      sort: { fields: [datePublished], order: DESC }
      filter: { id: { ne: $id }, category: { ne: "Views" } }
      limit: 3
    ) {
      edges {
        node {
          id
          title
          datePublished
          category
        }
      }
    }
    categories: allContentfulNewsCategory {
      edges {
        node {
          title
          hexColour
        }
      }
    }
  }
`

BlogDetails.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogDetails
