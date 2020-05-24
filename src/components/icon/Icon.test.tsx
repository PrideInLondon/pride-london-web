import React from 'react'
import { axe } from 'jest-axe'
import { render } from '../../utils/testing-utils'
import { Icon } from './Icon'

describe('Icon', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Icon name="laptop" variant="indigo" />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
