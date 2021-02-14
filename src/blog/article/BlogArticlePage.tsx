import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'
import { RippedSection } from '../../components/rippedSection'
import { RipVariant } from '../../components/rippedSection/Rip.types'
import { Wrapper } from '../../components/wrapper'
import { Tag } from '../../components/tag'
import { H2, H3 } from '../../components/typography'
import { ShareBar } from '../../components/shareBar'
import { TalentProfile } from '../../components/talentProfile'
import { CategoryCard } from '../../components/categoryCard'
import { getImageForBreakpoint } from '../../utils/style-utils'
import { getFirstParagraph } from '../../utils/document-utils'
import { getRandomInt } from '../../utils/number-utils'
import { colors } from '../../theme/colors'
import {
  MAX_CONTENT_WIDTH,
  Content,
  YouMayAlsoLikeWrapper,
  CardTitle,
} from './BlogArticlePage.styles'
import { generateBlogArticleSlug } from './helpers'
import { BlogArticlePageProps } from './BlogArticlePage.types'

const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Arts & culture':
      return colors.tomato
    case 'History':
      return colors.lemonGreen
    case 'Life':
      return colors.skyBlue
    case 'Stories':
      return colors.fuscia
    default:
      return ''
  }
}

const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  data: {
    contentfulBlogArticle: {
      hero,
      category,
      title,
      content: { json },
      author,
    },
    otherContentfulBlogArticles: { edges },
  },
  location: { href },
}) => (
  <>
    <RippedSection
      rips={{
        bottom: {
          color: colors.white,
          variant: getRandomInt(1, 5) as RipVariant,
        },
      }}
    >
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
      <H2 as="h1" textAlign="center" maxWidth={842}>
        {title}
      </H2>
      <Wrapper
        position={{ md: 'absolute' }}
        marginBottom={{ default: 'xl_mob', md: '0' }}
        top={{ md: 0 }}
        left={{ md: 'lg' }}
      >
        <ShareBar
          variant={{ default: 'horizontal', md: 'vertical' }}
          content={{ title, body: getFirstParagraph(json), url: href }}
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
          maxWidth={{ md: MAX_CONTENT_WIDTH }}
        />
      </Wrapper>
    )}
    {edges && edges.length === 3 && (
      <Wrapper marginBottom="xxl" paddingX={{ default: 'lg', md: 'xxl' }}>
        <H3 mb={{ default: 'lg', md: 'xl_mob' }}>You may also like</H3>
        <YouMayAlsoLikeWrapper>
          {edges.map(({ node }) => (
            <CategoryCard
              key={node.title}
              to={generateBlogArticleSlug(node.title)}
              image={getImageForBreakpoint(node.hero)}
              category={{
                color: getCategoryColor(node.category),
                name: node.category,
              }}
            >
              <CardTitle>{node.title}</CardTitle>
            </CategoryCard>
          ))}
        </YouMayAlsoLikeWrapper>
      </Wrapper>
    )}
  </>
)

export const query = graphql`
  query blogArticle($id: String!) {
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
      }
    }
  }
`

export default BlogArticlePage
