import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import { views } from './_mocks'
import ViewsContainer from '.'

describe('ViewsContainer', () => {
  it('should render with default values', () => {
    const wrapper = shallow(<ViewsContainer views={views} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render 2 views', () => {
    const viewsCount = views.length
    const wrapper = mount(<ViewsContainer views={views} />)
    expect(wrapper.find('img')).toHaveLength(viewsCount)
  })
})
