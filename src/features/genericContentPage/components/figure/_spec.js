import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Figure from '.'
import 'jest-styled-components'

describe('<Figure/>', () => {
  const fields = {
    file: { 'en-GB': { url: 'src' } },
    description: { 'en-GB': 'Hello World' },
  }
  it('renders with default values', () => {
    const wrapper = shallow(<Figure {...fields} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
