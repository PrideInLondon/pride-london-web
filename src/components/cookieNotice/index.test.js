import React from 'react'
import { shallow, mount } from 'enzyme'
import CookieNotice from '.'

describe('<CookieNotice />', () => {
  beforeAll(() => {
    jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
  })

  afterAll(() => {
    React.useEffect.mockRestore()
  })

  it('renders and matches snapshot', () => {
    const wrapper = shallow(<CookieNotice />)
    expect(wrapper).toMatchSnapshot()
  })

  it('cookie consent and push it to dataLayer', () => {
    process.env.GATSBY_GTM_ID = ''
    global.window = Object.create({
      dataLayer: [],
    })
    const wrapper = mount(<CookieNotice />)
    wrapper.find('cookieNotice__CookieAgree').simulate('click', {
      preventDefault() {},
    })
    wrapper.setProps()
    wrapper.update()
    expect(global.window.dataLayer).toEqual([
      {
        event: 'cookieConsent',
      },
    ])
  })
})
