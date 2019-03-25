import React from 'react'
import { shallow } from 'enzyme'
import FeaturedArticle from '.'

describe(FeaturedArticle.name, () => {
  it('renders with default values', () => {
    const title = 'Here is some news!'
    const filterType = {
      hexColour: '#304242',
      title: 'Amazing News!!',
    }
    const icon = 'iconstring'
    const props = {
      title,
      filterType,
      icon,
    }
    const wrapper = shallow(<FeaturedArticle {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
