import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Banner } from '../components/banner'
import { PageIntro } from '../components/pageIntro'
import { H3, P } from '../components/typography'
import { CategoryFilter } from '../components/categoryFilter'
import { Category } from '../components/categoryFilter/CategoryFilter.types'
import { Gallery, GalleryContainer } from '../components/gallery'
import { Button } from '../components/button'
import { GalleryCard } from '../components/galleryCard'
import { CTALink } from '../components/ctaLink'
import { Modal } from '../components/modal/Modal'
import { Wrapper } from '../components/wrapper/Wrapper'
import { colors } from '../theme/colors'
import { shuffle } from '../utils/iteration-utils'
import { generateFiftyTwoEntrySlug } from './helpers'
import { renderMethods } from './renderMethods'
import { ButtonWrapper } from './FiftyTwoPage.styles'
import { FiftyTwoPageProps } from './FiftyTwoPage.types'

const CATEGORIES: Category[] = [
  { name: 'Everything', color: colors.eucalyptusGreen, isSelectAll: true },
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
}) => {
  const [shuffledEntries, setShuffledEntries] = useState(shuffle(edges))

  useEffect(() => {
    setShuffledEntries(shuffle(edges))
  }, [edges])

  return (
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
                    <GalleryContainer
                      variant="masonry"
                      columns={{ default: 1, md: 2, lg: 3 }}
                      paddingX="xl"
                      paddingY="xxl"
                    >
                      {pagedEntries.map(
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
      <Modal
        trigger={<Button>Click to open</Button>}
        dismissable={false}
        open={Cookies.get('fiftyTwo') === 'accept' ? false : true}
        onClose={() => {
          Cookies.set('fiftyTwo', 'accept', { expires: 365 })
        }}
      >
        {({ setIsOpen }) => (
          <Wrapper textAlign="center" width="100%">
            <H3 color="white">Age verification</H3>
            <P color="white" variant="lg">
              The following page contains artwork depicting themes and content
              that may not be suitable for under 18s.
            </P>
            <Button
              mr="lg"
              onClick={() => {
                setIsOpen(false)
              }}
            >
              Continue to page
            </Button>
            <Button variant="outline-white" to="/">
              Redirect me
            </Button>
            <P variant="sm" color="white" mt="lg">
              See Fifty-Two's{' '}
              <CTALink
                to="https://prideinlondon.org/fifty-two/terms/"
                color="white"
              >
                terms and conditions
              </CTALink>
            </P>
          </Wrapper>
        )}
      </Modal>
    </>
  )
}