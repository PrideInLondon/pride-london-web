import React from 'react'
import { shallow } from 'enzyme'
import NewsCards from '.'

describe(NewsCards.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <NewsCards
        articles={[
          {
            category: {},
            title: 'title',
            id: 'id',
            datePublished: '2019-03-28T20:30+00:00',
          },
        ]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
