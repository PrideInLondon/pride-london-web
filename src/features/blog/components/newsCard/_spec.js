import React from 'react'
import { shallow } from 'enzyme'
import NewsCard from './'

describe(NewsCard.name, () => {
  it('renders with default values', () => {
    const title = 'Here is some news!'
    const filterType = {
      hexColour: '#304242',
      title: 'Amazing News!!',
    }
    const wrapper = shallow(<NewsCard filterType={filterType} title={title} />)
    expect(wrapper).toMatchSnapshot()
  })
})
