import React from 'react'
import { RippedSection } from '../rippedSection'
import { H2 } from '../typography'
import { getRandomInt } from '../../utils/number-utils'
import { Wrapper } from './Hero.styles'
import { HeroProps, HERO_COLORS } from './Hero.types'

export const getColor = (color?: string): string => {
  const name = color || HERO_COLORS[getRandomInt(0, HERO_COLORS.length - 1)]
  return require(`./assets/${name}.jpg`)
}

export const Hero: React.FC<HeroProps> = ({ title, color }) => (
  <RippedSection rips={{ bottom: { color: 'white' } }}>
    <Wrapper image={getColor(color)}>
      <H2 as="h1" color="white" ml="xxl" display="flex" alignItems="center">
        {title}
      </H2>
    </Wrapper>
  </RippedSection>
)
