import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, color, select, boolean } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { FILTER_TYPES } from './FilterLabel.types'
import FilterContainer from './FilterContainer'
import FilterLabel from './FilterLabel'

storiesOf(FilterContainer.name, module).add(FilterLabel.name, () => (
  <FilterLabel
    filterName={text('filterName', 'Party')}
    filterColour={color('filterColour', colors.indigo)}
    filterType={select('filterType', FILTER_TYPES, FILTER_TYPES[0])}
    isSelected={boolean('isSelected', true)}
    handleSelect={() => {}}
  />
))
