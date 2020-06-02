import React from 'react'
import { navigate } from '@reach/router'
import { P } from '../../components/typography'
import { Heading, Content, BoxesWrapper } from './ActsOfAllyshipSection.styles'
import ActsOfAllyshipBox from './ActsOfAllyshipBox'
import { SectionWrapper } from './YouMeUsWePage.styles'

const ActsOfAllyshipSection = () => (
  <SectionWrapper>
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
          the community today and make an act of allyship. Below are the three
          ways to make an act of allyship.
        </P>
      </div>
    </Content>
    <BoxesWrapper>
      <ActsOfAllyshipBox
        number={1}
        heading="Donate to your community"
        cta={{
          text: 'Donate now',
          onClick: () => navigate('#donate-to-your-community'),
        }}
      >
        Any donation, big or small, will contribute to the Unity Fund, helping
        to address the needs of LGBT+ people, and also support Pride in London’s
        vital work.
      </ActsOfAllyshipBox>
      <ActsOfAllyshipBox
        number={2}
        heading="Be there for your community"
        cta={{
          text: 'Pledge your allyship',
          onClick: () => navigate('#be-there-for-your-community'),
        }}
      >
        Small but meaningful actions can show you're there as a supportive ally
        for all LGBT+ people. Check out our suggestions and make your pledge.
      </ActsOfAllyshipBox>
      <ActsOfAllyshipBox
        number={3}
        heading="Celebrate your community"
        cta={{
          text: 'Share your story',
          onClick: () => navigate('#share-your-story'),
        }}
      >
        Who has been there to support you? Tell us about a time someone in the
        community was really there for you, we'd love to share your story and
        celebrate them!
      </ActsOfAllyshipBox>
    </BoxesWrapper>
  </SectionWrapper>
)

export default ActsOfAllyshipSection
