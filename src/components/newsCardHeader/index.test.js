import React from 'react'
import { shallow } from 'enzyme'
import NewsCardHeader from '.'

describe(NewsCardHeader.name, () => {
  it('renders with default values', () => {
    const category = { hexColour: '#eeeeee', title: 'title' }
    const datePublished = '2019-03-28T20:30+00:00'
    const wrapper = shallow(
      <NewsCardHeader category={category} datePublished={datePublished} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
