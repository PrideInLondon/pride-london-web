import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, optionsKnob as options } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { CategoryFilter } from './CategoryFilter'

const CATEGORIES = [
  { name: 'Drink', color: colors.yellow },
  { name: 'Eat', color: colors.tomato },
  { name: 'Party', color: colors.indigo },
  { name: 'Shop', color: colors.eucalyptusGreen },
  { name: 'Sleep', color: colors.pink },
]

const CATEGORY_OPTIONS: { [key: string]: string } = CATEGORIES.reduce(
  (acc, { name }) => ({ ...acc, [name]: name }),
  {}
)

storiesOf(CategoryFilter.name, module)
  .add('checkbox', () => (
    <CategoryFilter
      filterType="checkbox"
      categories={object('categories', CATEGORIES)}
      selected={options(
        'selected',
        CATEGORY_OPTIONS,
        [CATEGORY_OPTIONS[CATEGORIES[0].name]],
        {
          display: 'inline-check',
        }
      )}
      handleFilterSelect={() => {}}
    />
  ))
  .add('radio', () => (
    <CategoryFilter
      filterType="radio"
      categories={object('categories', CATEGORIES)}
      selected={options('selected', CATEGORY_OPTIONS, CATEGORIES[0].name, {
        display: 'inline-radio',
      })}
      handleFilterSelect={() => {}}
    />
  ))
