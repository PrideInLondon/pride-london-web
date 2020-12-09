import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import { Quote } from './Quote'

describe('Quote', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Quote
        quote="I'm possessed by love, but isn't everybody?"
        caption="Freddie Mercury"
      />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
