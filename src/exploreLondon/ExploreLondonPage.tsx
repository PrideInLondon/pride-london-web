import React from 'react'
import { P } from '../components/typography'
import { Helmet } from '../components/helmet'
import { GreyWrapper } from '../components/grid'
import { Banner } from '../components/banner'
import { colors } from '../theme/colors'
import { PageIntro } from '../components/pageIntro'
import { Category } from '../components/categoryFilter/CategoryFilter.types'
import { CategoryFilter } from '../components/categoryFilter'
import { Gallery } from '../components/gallery'
import { Button } from '../components/button'
import CommunityPartnerCard from './CommunityPartnerCard'
import {
  ButtonWrapper,
  StyledGalleryContainer,
} from './ExploreLondonPage.styles'
import { ExploreLondonPageProps } from './ExploreLondonPage.types'

export const CATEGORIES: Category[] = [
  { name: 'Everything', color: colors.yellow, isSelectAll: true },
  { name: 'Drink', color: colors.tomato },
  { name: 'Eat', color: colors.pink },
  { name: 'Party', color: colors.greyBlue },
  { name: 'Shop', color: colors.eucalyptusGreen },
  { name: 'Sleep', color: colors.fuscia },
]
const PADDING_X = { default: 'lg', md: 'xl' }
const PADDING_Y = { default: 'lg', md: 'xl' }

const ExploreLondonPage: React.FC<ExploreLondonPageProps> = ({
  data: {
    allContentfulCommunityPartner: { edges },
  },
}) => {
  return (
    <>
      <Helmet title="Explore London" />
      <Banner
        titleText="Explore London"
        subtitleText="Find great places to spend time with friends and loved ones around London."
        color={colors.yellow}
      />
      <PageIntro
        cta={{
          title: 'Get your venue listed',
          body:
            "We'd love to hear from you if you have an LGBT+ or LGBT+ friendly venue and you want to support Pride.",
          link: { to: 'mailto:info@prideinlondon.org', text: 'Get in touch' },
        }}
      >
        <p>
          London is one of the most exciting cities in the world. Whether you
          live in London or you're visiting from further afield, check out the
          following amazing venues who support Pride and the LGBT+ community.
        </p>
        <p>
          Oh and if you're visiting London and need somewhere to store your bags
          and luggage, we've partnered with{' '}
          <a
            href="https://stasher.com/search?search=Regent%20Street&coordinates=51.51562449999999%2C-0.14205270000002201"
            rel="noopener noreferrer"
            target="_blank"
          >
            Stasher
          </a>{' '}
          who have locations all across the city. It's only £6 per day so check
          them out! Use the code PRIDE for 10% off.
        </p>
      </PageIntro>
      {edges && (
        <GreyWrapper as="section">
          <CategoryFilter
            margin="auto"
            paddingX={PADDING_X}
            pt={PADDING_Y}
            variant="checkbox"
            categories={CATEGORIES}
            entries={edges}
            render={({ entries }) => {
              const filteredEntries = entries(
                ({ node: { category } }) => category
              )
              return (
                <Gallery
                  entries={filteredEntries}
                  pageSize={16}
                  render={({ entries: pagedEntries, showNextPage }) => (
                    <>
                      <StyledGalleryContainer
                        variant="grid"
                        columns={{ default: 1, md: 2, lg: 3 }}
                        paddingX={PADDING_X}
                        paddingY="xxl"
                        gridGap={32}
                      >
                        {pagedEntries.map(({ node }) => (
                          <CommunityPartnerCard partner={node} key={node.id} />
                        ))}
                      </StyledGalleryContainer>
                      <ButtonWrapper>
                        <P variant="sm" color={colors.white}>
                          You're viewing {pagedEntries.length} of{' '}
                          {filteredEntries.length} partners
                        </P>
                        {pagedEntries.length < filteredEntries.length && (
                          <Button
                            variant="outline-white"
                            onClick={showNextPage}
                            marginTop="md"
                          >
                            Show more partners
                          </Button>
                        )}
                      </ButtonWrapper>
                    </>
                  )}
                />
              )
            }}
          />
        </GreyWrapper>
      )}
    </>
  )
}

export default ExploreLondonPage
