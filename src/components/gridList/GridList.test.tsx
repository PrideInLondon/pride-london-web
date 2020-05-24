import React from 'react'
import { axe } from 'jest-axe'
import { render } from '../../utils/testing-utils'
import { GridItem, GridList } from './index'

describe('GridList', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
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
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('GridItem', () => {
  it('should render as a list item', () => {
    const { container } = render(
      <GridItem title="Volunteer with an LGBT charity" />
    )
    expect(container.firstChild!.firstChild!.nodeName).toEqual('DIV')
  })

  it('should render as an anchor if given a to prop', () => {
    const linkText = 'Another CTA'
    const { container } = render(
      <GridItem title="Another idea" to="/somewhere" linkText={linkText} />
    )
    expect(container.firstChild!.firstChild!.nodeName).toEqual('A')
  })
})
