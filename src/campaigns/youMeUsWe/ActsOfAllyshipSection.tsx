import React from 'react'
import { P } from '../../components/typography'
import { Heading, Content, BoxesWrapper } from './ActsOfAllyshipSection.styles'
import ActsOfAllyshipBox from './ActsOfAllyshipBox'

const ActsOfAllyshipSection = () => (
  <>
    <Heading />
    <Content>
      <P variant="lg">
        We are calling on each and every one of you who would have taken part in
        the festivities this month to make an act of allyship. Our goal is to
        reach 30,000 acts - one for every person who would have marched in the
        parade.
      </P>
      <div>
        <P>
          Historically, the Pride movement was built on a core foundation of us
          standing up for one another. An attack on one of us is an attack on
          all of us, and from the Stonewall Uprising through to the present day,
          Pride has always been the moment we come together as a community in
          solidarity with one another.
        </P>
        <P>
          As LGBT+ people, especially those from marginalised communities,
          continue to come under attack from many sides, this allyship is as
          important now as it has ever been. Show your support for the rest of
          the community now and make an act of allyship.
        </P>
      </div>
    </Content>
    <BoxesWrapper>
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
    </BoxesWrapper>
  </>
)

export default ActsOfAllyshipSection
