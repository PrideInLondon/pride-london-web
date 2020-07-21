import React from 'react'
import { storiesOf } from '@storybook/react'
import { colors } from '../../theme/colors'
import { Card, CardContent, CardTitle } from '../card'
import { Masonry } from './Masonry'

const ITEMS = [
  { height: 300, color: colors.indigo },
  { height: 200, color: colors.green },
  { height: 300, color: colors.fuscia },
  { height: 350, color: colors.red },
  { height: 200, color: colors.darkCyan },
  { height: 300, color: colors.yellow },
  { height: 300, color: colors.lightGrey },
  { height: 350, color: colors.skyBlue },
  { height: 200, color: colors.pink },
]

storiesOf(Masonry.name, module).add('default', () => (
  <Masonry columns={{ default: 1, md: 2, lg: 3 }}>
    {ITEMS.map(({ height, color }, index) => (
      <Card key={color} to="#">
        <CardContent>
          <CardTitle>Card #{index + 1}</CardTitle>
          <div style={{ height, backgroundColor: color }} />
        </CardContent>
      </Card>
    ))}
  </Masonry>
))
