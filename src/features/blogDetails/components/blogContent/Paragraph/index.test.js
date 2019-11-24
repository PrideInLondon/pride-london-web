import React from 'react'
import { shallow } from 'enzyme'
import Paragraph from '.'

describe(Paragraph.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Paragraph>somecontent</Paragraph>)
    expect(wrapper).toMatchSnapshot()
  })
})
