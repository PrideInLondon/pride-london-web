import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'
import { views } from './__mocks__'
import ViewsContainer from '.'

describe('ViewsContainer', () => {
  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn(),
    }
  })
  afterAll(() => {
    global.___loader.enqueue.mockReset()
  })
  it('should render with default values', () => {
    const wrapper = shallow(<ViewsContainer views={views} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render 4 views', () => {
    const viewsCount = views.length
    const wrapper = mount(<ViewsContainer views={views} />)
    // Count should be double because slick carousel clones all its slides for infinite scrolling
    expect(wrapper.find('ViewsCard')).toHaveLength(viewsCount * 2)
  })
})
