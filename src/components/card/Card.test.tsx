import React from 'react'
import { render } from '../../utilities/testing'
import { Card, CardImage, CardContent, CardTitle, CardFooter } from './Card'
import { CardProps } from './Card.types'
import umbrellaJpg from './umbrella.jpg'

const MockCard: React.FC<CardProps> = ({ variant }) => (
  <Card variant={variant} to="/">
    <CardImage
      image={{
        width: 200,
        height: 200,
        src: umbrellaJpg,
        srcSet: umbrellaJpg,
      }}
      alt="A rainbow umbrella"
    />
    <CardContent>
      <CardTitle>This is the title</CardTitle>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <CardFooter>This is the footer</CardFooter>
    </CardContent>
  </Card>
)

it('should render a card which is a link', () => {
  const { container } = render(<MockCard />)
  expect(container.firstChild?.nodeName).toBe('A')
})

it('should render a Gatsby Image', () => {
  const { container } = render(<MockCard />)
  expect(container.querySelector('.gatsby-image-wrapper')).toBeTruthy()
})

it('should render a column or row variant when the prop is passed', () => {
  const { container, rerender } = render(<MockCard variant="column" />)
  expect(container.firstChild).toHaveStyle('flex-direction: column;')
  rerender(<MockCard variant="row" />)
  expect(container.firstChild).toHaveStyle('flex-direction: row;')
})
