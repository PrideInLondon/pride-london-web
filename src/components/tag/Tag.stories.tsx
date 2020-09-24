import React from 'react'
import { select, text, color } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { Tag } from './Tag'
import { TAG_VARIANTS } from './Tag.types'

export default {
  title: 'Tag',
}

export const Default = () => (
  <Tag
    color={color('Color', colors.indigo)}
    variant={select('Variant', TAG_VARIANTS, TAG_VARIANTS[0])}
  >
    {text('Text', 'Pride in London')}
  </Tag>
)

Default.story = {
  name: 'default',
}
