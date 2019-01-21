import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import theme from '../../theme/theme'
import Checkbox from './'

// SVGs need to be mocked as the SVG output causes Babel to throw
jest.mock('../../theme/assets/images/icon-check.svg', () => 'foo')

describe('Checkbox', () => {
  const id = 'test'
  const name = 'myInput'
  const value = 'selected'
  const label = 'hello'
  const handleChange = jest.fn()
  const checked = false

  const props = {
    id,
    name,
    value,
    label,
    handleChange,
    checked,
  }

  const wrapper = shallow(<Checkbox {...props} />, { context: { theme } })

  describe('@renders', () => {
    it('should render', () => {
      expect(wrapper).toMatchSnapshot()
    })
    describe('input', () => {
      it('should have id from props', () => {
        expect(wrapper.find('[type="checkbox"]').props().id).toBe(id)
      })

      it('should have name from props', () => {
        expect(wrapper.find('[type="checkbox"]').props().name).toBe(name)
      })

      it('should have value from props', () => {
        expect(wrapper.find('[type="checkbox"]').props().value).toBe(value)
      })
    })

    describe('label', () => {
      it('should have htmlFor from props', () => {
        expect(wrapper.find('[htmlFor="test"]')).toHaveLength(1)
      })

      it('should have text from props ', () => {
        expect(
          wrapper
            .find('[htmlFor="test"]')
            .text()
        ).toBe(label)
      })
    })
  })

  describe('@events', () => {
    const event = { target: { checked: true } }

    xit('should toggle its checked state when changed', () => {
      expect(wrapper.state().checked).toBeFalsy()
      wrapper.find('#test').simulate('change', event)
      expect(wrapper.state().checked).toBeTruthy()
    })

    it('should fire the handleChange prop with an event when changed', () => {
      wrapper.find('#test').simulate('change', event)
      expect(handleChange).toHaveBeenCalledWith(event)
    })
  })
})
