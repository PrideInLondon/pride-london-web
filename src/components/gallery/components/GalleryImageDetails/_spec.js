import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import { mockData } from '../../_mocks'
import GalleryImageDetails from './index'

describe('<Gallery/>', () => {
  it('should render with default values and match snapshot', () => {
    const wrapper = shallow(<GalleryImageDetails />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render and match snapshot', () => {
    const wrapper = shallow(<GalleryImageDetails {...mockData[0]} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
