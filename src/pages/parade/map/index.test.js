import React from 'react'
import { shallow } from 'enzyme'
import ParadeMap from '.'

describe(ParadeMap.name, () => {
  it('render correctly', () => {
    process.env.GATSBY_PARADE_MAP_ID = null
    const wrapper = shallow(<ParadeMap />)
    expect(wrapper).toMatchSnapshot()
  })
})
