import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Banner } from '../components/banner'
import { PageIntro } from '../components/pageIntro'
import { H3 } from '../components/typography'
import { CategoryFilter } from '../components/categoryFilter'
import { Category } from '../components/categoryFilter/CategoryFilter.types'
import { colors } from '../theme/colors'
import { renderMethods } from './renderMethods'
import { FiftyTwoPageProps } from './FiftyTwoPage.types'

const CATEGORIES: Category[] = [
  { name: 'Everything', color: colors.eucalyptusGreen },
  { name: 'Painting', color: colors.tomato },
  { name: 'Photography', color: colors.red },
  { name: 'Mixed Media', color: colors.greyBlue },
  { name: 'Illustration', color: colors.darkCyan },
  { name: 'Sculpture', color: colors.skyBlue },
  { name: 'Other', color: colors.darkPurple },
]

export const FiftyTwoPage: React.FC<FiftyTwoPageProps> = ({
  data: {
    contentfulCustomPageContent: {
      title,
      subtitle,
      bannerImage,
      bodyText: { json },
      cta: { ctaTitle, buttonUrl, buttonText, bodyText },
    },
  },
}) => (
  <>
    <Banner
      titleText={title}
      subtitleText={subtitle}
      fixed={bannerImage}
      imageFullWidth
    />
    <PageIntro
      cta={{
        title: ctaTitle,
        link: {
          to: buttonUrl,
          text: buttonText,
        },
        body: bodyText,
      }}
    >
      {documentToReactComponents(json, renderMethods)}
    </PageIntro>
    <H3 textAlign="center">Category is...</H3>
    <CategoryFilter
      filterType="radio"
      categories={CATEGORIES}
      selected={['Everything']}
      handleFilterSelect={() => {}}
    />
  </>
)
