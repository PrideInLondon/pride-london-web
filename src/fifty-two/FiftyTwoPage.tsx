import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Banner } from '../components/banner'
import { PageIntro } from '../components/pageIntro'
import { H3 } from '../components/typography'
import { FilterContainer } from '../components/filterContainer'
import { colors } from '../theme/colors'
import { Category } from '../components/filterContainer/FilterContainer.types'
import { renderMethods } from './renderMethods'
import { FiftyTwoPageProps } from './FiftyTwoPage.types'

const CATEGORIES: Category[] = [
  { title: 'Everything', hexColour: colors.eucalyptusGreen },
  { title: 'Painting', hexColour: colors.tomato },
  { title: 'Photography', hexColour: colors.red },
  { title: 'Mixed Media', hexColour: colors.greyBlue },
  { title: 'Illustration', hexColour: colors.darkCyan },
  { title: 'Sculpture', hexColour: colors.skyBlue },
  { title: 'Other', hexColour: colors.darkPurple },
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
    <FilterContainer
      filterType="radio"
      categories={CATEGORIES}
      selected={['Everything']}
      handleFilterSelect={() => {}}
    />
  </>
)
