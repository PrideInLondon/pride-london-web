import React from 'react'
import { Banner } from '../components/banner'
import { PageIntro } from '../components/pageIntro'
import { P, H3 } from '../components/typography'
import { FilterContainer } from '../components/filterContainer'
import { colors } from '../theme/colors'
import bannerImage from './bannerImage.svg'
import { Category } from './FiftyTwoPage.types'

const CATEGORIES: Category[] = [
  { title: 'Everything', hexColour: colors.eucalyptusGreen },
  { title: 'Painting', hexColour: colors.tomato },
  { title: 'Photography', hexColour: colors.red },
  { title: 'Mixed Media', hexColour: colors.greyBlue },
  { title: 'Illustration', hexColour: colors.darkCyan },
  { title: 'Sculpture', hexColour: colors.skyBlue },
  { title: 'Other', hexColour: colors.darkPurple },
]

export const FiftyTwoPage = () => (
  <>
    <Banner
      titleText="Fifty-Two"
      subtitleText="Celebrating queer art and shining a spotlight on the work of LGBT+ artists."
      imageSrc={bannerImage}
      imageFullWidth
    />
    <PageIntro
      cta={{
        title: 'Lorem ipsum dolor',
        link: {
          to: '/',
          text: 'Lorem ipsum',
        },
        body:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      }}
    >
      <P variant="lg">
        Pride 2020 will be an altogether more arty affair than ever before...
      </P>
      <P>
        Why? Because for the first time The Festival will include in the
        month-long programme 'FIFTY-TWO', an exhibition celebrating Queer Art
        and spotlighting the work of LGBTQ+ artists.
      </P>
      <P>
        This is not, however, like so many other such events, the domain of an
        elite few - far from it! Curated by London artist, David Hodge (aka Miss
        Dusty O), this exhibition reflects a wide range of artists creating from
        various and diverse points of view.
      </P>
      <P>
        A panel of LGBTQ+ personalities and allies, curated by Dusty O herself,
        will select the 52 works on show - each representing a year since the
        first Pride Festival. The pieces will be showcased in a central London
        gallery during the month of July and will be available for purchase with
        some of the proceeds supporting Pride in London.
      </P>
      <P>
        As Pride in London - we are trying to ensure we constantly reach out to
        new communities and help shine the light onto our community and show the
        world what the LGBT+ has to offer. Let’s make the community proud of its
        visual artists!
      </P>
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
