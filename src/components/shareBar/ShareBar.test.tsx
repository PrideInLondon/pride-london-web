import React from 'react'
import { axe } from 'jest-axe'
import { render } from '../../utils/testing-utils'
import { ShareBar } from './ShareBar'

describe('ShareBar', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <ShareBar
        variant="horizontal"
        content={{ title: 'foo', body: 'bar', url: 'https://baz.com' }}
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
