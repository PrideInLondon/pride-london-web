import React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import { Tag } from '../tag'
import { Card, CardTitle, CardContent } from '../card'
import { P } from '../typography'
import { Masonry } from '../masonry'
import { CategoryFilter } from './CategoryFilter'
import { CATEGORY_FILTER_VARIANTS } from './CategoryFilter.types'
import {
  ALL_CATEGORIES,
  ENTRIES,
  ENTRIES_WITH_CATEGORY_ARRAY,
} from './CategoryFilter.helpers'

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
                        ALL_CATEGORIES.find(
                          allCategory => allCategory.name === name
                        )?.color || ''
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
