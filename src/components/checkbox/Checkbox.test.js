import React from 'react'
import { shallow, mount } from 'enzyme'
import theme from '../../theme/theme'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  const id = 'test'
  const name = 'myInput'
  const value = 'selected'
  const label = 'hello'
  const handleChange = jest.fn()

  const props = {
    id,
    name,
    value,
    label,
    handleChange,
    checked: false,
  }

  let wrapper

  describe('testing rendering', () => {
    beforeAll(() => {
      wrapper = shallow(<Checkbox {...props} />, { context: { theme } })
    })

    describe('Props', () => {
      it('has id from props', () => {
        expect(wrapper.find('[type="checkbox"]').props().id).toBe(id)
      })

      it('has name from props', () => {
        expect(wrapper.find('[type="checkbox"]').props().name).toBe(name)
      })

      it('has value from props', () => {
        expect(wrapper.find('[type="checkbox"]').props().value).toBe(value)
      })

      it('has htmlFor from props', () => {
        expect(wrapper.find('[htmlFor="test"]')).toHaveLength(1)
      })

      it('has text from props ', () => {
        expect(wrapper.find('[htmlFor="test"]').text()).toBe(label)
      })
    })
  })

  describe('Testing functionality', () => {
    const event = { target: { checked: true } }

    it('toggles its checked state when changed', () => {
      wrapper = mount(<Checkbox {...props} />, { context: { theme } })
      wrapper.find('Checkbox__Input').simulate('change', event)
      const { checked } = wrapper.find('Checkbox__Input').props()
      expect(checked).toEqual(true)
    })

    it('fires the handleChange prop with an event when changed', () => {
      wrapper = shallow(<Checkbox {...props} />, { context: { theme } })
      wrapper.find('#test').simulate('change', event)
      expect(handleChange).toHaveBeenCalledWith(event)
    })
  })
})
