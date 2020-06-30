import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, color, select, boolean } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import constants from '../../constants'
import FilterContainer from './FilterContainer'
import FilterLabel from './FilterLabel'

storiesOf(FilterContainer.name, module).add(FilterLabel.name, () => (
  <FilterLabel
    filterName={text('filterName', 'Party')}
    filterColour={color('filterColour', colors.indigo)}
    filterType={select(
      'filterType',
      constants.filterTypes,
      constants.filterTypes[0]
    )}
    isSelected={boolean('isSelected', true)}
    handleSelect={() => {}}
  />
))
