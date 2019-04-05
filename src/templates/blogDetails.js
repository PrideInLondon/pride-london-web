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
  },
}) => {
  return (
    <PageWrapper>
      <PageHeader title={title} headerImage={headerImage} />
      <PageContent
        article={article}
        title={title}
        datePublished={datePublished}
        category={category}
        author={author}
      />
      <PageFooter />
    </PageWrapper>
  )
}

export const articleDetailsQuery = graphql`
  query articleDetailsQuery($id: String!) {
    contentfulArticle(id: { eq: $id }) {
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
      }
    }
  }
`

BlogDetails.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogDetails
