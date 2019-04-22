import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import PageHeader from '../features/blogDetails/containers/pageHeader'
import PageContent from '../features/blogDetails/containers/pageContent'
import PageFooter from '../features/blogDetails/containers/pageFooter'
import { articleCategories } from '../constants'

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
  },
}) => (
  <PageWrapper>
    <PageHeader title={title} headerImage={headerImage} />
    <PageContent
      article={article}
      title={title}
      datePublished={datePublished}
      category={articleCategories.find(cat => cat.title == category)}
      author={author}
    />
    <PageFooter otherArticles={otherArticles} categories={articleCategories} />
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
  }
`

BlogDetails.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogDetails
