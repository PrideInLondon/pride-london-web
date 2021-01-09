import React from 'react'
import Image from 'gatsby-image/withIEPolyfill'
import { RippedSection } from '../../components/rippedSection'
import { RipVariant } from '../../components/rippedSection/Rip.types'
import { Tag } from '../../components/tag'
import { H2 } from '../../components/typography'
import { getImageForBreakpoint } from '../../utils/style-utils'
import { getRandomInt } from '../../utils/number-utils'
import { colors } from '../../theme/colors'
import { InfoWrapper } from './BlogArticlePage.styles'
import { BlogArticlePageProps } from './BlogArticlePage.types'

const getCategoryColor = (category: string) => {
  switch (category) {
    default:
      return colors.mexicanPink
  }
}

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  data: {
    contentfulBlogArticle: { hero, category, title },
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
    <InfoWrapper marginTop="xxl" marginBottom="lg">
      <Tag color={getCategoryColor(category)}>{category}</Tag>
    </InfoWrapper>
    <H2 as="h1" textAlign="center">
      {title}
    </H2>
  </>
)
