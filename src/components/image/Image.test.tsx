import React from 'react'
import { axe } from 'jest-axe'
import { render } from '../../utils/testing-utils'
import logo from '../../assets/logo.png'
import { Image } from './Image'
import { ImageProps } from './Image.types'

const MockImage: React.FC<ImageProps> = () => (
  <Image
    image={{
      width: 200,
      height: 200,
      src: logo,
      srcSet: logo,
    }}
    alt="Test Picture - PiL Logo"
    caption="Test Caption"
  />
)

it('should have no accessibility violations', async () => {
  const { container } = render(
    <MockImage
      image={{
        width: 200,
        height: 200,
        src: logo,
        srcSet: logo,
      }}
      alt="Test Picture - PiL Logo"
      caption="Test Caption"
    />
  )
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('should render a Gatsby Image', () => {
  const { container } = render(
    <MockImage
      image={{
        width: 200,
        height: 200,
        src: logo,
        srcSet: logo,
      }}
      alt="Test Picture - PiL Logo"
      caption="Test Caption"
    />
  )
  expect(container.querySelector('.gatsby-image-wrapper')).toBeTruthy()
})

it('should render a caption', () => {
  const { container } = render(
    <MockImage
      image={{
        width: 200,
        height: 200,
        src: logo,
        srcSet: logo,
      }}
      alt="Test Picture - PiL Logo"
      caption="Test Caption"
    />
  )
  expect(container).toHaveTextContent('Test Caption')
})
