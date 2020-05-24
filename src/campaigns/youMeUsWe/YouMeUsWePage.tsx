import React from 'react'
import { fonts } from '../../theme/fonts'
import { colors } from '../../theme/colors'
import { P } from '../../components/typography'
import {
  Wrapper,
  StyledTag,
  CelebratingHeading,
  CelebratingContentWrapper,
  ActsOfAllyshipHeading,
  ActsOfAllyshipContent,
  ActsOfAllyshipBoxesWrapper,
  ForEveryKindHeading,
  ForEveryKindContent,
  PlaceholderDiv,
} from './YouMeUsWePage.styles'
import ActsOfAllyshipBox from './ActsOfAllyshipBox'
import Mark from './Mark'

const YouMeUsWePage = () => (
  <>
    <PlaceholderDiv name="Banner" style={{ height: 800 }} />
    <Wrapper>
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <CelebratingHeading fontFamily={fonts.cactus} as="h2">
        Celebrating allyship and standing up for one another.
      </CelebratingHeading>
      <CelebratingContentWrapper>
        <P variant="lg">
          We're as gutted as you are that the Parade isn't happening this year.
          But, rest assured, we plan on making sure that the LGBTQ+ community
          still feels the love, celebration and support it deserves this Pride
          Month.
        </P>
        <P>
          We may have had to move from our streets to our screens, but our theme
          for 2020, #YouMeUsWe, still stands. No matter your identity, it calls
          on each of us to reach out and understand one another, demanding us to
          be better allies within our own community.
        </P>
      </CelebratingContentWrapper>
      <PlaceholderDiv
        name="Video"
        style={{
          height: 600,
          maxWidth: 1050,
          marginTop: 80,
        }}
      />
      <ActsOfAllyshipHeading />
      <ActsOfAllyshipContent>
        <P variant="lg">
          We are calling on each and every one of you who would have taken part
          in the festivities this month to make an act of allyship. Our goal is
          to reach 30,000 acts - one for every person who would have marched in
          the parade.
        </P>
        <div>
          <P>
            Historically, the Pride movement was built on a core foundation of
            us standing up for one another. An attack on one of us is an attack
            on all of us, and from the Stonewall Uprising through to the present
            day, Pride has always been the moment we come together as a
            community in solidarity with one another.
          </P>
          <P>
            As LGBT+ people, especially those from marginalised communities,
            continue to come under attack from many sides, this allyship is as
            important now as it has ever been. Show your support for the rest of
            the community now and make an act of allyship.
          </P>
        </div>
      </ActsOfAllyshipContent>
      <ActsOfAllyshipBoxesWrapper>
        <ActsOfAllyshipBox
          number={1}
          heading="Support the community fund"
          cta={{ text: 'Donate now', to: 'https://donate.prideinlondon.org/' }}
        >
          If you're able to, donate to our community fund. Any amount, big or
          small, will help support the LGBTQ+ community in these uncertain times
          and beyond.
        </ActsOfAllyshipBox>
        <ActsOfAllyshipBox
          number={2}
          heading="Do an act of kindness"
          cta={{ text: 'See our ideas', to: '/' }} // TODO: get link
        >
          Show your love for the community by a small act of kindness.
        </ActsOfAllyshipBox>
        <ActsOfAllyshipBox
          number={3}
          heading="Who are your allies?"
          cta={{ text: 'Share your story', to: '/' }} // TODO: get link
        >
          Has someone in your life been there for you as an ally? Tell us about
          them and what they’ve done to support you. You could even have your
          story featured on our site!
        </ActsOfAllyshipBox>
      </ActsOfAllyshipBoxesWrapper>
      <Mark />
      <PlaceholderDiv name="Image" style={{ height: 1000 }} />

      <ForEveryKindHeading>For Every Kind</ForEveryKindHeading>
      <P textAlign="center">Narrated by Emma Frankland</P>
      <ForEveryKindContent>
        For the L’s, the G’s, the B’s and the T’s.
        <br />
        Plus the Allies and the Andros, Agenders and Aporas.
        <br />
        For the Butch, the Fluid, the Non-Binary.
        <br />
        The Inter, Demi & Grey - The Novi and Dyadic.
        <br />
        For the Maveriques and those who feel Dysphoric.
        <br />
        <br />
        For the Aromantics, the Intersex and the gender Apathetic.
        <br />
        For the Questioning. For the Curious. For the Queer.
        <br />
        <br />
        For every race. Every refugee. Every fluid identity.
        <br />
        <br />
        For the Masculine. For the Feminine. The men and the womxn.
        <br />
        Ladies born as boys. And the girls who chose to change.
        <br />
        For the Mono, Poly, Allo, Andro, Gyno and the Pans.
        <br />
        For Peris, For Varis and everyone between.
        <br />
        <br />
        Pride in London 2020.
        <br />
        You. Me. Us. We.
      </ForEveryKindContent>
      <Mark />
    </Wrapper>
  </>
)

export default YouMeUsWePage
