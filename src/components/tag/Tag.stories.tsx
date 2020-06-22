import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text, color } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { Tag } from './Tag'

const variants = {
  Primary: 'primary',
  Outline: 'outline',
} as const

storiesOf('Tag', module).add('default', () => (
  <Tag
    color={color('Color', colors.indigo)}
    variant={select('Variant', variants, variants.Primary)}
  >
    {text('Text', 'Pride in London')}
  </Tag>
))
