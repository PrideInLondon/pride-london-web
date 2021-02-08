import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import constants from '../../constants'
import PageHeader from './PageHeader'
import { PageContent } from './PageContent'
import PageFooter from './PageFooter'

const PageWrapper = styled.div`
  position: relative;
  background-color: white;
  margin: 0;
`

const ArticlePage = ({
  data: {
    contentfulArticle: {
      title,
      headerImage,
      article,
      datePublished,
      updatedAt,
      category,
      author,
    },
    site: {
      siteMetadata: { siteUrl, name },
    },
    otherArticles,
  },
  location: { pathname },
}) => {
  const metaImg = `https:${headerImage.file.url}?w=1000&h=562`
  const metaUrl = `${siteUrl}/${pathname}`
  const paragraphs = article.json.content.filter(node => {
    return node.nodeType === 'paragraph'
  })
  const firstParagraph = paragraphs[0].content[0].value
  const body = article.json.content
    .map(paragraph => {
      const paragraphContent = paragraph.content
        .map(content => content.value)
        .join('')
      return `${paragraphContent}\n`
    })
    .join('')
  return (
    <PageWrapper>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: firstParagraph,
          },

          // Schema meta tags
          {
            itemprop: 'name',
            content: title,
          },
          {
            itemprop: 'description',
            content: firstParagraph,
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
            content: title,
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
            content: title,
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
            rel: 'image_src',
            content: metaImg,
          },
        ]}
        script={[
          {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
              '@context': 'http://schema.org',
              '@type': 'BlogPosting',
              mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': metaUrl,
              },
              headline: title,
              image: {
                '@type': 'ImageObject',
                url: metaImg,
              },
              datePublished,
              dateModified: updatedAt,
              author: author
                ? {
                    '@type': 'Person',
                    name: author.displayName,
                  }
                : { '@type': 'Organization', name },
              publisher: {
                '@type': 'Organization',
                name,
                logo: {
                  '@type': 'ImageObject',
                  url: `${siteUrl}/logo.png`,
                  height: 150,
                  width: 150,
                },
              },
              description: firstParagraph,
              articleBody: body,
            }),
          },
        ]}
      />
      <PageHeader title={title} headerImage={headerImage} fixed={headerImage} />
      <PageContent
        article={article}
        title={title}
        datePublished={datePublished}
        category={constants.articleCategories.find(
          cat => cat.title === category
        )}
        author={author}
      />
      <PageFooter
        otherArticles={otherArticles}
        categories={constants.articleCategories}
      />
    </PageWrapper>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export const query = graphql`
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
        desktop: fixed(
          width: 1600
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        tablet: fixed(
          width: 800
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        mobile: fixed(
          width: 400
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      datePublished
      updatedAt
      category
      author {
        displayName
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

export default ArticlePage
