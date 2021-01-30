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
  { name: 'Drink', color: colors.tomato },
  { name: 'Eat', color: colors.pink },
  { name: 'Party', color: colors.greyBlue },
  { name: 'Shop', color: colors.eucalyptusGreen },
  { name: 'Sleep', color: colors.fuscia },
]

const ALL_CATEGORIES: Category[] = [
  { name: 'Everything', color: colors.yellow, isSelectAll: true },
  ...CATEGORIES,
]

const ENTRIES = [...Array(CATEGORIES.length * 2)].map((_, index) => ({
  text: `Entry #${index + 1}`,
  category: CATEGORIES[index % CATEGORIES.length],
}))

const ENTRIES_WITH_CATEGORY_ARRAY = [...Array(CATEGORIES.length * 2)].map(
  (_, index) => ({
    text: `Entry #${index + 1}`,
    category: [...Array(index % CATEGORIES.length)].map((_, i) => {
      return CATEGORIES[(index + i) % CATEGORIES.length].name
    }),
  })
)

storiesOf(CategoryFilter.name, module)
  .add('checkbox', () => (
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
              <Card key={text} to="#" style={{ margin: 16 }}>
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
  .add('checkbox with multi-category entries', () => (
    <CategoryFilter
      variant={select(
        'variant',
        CATEGORY_FILTER_VARIANTS,
        CATEGORY_FILTER_VARIANTS[0]
      )}
      categories={ALL_CATEGORIES}
      entries={ENTRIES_WITH_CATEGORY_ARRAY}
      render={({ entries }) => (
        <Masonry columns={{ default: 1, md: 2 }}>
          {entries(({ category }) => category).map(({ text, category }) => (
            <Card key={text} to="#" style={{ margin: 16 }}>
              <CardContent>
                <CardTitle>{text}</CardTitle>
                {category.map(name => {
                  return (
                    <Tag
                      color={
                        ALL_CATEGORIES.find(category => category.name === name)
                          ?.color || ''
                      }
                    >
                      {name}
                    </Tag>
                  )
                })}
                <P marginTop="md">Lorem ipsum</P>
              </CardContent>
            </Card>
          ))}
        </Masonry>
      )}
    />
  ))
