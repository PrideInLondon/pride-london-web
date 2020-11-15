import React from 'react'
import { colors } from '../../theme/colors'
import { RippedSection } from '../rippedSection'
import { RipVariant } from '../rippedSection/Rip.types'
import { Wrapper, HeroCopyWrapper } from './Hero.styles'
import { HeroProps } from './Hero.types'

const HeroCopy: React.FC = ({ children }) => {
  return <HeroCopyWrapper>{children}</HeroCopyWrapper>
}

export const Hero: React.FC<HeroProps> = ({ text, background, color }) => {
  const randomOption = (max: RipVariant): number =>
    Math.floor(Math.random() * Math.floor(max))

  return (
    <RippedSection
      rips={{
        bottom: {
          variant: randomOption(5),
          color: color ? color : colors.white,
        },
      }}
    >
      <Wrapper background={background}>
        <HeroCopy>{text}</HeroCopy>
      </Wrapper>
    </RippedSection>
  )
}
