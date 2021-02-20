import React from 'react'
import { RippedSection } from '../rippedSection'
import { Wrapper, HeroCopyWrapper } from './Hero.styles'
import { HeroProps } from './Hero.types'

const HeroCopy: React.FC = ({ children }) => {
  return <HeroCopyWrapper>{children}</HeroCopyWrapper>
}

export const Hero: React.FC<HeroProps> = ({ title, image }) => (
  <RippedSection
    rips={{
      bottom: {
        variant: 1, // until PR #1911 is merged in
        color: 'white',
      },
    }}
  >
    <Wrapper image={image}>
      <HeroCopy>{title}</HeroCopy>
    </Wrapper>
  </RippedSection>
)
