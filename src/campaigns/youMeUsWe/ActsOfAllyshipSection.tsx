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
          Historically, the Pride movement has been built on a foundation of
          standing up for one another. An attack on one of us is an attack on
          all of us, and from the Stonewall Uprising through to the present day,
          Pride has always been the moment we come together as a community in
          solidarity with one another.
        </P>
        <P>
          As LGBT+ people, especially those from marginalised communities,
          continue to come under attack from many sides, this allyship is as
          important now as it has ever been. Show your support for the rest of
          the community today and make an act of allyship.
        </P>
      </div>
    </Content>
    <BoxesWrapper>
      <ActsOfAllyshipBox
        number={1}
        heading="Donate to your community"
        cta={{ text: 'Donate now', to: 'https://donate.prideinlondon.org/' }}
      >
        Any donation, big or small, helps support the LGBT+ community in these
        uncertain times, and beyond.
      </ActsOfAllyshipBox>
      <ActsOfAllyshipBox
        number={2}
        heading="Moments that mean the most"
        cta={{ text: 'See our ideas', to: '/' }} // TODO: get link
      >
        Acts of kindness make the world go round. What will be yours?{' '}
      </ActsOfAllyshipBox>
      <ActsOfAllyshipBox
        number={3}
        heading="Who is your support system?"
        cta={{ text: 'Share your story', to: '/' }} // TODO: get link
      >
        Who has always been there to support you? Tell us about them, and your
        story could be featured on our site!
      </ActsOfAllyshipBox>
    </BoxesWrapper>
  </>
)

export default ActsOfAllyshipSection
