import React from 'react'
import { shallow } from 'enzyme'
import mockData from './_mock'
import Carousel from '.'

describe(Carousel.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Carousel {...mockData.data.target.fields} />)
    expect(wrapper).toMatchSnapshot()
  })
})
