import React from 'react'
import { storiesOf } from '@storybook/react'
import { GridList, GridItem } from './index'

storiesOf('GridList', module).add('6 grid items', () => (
  <GridList>
    <GridItem title="Volunteer with an LGBT charity" />
    <GridItem
      title="Buy YMUW Merchandise"
      to="/merchandise"
      linkText="Visit the store"
    />
    <GridItem title="Another idea" />
    <GridItem title="Another idea" />
    <GridItem title="Another idea" to="/somewhere" linkText="Another CTA" />
    <GridItem title="Another idea" />
  </GridList>
))
