import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Quote>
        Aliquam condimentum velit vitae elit suscipit pharetra. Maecenas
        venenatis purus sed dolor ornare vehicula orci nulla magna.
      </Quote>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
