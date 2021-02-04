import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'
import { RippedSection } from '../../components/rippedSection'
import { RipVariant } from '../../components/rippedSection/Rip.types'
import { Wrapper } from '../../components/wrapper'
import { Tag } from '../../components/tag'
import { H2 } from '../../components/typography'
import { TalentProfile } from '../../components/talentProfile'
import { getImageForBreakpoint } from '../../utils/style-utils'
import { getRandomInt } from '../../utils/number-utils'
import { colors } from '../../theme/colors'
import { MAX_CONTENT_WIDTH, Content } from './BlogArticlePage.styles'
import { BlogArticlePageProps } from './BlogArticlePage.types'

const getCategoryColor = (category: string) => {
  switch (category) {
    default:
      return colors.mexicanPink
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
  },
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
      justifyContent="center"
      paddingX={{ default: 'lg', md: 'xxl' }}
    >
      <H2 as="h1" textAlign="center" maxWidth={842}>
        {title}
      </H2>
    </Wrapper>
    <Content document={json} />
    {author && (
      <Wrapper
        display="flex"
        justifyContent="center"
        marginTop="xxl"
        marginBottom={{ default: 'xl', md: 'xxl' }}
        paddingX={{ default: 'lg', md: 'xxl' }}
      >
        <TalentProfile type="author" {...author} maxWidth={MAX_CONTENT_WIDTH} />
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
  }
`

export default BlogArticlePage
