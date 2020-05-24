import React from 'react'
import { P } from '../../components/typography'
import { Heading } from './SupportingTheCommunitySection.styles'
import CTABox from './CTABox'

const SupportingTheCommunitySection = () => (
  <>
    <Heading>Supporting the Community</Heading>
    <P variant="lg">
      {/* TODO: replace with real content */}
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </P>
    <P>
      {/* TODO: replace with real content */}
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </P>
    <CTABox
      title="Support the community fund"
      cta={{ text: 'Donate now', to: 'https://donate.prideinlondon.org/' }}
      marginTop="lg"
    />
  </>
)

export default SupportingTheCommunitySection
