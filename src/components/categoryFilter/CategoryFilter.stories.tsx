import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { colors } from '../../theme/colors'
import { Tag } from '../tag'
import { Card, CardTitle, CardContent } from '../card'
import { P } from '../typography'
import { Masonry } from '../masonry'
import { CategoryFilter } from './CategoryFilter'
import { Category, CATEGORY_FILTER_VARIANTS } from './CategoryFilter.types'

const CATEGORIES: Category[] = [
  { name: 'Drink', color: colors.yellow },
  { name: 'Eat', color: colors.tomato },
  { name: 'Party', color: colors.indigo },
]

const ALL_CATEGORIES: Category[] = [
  { name: 'Everything', color: colors.eucalyptusGreen, isSelectAll: true },
  ...CATEGORIES,
]

const ENTRIES = [...Array(CATEGORIES.length * 2)].map((_, index) => ({
  text: `Entry #${index + 1}`,
  category: CATEGORIES[index % CATEGORIES.length],
}))

storiesOf(CategoryFilter.name, module).add('checkbox', () => (
  <CategoryFilter
    variant={select(
      'variant',
      CATEGORY_FILTER_VARIANTS,
      CATEGORY_FILTER_VARIANTS[0]
    )}
    categories={ALL_CATEGORIES}
    entries={ENTRIES}
    render={({ entries }) => (
      <Masonry columns={{ default: 1, md: 2 }}>
        {entries(({ category: { name } }) => name).map(
          ({ text, category: { color, name } }) => (
            <Card to="#" style={{ margin: 16 }}>
              <CardContent>
                <CardTitle>{text}</CardTitle>
                <Tag color={color}>{name}</Tag>
                <P marginTop="md">Lorem ipsum</P>
              </CardContent>
            </Card>
          )
        )}
      </Masonry>
    )}
  />
))
