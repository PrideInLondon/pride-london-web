import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import GenericContent from '.'

describe('<GenericContent/>', () => {
  it('renders with default values', () => {
    const content = {}
    const wrapper = shallow(<GenericContent content={content} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
