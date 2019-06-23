import React from 'react'
import { shallow } from 'enzyme'
import BlogHeader from '.'

jest.mock('gatsby-image/withIEPolyfill', () => {
  const Img = require('gatsby-image')
  return Img
})

describe(BlogHeader.name, () => {
  it('renders with default values', () => {
    const title = 'Title'
    const datePublished = '2019-03-28T20:30+00:00'
    const category = { title: 'Reseaarch', hexColour: '#eeeeee' }
    const wrapper = shallow(
      <BlogHeader
        title={title}
        category={category}
        datePublished={datePublished}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
