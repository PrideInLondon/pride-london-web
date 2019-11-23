import React from 'react'
import { shallow } from 'enzyme'
import Image from '.'

describe(Image.name, () => {
  const fields = { file: { 'en-GB': { url: 'src' } } }
  it('renders with default values', () => {
    const wrapper = shallow(<Image {...fields} />)
    expect(wrapper).toMatchSnapshot()
  })
})
