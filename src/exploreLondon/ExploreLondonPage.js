import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from '../components/helmet'
import { GreyWrapper } from '../components/grid'
import { Banner } from '../components/banner'
import { colors } from '../theme/colors'
import constants from '../constants'
import { PageIntro } from '../components/pageIntro'
import { FilteredPagedCardContainer } from '../components/filteredPagedCardContainer'
import CommunityPartnerCard from './CommunityPartnerCard'

const ExploreLondonPage = ({
  data: {
    allContentfulCommunityPartner: { edges: partners },
  },
}) => (
  <div>
    <Helmet title="Explore London" />
    <Banner
      titleText="Explore London"
      subtitleText="Find great places to spend time with friends and loved ones around London."
      color={colors.yellow}
    />
    <PageIntro
      cta={{
        title: 'Get your venue listed',
        body: "We'd love to hear from you if you have an LGBT+ or LGBT+ friendly venue and you want to support Pride.",
        link: { to: 'mailto:info@prideinlondon.org', text: 'Get in touch' },
      }}
    >
      <p>
        London is one of the most exciting cities in the world. Whether you live
        in London or you're visiting from further afield, check out the
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
    {partners && (
      <GreyWrapper as="section">
        <FilteredPagedCardContainer
          filterType="checkbox"
          categories={constants.communityPartnerCategories}
          showAllCategoryTitle="Everything"
          cardContent={partners.map(({ node: partner }) => ({
            id: partner.venueName,
            category: partner.category,
            partner,
          }))}
          CardComponent={CommunityPartnerCard}
          showMoreButtonText="Show more partners"
          pageSize={16}
        />
      </GreyWrapper>
    )}
  </div>
)

ExploreLondonPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ExploreLondonPage
