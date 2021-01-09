import React from 'react'
import Image from 'gatsby-image/withIEPolyfill'
import { RippedSection } from '../../components/rippedSection'
import { RipVariant } from '../../components/rippedSection/Rip.types'
import { getImageForBreakpoint } from '../../utils/style-utils'
import { getRandomInt } from '../../utils/number-utils'
import { colors } from '../../theme/colors'
import { BlogArticlePageProps } from './BlogArticlePage.types'

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  data: {
    contentfulBlogArticle: { hero },
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
  </>
)
