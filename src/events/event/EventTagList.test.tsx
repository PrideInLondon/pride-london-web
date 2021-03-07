import React from 'react'

import { render } from '@testing-library/react'
import EventTagList from './EventTagList'

describe('The EventTag component', () => {
  it('renders', () => {
    const tags = ['Bananas', 'Golf', 'Shoe Spoons']
    const { getByText } = render(<EventTagList values={tags} />)
    tags.forEach(tag => {
      expect(getByText(tag)).toBeInTheDocument()
    })
  })
})
