import React from 'react'
import { P, H3 } from '../../components/typography'
import { Box } from '../../components/box'
import { Button } from '../../components/button'
import { Heading, Content } from './SupportingTheCommunitySection.styles'

const SupportingTheCommunitySection = () => (
  <>
    <Heading>Supporting the Community</Heading>
    <Content>
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
    </Content>
    <Box
      display={{ default: 'block', md: 'flex' }}
      alignItems="center"
      justifyContent="spaceBetween"
      maxWidth={1050}
      width={1}
      marginTop="lg"
    >
      <H3 mb={{ default: 'lg', md: '0' }}>Support the community fund</H3>
      <Button ml="auto" to="https://donate.prideinlondon.org/">
        Donate now
      </Button>
    </Box>
  </>
)

export default SupportingTheCommunitySection
