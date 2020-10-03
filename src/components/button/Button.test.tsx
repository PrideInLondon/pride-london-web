import React from 'react'
import { axe } from 'jest-axe'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
  it('shoud render a button if there is no to prop', () => {
    const { queryByRole } = render(<Button />)
    expect(queryByRole('button')).toBeTruthy()
    expect(queryByRole('link')).toBeFalsy()
  })

  it('renders a normal a tag if the to prop is https', () => {
    const { queryByRole } = render(<Button to="https://google.com" />)
    expect(queryByRole('link')).toBeTruthy()
    expect(queryByRole('button')).toBeFalsy()
  })

  it('should fire function when given an onClick property', () => {
    let counter = 0
    const handleClick = () => (counter += 1)
    const { getByText } = render(
      <Button onClick={handleClick}>Add One More</Button>
    )
    userEvent.click(getByText('Add One More'))
    expect(counter).toBe(1)
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(
      <Button variant="outline-white" to="/">
        Home
      </Button>
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
