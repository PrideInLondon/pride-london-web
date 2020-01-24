import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import { mockData } from './__mocks__'
import Gallery from './index'

describe('<Gallery/>', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(<Gallery images={mockData} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
