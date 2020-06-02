import React from 'react'
import { P } from '../../components/typography'
import { Typeform } from '../../components/typeform'
import { Heading, Grid, Item } from './BeThereForYourCommunitySection.styles'
import CTABox from './CTABox'
import { SectionWrapper } from './YouMeUsWePage.styles'

const BeThereForYourCommunitySection = () => (
  <SectionWrapper>
    <Heading id="be-there-for-your-community">
      Be there for your community
    </Heading>
    <P variant="lg">
      Sometimes it only takes small but meaningful actions to show that you're
      there for your fellow community members. During times like these it takes
      all of us - that includes you, me, us and we - to step up and show it.
    </P>
    <P>
      We want to hear what action(s) you pledge to take to demonstrate your
      allyship. Select from our suggestions below, or even better, come up with
      your own! Once you've decided on yours, hit the button below our
      suggestions to make your pledge.
    </P>
    <Grid>
      <Item title="Call out all forms of racism, Islamophobia, biphobia, homophobia and transphobia" />
      <Item title="Ask for pronouns each time you meet someone new" />
      <Item title="Follow, listen to and amplify queer BAME and trans voices online" />
      <Item title="Actively engage with marginalised queer voices through film and media" />
      <Item title="Educate friends and family about marginalised LGBT+ communities" />
      <Item title="Participate in all international LGBT+ days, not just those including you" />
      <Item title="Read books and thought pieces by marginalised queer authors" />
      <Item title="Show up and support queer performers hosting virtual shows and events" />
      <Item title="Support LGBT+ owned businesses and organisations" />
    </Grid>
    <Typeform id="RLnK9L">
      <CTABox
        title="How will you demonstrate allyship?"
        cta={{
          text: 'I pledge to...',
        }}
        marginTop="xl"
      />
    </Typeform>
  </SectionWrapper>
)

export default BeThereForYourCommunitySection
