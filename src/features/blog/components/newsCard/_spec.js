import React from 'react'
import { shallow } from 'enzyme'
import NewsCard from '.'

describe(NewsCard.name, () => {
  it('renders with default values', () => {
    const title = 'Here is some news!'
    const filterType = {
      hexColour: '#304242',
      title: 'Amazing News!!',
    }
    const date = '2019-03-28T20:30+00:00'
    const wrapper = shallow(
      <NewsCard filterType={filterType} title={title} date={date} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
