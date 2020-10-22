import React from 'react'
import { Story, Meta } from '@storybook/react'

import { colors } from '../../theme/colors'
import { Tag } from '../tag'
import { Card, CardTitle, CardContent } from '../card'
import { P } from '../typography'
import { Masonry } from '../masonry'
import { CategoryFilter, CategoryFilterProps } from './index'

export default {
  title: 'CategoryFilter',
  component: CategoryFilter,
} as Meta

type StoryProps = {
  category: {
    name: string
    color: string
  }
  text: string
}

const Template = <T extends StoryProps>(): Story<CategoryFilterProps & {
  entries: T[]
  render: (renderProps: {
    entries: (predicate: (entry: T) => string) => T[]
  }) => React.ReactNode
}> => args => (
  <CategoryFilter
    {...args}
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
)

const CATEGORIES = [
  { name: 'Drink', color: colors.yellow },
  { name: 'Eat', color: colors.tomato },
  { name: 'Party', color: colors.indigo },
]

export const Default = Template<StoryProps>().bind({})
Default.args = {
  variant: 'checkbox',
  categories: [
    { name: 'Everything', color: colors.eucalyptusGreen, isSelectAll: true },
    ...CATEGORIES,
  ],
  entries: [...Array(CATEGORIES.length * 2)].map((_, index) => ({
    text: `Entry #${index + 1}`,
    category: CATEGORIES[index % CATEGORIES.length],
  })),
}
