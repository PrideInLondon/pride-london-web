import React from 'react'
import { axe } from 'jest-axe'
import { render } from '../../utils/testing-utils'
import logo from '../../assets/logo.png'
import { ImageElement, ImageCaption, ImageContainer } from './Image'
import { ImageContainerProps } from './Image.types'

const MockImage: React.FC<ImageContainerProps> = ({ variant }) => (
  <ImageContainer variant={variant} to="/">
    <ImageElement
      image={{
        width: 200,
        height: 200,
        src: logo,
        srcSet: logo,
      }}
      alt="Test Picture - PiL Logo"
    />
    <ImageCaption>This is the caption</ImageCaption>
  </ImageContainer>
)

it('should have no accessibility violations', async () => {
  const { container } = render(<MockImage />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('should render a card which is a link', () => {
  const { container } = render(<MockImage />)
  expect(container.firstChild?.nodeName).toBe('A')
})

it('should render a Gatsby Image', () => {
  const { container } = render(<MockImage />)
  expect(container.querySelector('.gatsby-image-wrapper')).toBeTruthy()
})

it('should render a column or row variant when the prop is passed', () => {
  const { container, rerender } = render(<MockImage variant="column" />)
  expect(container.firstChild).toHaveStyle('flex-direction: column;')
  rerender(<MockImage variant="row" />)
  expect(container.firstChild).toHaveStyle('flex-direction: row;')
})
