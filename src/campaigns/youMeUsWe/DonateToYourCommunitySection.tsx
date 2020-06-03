import React from 'react'
import { P } from '../../components/typography'
import { CTALink } from '../../components/ctaLink'
import { Heading } from './DonateToYourCommunitySection.styles'
import CTABox from './CTABox'
import { SectionWrapper } from './YouMeUsWePage.styles'

const DonateToYourCommunitySection = () => (
  <SectionWrapper>
    <Heading id="donate-to-your-community">Donate to your community</Heading>
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
      Donations will contribute to the Unity Fund, helping to address the needs
      of LGBT+ people, and also support Pride in London’s vital work. So, if
      you're able to donate, any amount big or small will make a real difference
      to our community.
    </P>
    <P width="100%">
      More information on the Unity Fund and other ways to support it can be
      found{' '}
      {
        <CTALink to="/unity-fund" arrow={false}>
          here
        </CTALink>
      }
      .
    </P>
    <CTABox
      title="Support our community"
      cta={{
        text: 'Donate now',
        to:
          'https://donate.prideinlondon.org/?campaign=unity&source=ymuw&medium=button',
      }}
      marginTop="lg"
    />
  </SectionWrapper>
)

export default DonateToYourCommunitySection
