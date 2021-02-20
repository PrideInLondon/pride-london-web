import React from 'react'
import { colors } from '../../theme/colors'
import { RippedSection } from '../rippedSection'
import { Wrapper, HeroCopyWrapper } from './Hero.styles'
import { HeroProps } from './Hero.types'

const HeroCopy: React.FC = ({ children }) => {
  return <HeroCopyWrapper>{children}</HeroCopyWrapper>
}

export const Hero: React.FC<HeroProps> = ({ text, background, color }) => (
  <RippedSection
    rips={{
      bottom: {
        variant: 1, // until PR #1911 is merged in
        color: color ? color : colors.white,
      },
    }}
  >
    <Wrapper background={background}>
      <HeroCopy>{text}</HeroCopy>
    </Wrapper>
  </RippedSection>
)
