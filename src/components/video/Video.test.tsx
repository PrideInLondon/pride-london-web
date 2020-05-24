import React from 'react'
import { axe } from 'jest-axe'
import { render, fireEvent, queryByTitle } from '@testing-library/react'
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
  const { queryAllByRole, container } = render(<Video {...props} />)
  expect(queryAllByRole('button')).toBeTruthy()
  queryByTitle(container, 'Pride in London presents: You! Me! Us! We!')
})

it.each`
  clicked
  ${'clickable image'}
  ${'play video'}
`(
  'should remove the cover image and button when $clicked is clicked',
  ({ clicked }) => {
    const { queryAllByRole, getByTitle, container } = render(
      <Video {...props} />
    )
    act(() => {
      fireEvent.click(getByTitle(clicked))
    })
    expect(queryAllByRole('button')).toHaveLength(0)
    expect(
      queryByTitle(container, 'Pride in London presents: You! Me! Us! We!')
    ).toBeTruthy()
  }
)

it('should have no accessibility violations', async () => {
  const { container } = render(<Video {...props} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})

it('should have no accessibility violations once clicked', async () => {
  const { getByTitle, container } = render(<Video {...props} />)
  act(() => {
    fireEvent.click(getByTitle('clickable image'))
  })
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
