import React from 'react'
import { shallow } from 'enzyme'
import NewsCards from './'

describe(NewsCards.name, () => {
  it('renders with default values', () => {
    const selectedFilter = {
      hexColour: '#000000',
      title: 'Mock Filter',
    }
    const wrapper = shallow(
      <NewsCards selectedFilter={selectedFilter} articles={[]} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
