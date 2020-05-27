import React from 'react'
import { axe } from 'jest-axe'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import Video from './Video'

const props = {
  videoId: 'TIExvoJXwKE',
  coverImage: {
    image: { width: 650, height: 400, src: 'image', srcSet: 'imageSrcSet' },
    alt: 'The Pride in London Logo',
  },
  caption: 'Pride in London presents: You! Me! Us! We!',
}

it('should render a cover image and button', () => {
  const { queryAllByRole, queryByTitle } = render(<Video {...props} />)
  expect(queryAllByRole('button')).toHaveLength(2)
  expect(queryByTitle('Pride in London presents: You! Me! Us! We!')).toBeFalsy()
})

it.each`
  index
  ${0}
  ${1}
`(
  'should remove the cover image and button when button $index is clicked',
  ({ index }) => {
    const { queryAllByRole, queryByTitle } = render(<Video {...props} />)
    const elements = queryAllByRole('button')
    act(() => {
      fireEvent.click(elements[index])
    })
    expect(queryAllByRole('button')).toHaveLength(0)
    expect(
      queryByTitle('Pride in London presents: You! Me! Us! We!')
    ).toBeTruthy()
  }
)

it('should have no accessibility violations', async () => {
  const { container } = render(<Video {...props} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('should have no accessibility violations once clicked', async () => {
  const { queryAllByRole, container } = render(<Video {...props} />)
  act(() => {
    fireEvent.click(queryAllByRole('button')[0])
  })
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
