import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hero } from './Hero'
import PinkHero from './assets/pink.jpg'

storiesOf('Hero', module).add('default', () => (
  <Hero title="Three line heading will go here" image={PinkHero} />
))
