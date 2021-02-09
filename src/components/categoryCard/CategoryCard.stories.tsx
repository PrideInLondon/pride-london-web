import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, color, files } from '@storybook/addon-knobs'
import fridaKahlo from '../../../.storybook/assets/fridaKahlo.jpg'
import { colors } from '../../theme/colors'
import { P } from '../typography'
import { CategoryCard } from './CategoryCard'

storiesOf('CategoryCard', module).add('default', () => (
  <CategoryCard
    to="#"
    image={{
      src: files('fixed', '.jpg, .png', [fridaKahlo], 'image')[0],
      srcSet: files('fixed', '.jpg, .png', [fridaKahlo], 'image')[0],
      aspectRatio: 21 / 9,
      sizes: '',
    }}
    category={{
      color: color('category name', colors.fuscia, 'category'),
      name: text('category name', 'Painting', 'category'),
    }}
    maxWidth={280}
  >
    <P mb="0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </P>
  </CategoryCard>
))
