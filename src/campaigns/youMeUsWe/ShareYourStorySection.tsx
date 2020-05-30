import React from 'react'
import { P } from '../../components/typography'
import { Typeform } from '../../components/typeform'
import { Heading } from './ShareYourStorySection.styles'
import { SectionWrapper, MobileShareBar } from './YouMeUsWePage.styles'
import CTABox from './CTABox'

const ShareYourStorySection = () => (
  <SectionWrapper>
    <Heading id="share-your-story">Share your story</Heading>
    <P variant="lg">
      This year, we want to document and celebrate those everyday acts of
      solidarity that embody the spirit of Pride – the times when you've
      witnessed people standing up for the LGBT+ community by supporting you or
      those around you, whether they're a member of the community themselves or
      not.
    </P>
    <P>
      It could be someone taking a stand against bigotry and bullying, offering
      meaningful support during a difficult time, or helping you to feel
      accepted and loved when you needed it most. Whatever your experience of
      allyship, we want to hear about it!
    </P>
    <Typeform id="IGB4QL">
      <CTABox
        title="Want to share your story of allyship?"
        cta={{ text: 'Tell us your story' }}
        marginTop="xl"
        marginBottom={{ md: '0', default: 'xl' }}
      />
    </Typeform>
    <MobileShareBar variant="horizontal" />
  </SectionWrapper>
)

export default ShareYourStorySection
