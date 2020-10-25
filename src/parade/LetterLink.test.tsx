import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import theme from '../theme/theme'
import LetterLink from './LetterLink'

describe('LetterLink', () => {
  it('should render disabled StyledLetterLink with the correct styles', () => {
    const { queryByText } = render(<LetterLink letter="a" isDisabled />)
    expect(queryByText(/a/i)).toHaveStyle('color: grey')
  })

  it('should render active StyledLetterLink with the correct styles', () => {
    const { queryByRole } = render(<LetterLink letter="a" isActive />)
    expect(queryByRole('link')).toHaveStyle(`color :${theme.colors.indigo}`)
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(<LetterLink letter="a" isActive />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
