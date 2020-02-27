import React from 'react'
import { mount } from 'enzyme'
import { views } from './__mocks__'
import ViewsContainer from './ViewsContainer'

describe('ViewsContainer', () => {
  it('should render 4 views', () => {
    const viewsCount = views.length
    const wrapper = mount(<ViewsContainer views={views} />)
    // Count should be double because slick carousel clones all its slides for infinite scrolling
    expect(wrapper.find('ViewsCard')).toHaveLength(viewsCount * 2)
  })
})
