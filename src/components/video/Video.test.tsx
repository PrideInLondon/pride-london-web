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
  const { queryByRole } = render(<Video {...props} />)
  expect(queryByRole('img')).toBeTruthy()
  expect(queryByRole('button')).toBeTruthy()
})

it.each`
  clicked
  ${'button'}
  ${'img'}
`(
  'should remove the cover image and button when $clicked is clicked',
  ({ clicked }) => {
    const { queryByRole, getByRole } = render(<Video {...props} />)
    act(() => {
      fireEvent.click(getByRole(clicked))
    })
    expect(queryByRole('img')).toBeFalsy()
    expect(queryByRole('button')).toBeFalsy()
  }
)

it('should have no accessibility violations', async () => {
  const { container } = render(<Video {...props} />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
