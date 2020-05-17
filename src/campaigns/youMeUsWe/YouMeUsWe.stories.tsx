import React from 'react'
import { storiesOf } from '@storybook/react'
// import { select } from '@storybook/addon-knobs'
import { GridList, GridItem } from './GridList'

storiesOf('You Me Us We', module).add('6 grid items', () => {
  return (
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
  )
})
