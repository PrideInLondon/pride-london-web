import React from 'react'
import { render, screen } from '@testing-library/react'
import { views } from './__mocks__'
import ViewsContainer from './ViewsContainer'

describe('ViewsContainer', () => {
  it('should render title', () => {
    render(<ViewsContainer views={views} />)
    expect(screen.getAllByText('Views')).toHaveLength(1)
  })

  it('should render 4 views', () => {
    const viewsCount = views.length
    render(<ViewsContainer views={views} />)
    // Count should be double because slick carousel clones all its slides for infinite scrolling
    expect(screen.getAllByText('test')).toHaveLength(viewsCount * 2)
  })
})
