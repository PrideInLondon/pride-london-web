import React from 'react'
import { shallow } from 'enzyme'
import ViewsContainer from '.'

describe('ViewsContainer', () => {
  it('should render with default values', () => {
    const wrapper = shallow(<ViewsContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})
