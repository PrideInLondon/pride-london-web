import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Banner } from '../components/banner'
import { PageIntro } from '../components/pageIntro'
import { H3 } from '../components/typography'
import { CategoryFilter } from '../components/categoryFilter'
import { Category } from '../components/categoryFilter/CategoryFilter.types'
import { Gallery, GalleryContainer } from '../components/gallery'
import { Button } from '../components/button'
import { colors } from '../theme/colors'
import { GalleryCard } from './GalleryCard'
import { renderMethods } from './renderMethods'
import { ButtonWrapper } from './FiftyTwoPage.styles'
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
    content: {
      title,
      subtitle,
      bannerImage,
      bodyText: { json },
      cta: { ctaTitle, buttonUrl, buttonText, bodyText },
    },
    entries: { edges },
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
    <H3 textAlign="center" paddingBottom="lg">
      Category is...
    </H3>
    <CategoryFilter
      filterType="radio"
      categories={CATEGORIES}
      selected={['Everything']}
      handleFilterSelect={() => {}}
    />
    <Gallery
      entries={edges}
      pageSize={9}
      render={({ entries, moreEntriesToShow, showNextPage }) => (
        <>
          <GalleryContainer
            variant="masonry"
            columns={{ default: 1, md: 2, lg: 3 }}
            paddingX="xl"
            paddingY="xxl"
          >
            {entries.map(
              ({
                node: {
                  artist,
                  artwork: {
                    image: { fixed },
                    category,
                    ...artwork
                  },
                  ...rest
                },
              }) => (
                <GalleryCard
                  key={artist.name}
                  {...rest}
                  artist={artist}
                  artwork={{
                    ...artwork,
                    image: fixed,
                    category: CATEGORIES.find(({ name }) => name === category)!,
                  }}
                />
              )
            )}
          </GalleryContainer>
          {moreEntriesToShow && (
            <ButtonWrapper>
              <Button variant="outline-white" onClick={showNextPage}>
                Show more artworks
              </Button>
            </ButtonWrapper>
          )}
        </>
      )}
    />
  </>
)
