import React from 'react'
import { shallow, mount } from 'enzyme'
import HelmetComponent from './index'

describe('<HelmetComponent/>', () => {
  describe('Shallow Render', () => {
    const wrapper = shallow(<HelmetComponent title="test" />)

    it('Snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('has correct title prop', () => {
      expect(wrapper.props().title).toBe(`test | Pride in London`)
    })
  })

  describe('Description prop', () => {
    it('has correct default description prop', () => {
      const wrapper = mount(<HelmetComponent title="test" />)
      expect(wrapper.props().description).toBe(
        `In June and July 2020, enjoy events across the city culminating in London's iconic Pride parade and free Trafalgar Square performances`
      )
    })
    it('has default description prop can be overidden', () => {
      const wrapper = mount(
        <HelmetComponent title="test" description="testing" />
      )
      expect(wrapper.props().description).toBe(`testing`)
    })
  })
  describe('Full title exception', () => {
    it('has correct default description prop', () => {
      const wrapper = mount(
        <HelmetComponent title="Pride in London | 27th June 2020" />
      )
      expect(wrapper.props().title).toBe('Pride in London | 27th June 2020')
    })
  })
})
