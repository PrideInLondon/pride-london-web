import React from 'react'
import { shallow } from 'enzyme'
import NewsFilter from '.'

describe(NewsFilter.name, () => {
  it('renders with default values', () => {
    const filterType = {
      hexColour: '#000000',
      title: 'Mock Filter',
    }
    const wrapper = shallow(
      <NewsFilter filterType={filterType} handleClick={() => {}} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  // TODO: Add more tests for different filter types?
})
