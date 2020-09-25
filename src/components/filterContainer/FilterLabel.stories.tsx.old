import React from 'react'
import { text, color, select, boolean } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { FILTER_TYPES } from './FilterLabel.types'
import FilterLabel from './FilterLabel'

export default {
  title: 'FilterLabel',
}

export const Default = () => (
  <FilterLabel
    filterName={text('filterName', 'Party')}
    filterColour={color('filterColour', colors.indigo)}
    filterType={select('filterType', FILTER_TYPES, FILTER_TYPES[0])}
    isSelected={boolean('isSelected', true)}
    handleSelect={() => {}}
  />
)

Default.storyName = 'default'
