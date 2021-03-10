import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'
import { RippedSection } from '../../components/rippedSection'
import { Wrapper } from '../../components/wrapper'
import { Tag } from '../../components/tag'
import { H3 } from '../../components/typography'
import { ShareBar } from '../../components/shareBar'
import { TalentProfile } from '../../components/talentProfile'
import { getImageForBreakpoint } from '../../utils/style-utils'
import { getFirstParagraph } from '../../utils/document-utils'
import {
  MAX_CONTENT_WIDTH,
  Title,
  Content,
  YouMayAlsoLikeWrapper,
} from './BlogArticlePage.styles'
import { BlogArticleSummaryCard } from './BlogArticleSummaryCard'
import { generateBlogArticleSlug, getCategoryColor } from './helpers'
import { BlogArticlePageProps } from './BlogArticlePage.types'

const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
    contentfulBlogArticle: {
      hero,
      category,
      title,
      content: { json },
      author,
    },
    otherContentfulBlogArticles: { edges },
  },
}) => (
  <>
    <RippedSection rips={{ bottom: { color: 'white' } }}>
      <Image
        fluid={getImageForBreakpoint(hero)}
        style={{ width: '100%' }}
        aria-hidden="true"
      />
    </RippedSection>
    <Wrapper
      display="flex"
      justifyContent="center"
      marginTop="xxl"
      marginBottom="lg"
    >
      <Tag color={getCategoryColor(category)}>{category}</Tag>
    </Wrapper>
    <Wrapper
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingX={{ default: 'lg', md: 'xxl' }}
      position="relative"
    >
      <Title>{title}</Title>
      <Wrapper
        position={{ md: 'absolute' }}
        marginBottom={{ default: 'xl_mob', md: '0' }}
        top={{ md: 0 }}
        left={{ md: 'lg' }}
      >
        <ShareBar
          variant={{ default: 'horizontal', md: 'vertical' }}
          content={{
            title,
            body: getFirstParagraph(json),
            url: siteUrl + generateBlogArticleSlug(title),
          }}
        />
      </Wrapper>
    </Wrapper>
    <Content document={json} marginBottom="xxl" />
    {author && (
      <Wrapper
        display="flex"
        justifyContent="center"
        marginBottom="xxl"
        paddingX={{ default: 'lg', md: 'xxl' }}
      >
        <TalentProfile
          title={author.name}
          talent={author}
          width={{ default: '100%', md: MAX_CONTENT_WIDTH }}
        />
      </Wrapper>
    )}
    {edges && edges.length === 3 && (
      <Wrapper marginBottom="xxl" paddingX={{ default: 'lg', md: 'xxl' }}>
        <H3 mb={{ default: 'lg', md: 'xl_mob' }}>You may also like</H3>
        <YouMayAlsoLikeWrapper>
          {edges.map(({ node }) => (
            <BlogArticleSummaryCard {...node} />
          ))}
        </YouMayAlsoLikeWrapper>
      </Wrapper>
    )}
  </>
)

export const query = graphql`
  fragment BlogArticleSummary on ContentfulBlogArticle {
    hero {
      desktop: fluid(maxWidth: 420, quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
      tablet: fluid(maxWidth: 768, quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
      mobile: fluid(maxWidth: 375, quality: 100) {
        ...GatsbyContentfulFluid_withWebp
      }
    }
    category
    title
  }

  query blogArticle($id: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }

    contentfulBlogArticle(id: { eq: $id }) {
      hero {
        desktop: fluid(maxWidth: 1600, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
        tablet: fluid(maxWidth: 768, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
        mobile: fluid(maxWidth: 375, quality: 100) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      category
      title
      content {
        json
      }
      author {
        name
        bio {
          json
        }
        website
        email
        facebook
        twitter
        instagram
      }
    }

    otherContentfulBlogArticles: allContentfulBlogArticle(
      sort: { fields: [updatedAt], order: DESC }
      filter: { id: { ne: $id } }
      limit: 3
    ) {
      edges {
        node {
          ...BlogArticleSummary
        }
      }
    }
  }
`

export default BlogArticlePage
