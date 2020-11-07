import React from 'react'
import { render } from '@testing-library/react'
import { views } from './__mocks__'
import ViewsContainer from './ViewsContainer'

describe('ViewsContainer', () => {
  it('should render title', () => {
    const { getAllByText } = render(<ViewsContainer views={views} />)
    expect(getAllByText('Views')).toHaveLength(1)
  })

  it('should render 4 views', () => {
    const viewsCount = views.length
    const { getAllByText } = render(<ViewsContainer views={views} />)
    // Count should be double because slick carousel clones all its slides for infinite scrolling
    expect(getAllByText('test')).toHaveLength(viewsCount * 2)
  })
})
