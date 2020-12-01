import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import LetterLink from './LetterLink'

describe('LetterLink', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<LetterLink letter="a" isActive />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
