import React from 'react'
import { P } from '../../components/typography'
import { Typeform } from '../../components/typeform'
import { Heading, Grid, Item } from './ActsOfKindnessSection.styles'
import CTABox from './CTABox'
import { SectionWrapper } from './YouMeUsWePage.styles'

const ActsOfKindnessSection = () => (
  <SectionWrapper>
    <Heading>Acts of Kindness</Heading>
    <P variant="lg">
      Kindness makes the world go round, and during times like these it takes
      all of us - that includes you, me, us and we - to step up and show it,
      because right now these moments mean the most.
    </P>
    <P>
      Here are a few of the ways you can perform a random act of kindness to
      your community. Once you’ve decided on yours, hit the button below to make
      your commitment to kindness.
    </P>
    <Grid>
      <Item title="Organise a Pride quiz for your friends" />
      <Item title="Volunteer for an LGBT+ charity" />
      <Item title="Send a text to someone you haven’t spoken to in a while" />
      <Item title="Do a key worker's shopping" />
      <Item title="Facetime a friend who may be struggling" />
      <Item title="Send a postcard to a family member" />
      <Item title="Bake cookies for your neighbours" />
      <Item title="Send flowers to your bestie" />
      <Item title="Start a Pride book club to cheer up some friends" />
    </Grid>
    <Typeform id="RLnK9L">
      <CTABox
        title="Commit to kindness"
        cta={{
          text: 'I pledge to...',
        }}
        marginTop="xl"
      />
    </Typeform>
  </SectionWrapper>
)

export default ActsOfKindnessSection
