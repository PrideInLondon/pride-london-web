import React from 'react'
import { shallow, mount } from 'enzyme'
import FilterButton from '../../../../components/filterButton'
import NewsCard from '../../components/newsCard'
import NewsContainer from '.'

const makeTestArticles = (quantity, category) => {
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
  ...makeTestArticles(9, 'General'),
]
const testCategories = [
  { title: 'All Articles', hexColour: '#FFD95E' },
  { title: 'Research', hexColour: '#2CDA9D' },
]

describe(NewsContainer.name, () => {
  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn(),
    }
  })
  afterAll(() => {
    global.___loader.enqueue.mockReset()
  })

  it('should render correctly', () => {
    const wrapper = shallow(
      <NewsContainer articles={testArticles} categories={testCategories} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should filter articles by filter when category button is clicked', () => {
    const instance = mount(
      <NewsContainer articles={testArticles} categories={testCategories} />
    )
    const researchCategoryFilterButton = instance.find(FilterButton).last()
    researchCategoryFilterButton.simulate('click')
    setTimeout(() => {
      expect(instance.find(NewsCard).length).toBe(2)
      instance.unmount()
    })
  })

  it('should show more articles when show more button is clicked', () => {
    const instance = mount(
      <NewsContainer articles={testArticles} categories={testCategories} />
    )
    expect(instance.find(NewsCard).length).toBe(9)
    const showMoreButton = instance.find('button').last()
    showMoreButton.simulate('click')
    setTimeout(() => {
      expect(instance.find(NewsCard).length).toBe(11)
    })
  })
})
