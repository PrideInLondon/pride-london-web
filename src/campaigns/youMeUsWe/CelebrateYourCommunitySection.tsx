import React from 'react'
import { P } from '../../components/typography'
import { Typeform } from '../../components/typeform'
import { Heading } from './CelebrateYourCommunitySection.styles'
import { SectionWrapper, MobileShareBar } from './YouMeUsWePage.styles'
import CTABox from './CTABox'

const CelebrateYourCommunitySection = () => (
  <SectionWrapper>
    <Heading id="celebrate-your-community">Celebrate your community</Heading>
    <P variant="lg">
      This year, we want to document and celebrate those everyday acts of
      solidarity that embody the spirit of Pride – the times when you've
      witnessed someone in the LGBT+ community supporting you or those around
      you.
    </P>
    <P>
      It could be someone taking a stand against bigotry and bullying, offering
      meaningful support during a difficult time, or helping you to feel
      accepted and loved when you needed it most. Whatever your experience of
      allyship, we want to hear about it! Hit the button below to tell us your
      story, and it could even be featured on our site or social channels!
    </P>
    <Typeform id="IGB4QL">
      <CTABox
        title="Want to share your story of allyship?"
        cta={{ text: 'Tell us your story' }}
        marginTop="xl"
        marginBottom={{ md: '0', default: 'xl' }}
      />
    </Typeform>
    <MobileShareBar />
  </SectionWrapper>
)

export default CelebrateYourCommunitySection
