import React from 'react'
import { RippedSection } from '../rippedSection'
import { getRandomInt } from '../../utils/number-utils'
import { Wrapper, HeroCopyWrapper } from './Hero.styles'
import { HeroProps, HERO_COLORS } from './Hero.types'

const HeroCopy: React.FC = ({ children }) => {
  return <HeroCopyWrapper>{children}</HeroCopyWrapper>
}

export const getColor = (color?: string): string => {
  const name = color || HERO_COLORS[getRandomInt(0, HERO_COLORS.length - 1)]
  return require(`./assets/${name}.jpg`)
}

export const Hero: React.FC<HeroProps> = ({ title, color }) => (
  <RippedSection
    rips={{
      bottom: {
        variant: 1, // until PR #1911 is merged in
        color: 'white',
      },
    }}
  >
    <Wrapper image={getColor(color)}>
      <HeroCopy>{title}</HeroCopy>
    </Wrapper>
  </RippedSection>
)
