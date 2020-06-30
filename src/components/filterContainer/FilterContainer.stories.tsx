import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, optionsKnob as options } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import FilterContainer from './FilterContainer'

const CATEGORIES = [
  { title: 'Drink', hexColour: colors.yellow },
  { title: 'Eat', hexColour: colors.tomato },
  { title: 'Party', hexColour: colors.indigo },
  { title: 'Shop', hexColour: colors.eucalyptusGreen },
  { title: 'Sleep', hexColour: colors.pink },
]

const CATEGORY_OPTIONS: { [key: string]: string } = CATEGORIES.reduce(
  (acc, { title }) => ({ ...acc, [title]: title }),
  {}
)

storiesOf(FilterContainer.name, module)
  .add('checkbox', () => (
    <FilterContainer
      filterType="checkbox"
      categories={object('categories', CATEGORIES)}
      selected={options(
        'selected',
        CATEGORY_OPTIONS,
        [CATEGORY_OPTIONS[CATEGORIES[0].title]],
        {
          display: 'inline-check',
        }
      )}
      handleFilterSelect={() => {}}
    />
  ))
  .add('radio', () => (
    <FilterContainer
      filterType="radio"
      categories={object('categories', CATEGORIES)}
      selected={options('selected', CATEGORY_OPTIONS, CATEGORIES[0].title, {
        display: 'inline-radio',
      })}
      handleFilterSelect={() => {}}
    />
  ))
