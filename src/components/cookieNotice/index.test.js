import React from 'react'
import { mount } from 'enzyme'
import CookieNotice from '.'

describe('<CookieNotice />', () => {
  beforeAll(() => {
    jest.spyOn(React, 'useEffect').mockImplementation(React.useLayoutEffect)
  })

  afterAll(() => {
    React.useEffect.mockRestore()
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
