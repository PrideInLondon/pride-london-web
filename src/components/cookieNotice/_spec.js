import React from 'react'
import { shallow } from 'enzyme'
import CookieNotice from '.'

describe('<CookieNotice />', () => {
  it('renders and matches snapshot', () => {
    const wrapper = shallow(<CookieNotice />)
    expect(wrapper).toMatchSnapshot()
  })
})
