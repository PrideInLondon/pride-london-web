import React from 'react'
import { Wrapper, HeroCopyWrapper } from './Hero.styles'
import PinkHero from './backgrounds/hero-img-pink.jpg'

const HeroCopy: React.FC = ({ children }) => {
  return <HeroCopyWrapper>{children}</HeroCopyWrapper>
}

export const Hero = () => (
  <Wrapper background={PinkHero}>
    <HeroCopy>Three line heading will go here </HeroCopy>
  </Wrapper>
)
