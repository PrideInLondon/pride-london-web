import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
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
      slug,
    },
    site: {
      siteMetadata: { siteUrl },
    },
    otherArticles,
  },
}) => {
  const metaImg = `https:${headerImage.file.url}?w=1000&h=562`
  const metaUrl = `${siteUrl}/${slug}`
  console.log(slug)
  return (
    <PageWrapper>
      <Helmet
        title={name}
        meta={[
          // Schema meta tags
          {
            itemprop: 'name',
            content: name,
          },
          {
            itemprop: 'description',
            content: '',
          },
          {
            itemprop: 'url',
            content: metaUrl,
          },
          {
            itemprop: 'thumbnailUrl',
            content: metaImg,
          },
          {
            itemprop: 'image',
            content: metaImg,
          },

          // OpenGraph Meta Tags
          {
            property: 'og:title',
            content: name,
          },
          {
            property: 'og:description',
            content: '',
          },
          {
            property: 'og:url',
            content: metaUrl,
          },
          {
            property: 'og:image',
            content: metaImg,
          },
          {
            property: 'og:image:secure_url',
            content: metaImg,
          },

          // Twitter Meta Tags
          {
            name: 'twitter:title',
            content: name,
          },
          {
            name: 'twitter:description',
            content: '',
          },
          {
            name: 'twitter:image',
            content: metaImg,
          },
          {
            name: 'twitter:url',
            content: metaUrl,
          },
        ]}
        link={[
          {
            rel: 'canonical',
            href: metaUrl,
          },
        ]}
      />
      <PageHeader title={title} headerImage={headerImage} />
      <PageContent
        article={article}
        title={title}
        datePublished={datePublished}
        category={articleCategories.find(cat => cat.title == category)}
        author={author}
      />
      <PageFooter
        otherArticles={otherArticles}
        categories={articleCategories}
      />
    </PageWrapper>
  )
}

export const articleDetailsQuery = graphql`
  query articleDetailsQuery($id: String!) {
    site {
      siteMetadata {
        name
        title
        description
        siteUrl
      }
    }

    contentfulArticle: contentfulArticle(id: { eq: $id }) {
      id
      title
      slug
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
          slug
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
