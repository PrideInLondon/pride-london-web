import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'
import { RippedSection } from '../../components/rippedSection'
import { RipVariant } from '../../components/rippedSection/Rip.types'
import { Wrapper } from '../../components/wrapper'
import { Tag } from '../../components/tag'
import { H2 } from '../../components/typography'
import { ShareBar } from '../../components/shareBar'
import { TalentProfile } from '../../components/talentProfile'
import { getImageForBreakpoint } from '../../utils/style-utils'
import { getFirstParagraph } from '../../utils/document-utils'
import { getRandomInt } from '../../utils/number-utils'
import { colors } from '../../theme/colors'
import { MAX_CONTENT_WIDTH, Content } from './BlogArticlePage.styles'
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
