import React from 'react'
import { shallow } from 'enzyme'
import NewsCard from '.'

describe(NewsCard.name, () => {
  it('renders with default values', () => {
    const title = 'Here is some news!'
    const category = {
      hexColour: '#304242',
      title: 'Amazing News!!',
    }
    const datePublished = '2019-03-28T20:30+00:00'
    const slug = 'news/slug'
    const wrapper = shallow(
      <NewsCard
        category={category}
        title={title}
        datePublished={datePublished}
        slug={slug}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
