import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import NewsContainer, { pageSize } from './NewsContainer'

jest.mock('./FeaturedArticleContainer', () => () => <div />)

const makeTestArticles = (quantity: any, category: any) => {
  const array = []
  for (let i = 0; i < quantity; i++) {
    array.push({
      id: `${i}-${category}`,
      slug: 'news-and-views/title',
      title: 'Title',
      readTime: null,
      datePublished: '2019-12-19',
      category: { title: `${category}`, hexColour: '#2CDA9D' },
    })
  }
  return array
}

const testArticles = [
  ...makeTestArticles(2, 'Research'),
  ...makeTestArticles(15, 'General'),
]
const testCategories = [
  { title: 'All Articles', hexColour: '#FFD95E' },
  { title: 'Research', hexColour: '#2CDA9D' },
]

describe(NewsContainer.name, () => {
  it('should filter articles by filter when category button is clicked', () => {
    render(
      <NewsContainer articles={testArticles} categories={testCategories} />
    )
    const researchCategoryFilter = screen.getByLabelText('Research')
    fireEvent.click(researchCategoryFilter)
    expect(screen.getAllByRole('link').length).toBe(2)
    const allArticlesCategoryFilter = screen.getByLabelText('All Articles')
    fireEvent.click(allArticlesCategoryFilter)
    expect(screen.getAllByRole('link').length).toBe(pageSize)
  })

  it('should show more articles when show more button is clicked', () => {
    render(
      <NewsContainer articles={testArticles} categories={testCategories} />
    )
    const showMoreButton = screen.getByRole('button')
    fireEvent.click(showMoreButton)
    expect(screen.getAllByRole('link').length).toBe(17)
  })
})
