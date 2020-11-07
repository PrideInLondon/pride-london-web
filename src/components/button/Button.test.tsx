import React from 'react'
import { axe } from 'jest-axe'
import { render, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('shoud render a button if there is no to prop', () => {
    const { queryByRole } = render(<Button />)
    expect(queryByRole('button')).toBeTruthy()
  })

  it('renders a normal a tag if the to prop is https', () => {
    const { queryByRole } = render(<Button to="https://google.com" />)
    expect(queryByRole('link')).toBeTruthy()
  })

  it('should fire function when given an onClick property', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button onClick={handleClick}>Add One More</Button>
    )
    fireEvent.click(getByText('Add One More'))
    expect(handleClick).toHaveBeenCalledTimes(1)
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
