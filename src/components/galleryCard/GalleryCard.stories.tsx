import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, color, boolean, files, number } from '@storybook/addon-knobs'
import fridaKahlo from '../../../.storybook/assets/fridaKahlo.jpg'
import { colors } from '../../theme/colors'
import { GalleryCard } from './GalleryCard'

storiesOf('GalleryCard', module).add('default', () => (
  <GalleryCard
    to="#"
    artist={{
      name: text('name', 'Frida Kahlo', 'artist'),
    }}
    artwork={{
      year: text('year', '1940', 'artwork'),
      category: {
        color: color('category name', colors.fuscia, 'category'),
        name: text('category name', 'Painting', 'category'),
      },
      title: text(
        'title',
        'Self-Portrait with Thorn Necklace and Hummingbird',
        'artwork'
      ),
      guidePrice: text('guidePrice', '$980,000', 'artwork'),
      sold: boolean('sold', true, 'artwork'),
      image: {
        fixed: {
          src: files('fixed', '.jpg, .png', [fridaKahlo], 'image')[0],
          srcSet: files('fixed', '.jpg, .png', [fridaKahlo], 'image')[0],
          width: number('width', 277, {}, 'image'),
          height: number('height', 360, {}, 'image'),
        },
        alt: text(
          'alt',
          'Self-Portrait with Thorn Necklace and Hummingbird',
          'artwork'
        ),
      },
    }}
    maxWidth={280}
  />
))
