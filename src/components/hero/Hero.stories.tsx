import React from 'react'
import { storiesOf } from '@storybook/react'
import { files, select, text } from '@storybook/addon-knobs'
import billboard from '../../../.storybook/assets/billboard.jpg'
import { Hero } from './Hero'
import { HERO_COLORS, HeroColor } from './Hero.types'

const initial: { [key: string]: HeroColor | undefined } = { random: undefined }

const variants = HERO_COLORS.reduce((result, item) => {
  result[item] = item
  return result
}, initial)

storiesOf('Hero', module).add('default', () => (
  <Hero
    title={text('title', 'Three line heading will go here')}
    subtitle={text(
      'subtitle',
      'The UK’s biggest, most diverse pride. A home for every part of London’s LGBT+ community.'
    )}
    color={select('color', variants, variants[0])}
    image={files('image', '.jpg, .png', [billboard])[0]}
  />
))
