import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hero } from './Hero'
import PinkHero from './backgrounds/hero-img-pink.jpg'

storiesOf('Hero', module).add('default', () => (
  <Hero background={PinkHero} text="Three line heading will go here" />
))
