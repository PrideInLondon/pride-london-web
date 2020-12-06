import React, { useEffect, useState } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Helmet } from '../components/helmet'
import { Banner } from '../components/banner'
import { H3, P } from '../components/typography'
import { CategoryFilter } from '../components/categoryFilter'
import { Category } from '../components/categoryFilter/CategoryFilter.types'
import { Gallery } from '../components/gallery'
import { Button } from '../components/button'
import { GalleryCard } from '../components/galleryCard'
import { renderMethods } from '../components/renderMethods'
import { colors } from '../theme/colors'
import { md } from '../theme/breakpoints'
import { shuffle } from '../utils/iteration-utils'
import { checkBreakpoint } from '../utils/style-utils'
import { generateFiftyTwoEntrySlug } from './helpers'
import {
  StyledPageIntro,
  StyledGalleryContainer,
  ButtonWrapper,
} from './FiftyTwoPage.styles'
import { FiftyTwoPageProps } from './FiftyTwoPage.types'
import { AgeVerification } from './AgeVerification'
import meta from './meta.jpg'

export const CATEGORIES: Category[] = [
  { name: 'Everything', color: colors.eucalyptusGreen, isSelectAll: true },
  { name: 'Painting', color: colors.tomato },
  { name: 'Photography', color: colors.red },
  { name: 'Mixed Media', color: colors.greyBlue },
  { name: 'Illustration', color: colors.darkCyan },
  { name: 'Sculpture', color: colors.skyBlue },
  { name: 'Other', color: colors.darkPurple },
]

const PADDING_X = { default: 'lg', md: 'xl' }

export const FiftyTwoPage: React.FC<FiftyTwoPageProps> = ({
  data: {
    site: {
      siteMetadata: { siteUrl },
    },
    content: {
      title,
      subtitle,
      bannerImage,
      bodyText: { json },
      cta: { ctaTitle, buttonUrl, buttonText, bodyText },
    },
    entries: { edges },
  },
  location: { pathname },
}) => {
  const [shuffledEntries, setShuffledEntries] = useState(shuffle(edges))

  useEffect(() => {
    setShuffledEntries(shuffle(edges))
  }, [edges])

  return (
    <>
      <Helmet
        {...{ siteUrl, pathname }}
        title="Fifty-Two Digital Exhibition"
        description="The FIFTY-TWO art exhibition is an enormous opportunity to shine the spotlight on LGBT+ artists and their unique take on artwork that represents 52 years since the first Pride Festival."
        img={meta}
      />
      <Banner
        titleText={title}
        subtitleText={subtitle}
        fixed={bannerImage}
        imageFullWidth
      />
      <StyledPageIntro
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
      </StyledPageIntro>
      <H3 as="h2" textAlign="center" paddingBottom="lg">
        Category is...
      </H3>
      <CategoryFilter
        margin="auto"
        paddingX={PADDING_X}
        variant="radio"
        categories={CATEGORIES}
        entries={shuffledEntries}
        render={({ entries }) => {
          const filteredEntries = entries(
            ({
              node: {
                artwork: { category },
              },
            }) => category
          )
          return (
            <>
              <Gallery
                entries={filteredEntries}
                pageSize={9}
                render={({ entries: pagedEntries, showNextPage }) => (
                  <>
                    <StyledGalleryContainer
                      variant="masonry"
                      columns={{ default: 1, md: 2, lg: 3 }}
                      paddingX={PADDING_X}
                      paddingY="xxl"
                      gridGap={32}
                    >
                      {pagedEntries.map(
                        ({
                          node: {
                            artist,
                            artwork: {
                              image: { tablet, mobile },
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
                              image: {
                                fluid: checkBreakpoint(md) ? tablet : mobile,
                                alt: '',
                              },
                              category: CATEGORIES.find(
                                ({ name }) => name === category
                              )!,
                            }}
                          />
                        )
                      )}
                    </StyledGalleryContainer>
                    <ButtonWrapper>
                      <P variant="sm" color={colors.white}>
                        You're viewing {pagedEntries.length} of{' '}
                        {filteredEntries.length} artworks
                      </P>
                      {pagedEntries.length < filteredEntries.length && (
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
          )
        }}
      />
      <AgeVerification />
    </>
  )
}
