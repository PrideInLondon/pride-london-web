import React from 'react'
import { shallow } from 'enzyme'
import NewsCategory from '.'

describe(NewsCategory.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <NewsCategory category={{ hexColour: '#eeeeee', title: 'title' }} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
