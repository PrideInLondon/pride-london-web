import React from 'react'
import { text, color, boolean, files } from '@storybook/addon-knobs'
import fridaKahlo from '../../../.storybook/assets/fridaKahlo.jpg'
import { colors } from '../../theme/colors'
import { GalleryCard } from './GalleryCard'

export default {
  title: 'GalleryCard',
}

export const Default = () => (
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
        fluid: {
          src: files('fixed', '.jpg, .png', [fridaKahlo], 'image')[0],
          srcSet: files('fixed', '.jpg, .png', [fridaKahlo], 'image')[0],
          // i can't check these are my storybook won't build
          // these may need updated once build is resolved
          aspectRatio: 21 / 9,
          sizes: '',
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
)

Default.story = {
  name: 'default',
}
