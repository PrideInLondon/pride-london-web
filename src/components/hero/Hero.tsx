import React from 'react'
import { RippedSection } from '../rippedSection'
import { H2, P } from '../typography'
import { getRandomInt } from '../../utils/number-utils'
import { Background, TextWrapper } from './Hero.styles'
import { HeroColor, HeroProps, HERO_COLORS } from './Hero.types'

export const getColor = (color?: HeroColor): HeroColor =>
  color || HERO_COLORS[getRandomInt(0, HERO_COLORS.length - 1)]

export const Hero: React.FC<HeroProps> = ({ title, subtitle, color }) => {
  const background = getColor(color)
  return (
    <RippedSection rips={{ bottom: { color: 'white' } }}>
      <Background image={require(`./assets/${background}.jpg`)}>
        <TextWrapper variant={background}>
          <H2 as="h1" color="currentcolor" mb={{ default: 'md', lg: 'lg' }}>
            {title}
          </H2>
          {subtitle && <P color="currentcolor">{subtitle}</P>}
        </TextWrapper>
      </Background>
    </RippedSection>
  )
}
