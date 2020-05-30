import React from 'react'
import { P } from '../../components/typography'
import { CTALink } from '../../components/ctaLink'
import { Heading } from './SupportingTheCommunitySection.styles'
import CTABox from './CTABox'
import { SectionWrapper } from './YouMeUsWePage.styles'

const SupportingTheCommunitySection = () => (
  <SectionWrapper>
    <Heading>Supporting the Community</Heading>
    <P variant="lg">
      We're determined to continue to provide a platform to unite, support and
      celebrate every part of the LGBT+ community.
    </P>
    <P>
      With that being said, we're excited to launch our new Unity Fund. The
      Unity Fund will distribute one off grants to UK grassroots organisations
      that advocate and provide support for LGBT+ people.
    </P>
    <P>
      Any donation, big or small, will support Pride in London and raise vital
      funds for the Unity Fund, helping to address the needs of LGBT+ people in
      times of crisis and beyond.
    </P>
    <P width="100%">
      More information on the Unity Fund can be found{' '}
      {
        <CTALink to="/support-us/unity-fund" arrow={false}>
          here
        </CTALink>
      }
      .
    </P>
    <CTABox
      title="Support our community"
      cta={{ text: 'Donate now', to: 'https://donate.prideinlondon.org/' }}
      marginTop="lg"
    />
  </SectionWrapper>
)

export default SupportingTheCommunitySection
