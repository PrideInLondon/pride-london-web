import React from 'react'
import { RippedSection } from '../rippedSection'
import { getRandomInt } from '../../utils/number-utils'
import { Background, Title } from './Hero.styles'
import { HeroColor, HeroProps, HERO_COLORS } from './Hero.types'

export const getColor = (color?: HeroColor): HeroColor =>
  color || HERO_COLORS[getRandomInt(0, HERO_COLORS.length - 1)]

export const Hero: React.FC<HeroProps> = ({ title, color }) => {
  const background = getColor(color)
  return (
    <RippedSection rips={{ bottom: { color: 'white' } }}>
      <Background image={require(`./assets/${background}.jpg`)}>
        <Title
          as="h1"
          color="white"
          ml="xxl"
          display="flex"
          alignItems="center"
          variant={background}
        >
          {title}
        </Title>
      </Background>
    </RippedSection>
  )
}
