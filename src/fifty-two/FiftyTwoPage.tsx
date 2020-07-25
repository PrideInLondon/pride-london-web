import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Banner } from '../components/banner'
import { PageIntro } from '../components/pageIntro'
import { H3, P } from '../components/typography'
import { CategoryFilter } from '../components/categoryFilter'
import { Category } from '../components/categoryFilter/CategoryFilter.types'
import { Gallery, GalleryContainer } from '../components/gallery'
import { Button } from '../components/button'
import { GalleryCard } from '../components/galleryCard'
import { colors } from '../theme/colors'
import { generateFiftyTwoEntrySlug } from './helpers'
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
    <Gallery
      entries={edges}
      pageSize={9}
      render={({ entries, showNextPage }) => (
        <>
          <CategoryFilter
            variant="radio"
            categories={CATEGORIES}
            {...{ entries }}
            render={({ entries: filteredEntries }) => (
              <>
                <GalleryContainer
                  variant="masonry"
                  columns={{ default: 1, md: 2, lg: 3 }}
                  paddingX="xl"
                  paddingY="xxl"
                >
                  {filteredEntries(
                    ({
                      node: {
                        artwork: { category },
                      },
                    }) => category
                  ).map(
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
                        to={generateFiftyTwoEntrySlug(artist.name)}
                        {...rest}
                        artist={artist}
                        artwork={{
                          ...artwork,
                          image: { fixed, alt: '' },
                          category: CATEGORIES.find(
                            ({ name }) => name === category
                          )!,
                        }}
                      />
                    )
                  )}
                </GalleryContainer>
                <ButtonWrapper>
                  <P variant="sm" color={colors.white}>
                    You're viewing {entries.length} of {edges.length} artworks
                  </P>
                  {entries.length < edges.length && (
                    <Button
                      variant="outline-white"
                      onClick={showNextPage}
                      marginTop="md"
                    >
                      Show more artworks
                    </Button>
                  )}
                </ButtonWrapper>
              </>
            )}
          />
        </>
      )}
    />
  </>
)
