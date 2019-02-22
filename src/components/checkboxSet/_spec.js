import React from 'react'
import { shallow } from 'enzyme'
import theme from '../../theme/theme'
import renderer from 'react-test-renderer'
import CheckboxSet from './'
import 'jest-styled-components'

// SVGs need to be mocked as the SVG output causes Babel to throw
jest.mock('../../theme/assets/images/icon-check.svg', () => 'foo')

describe('CheckboxSet', () => {
  it('renders', () => {
    const wrapper = shallow(<CheckboxSet filterName="test" />, {
      context: { theme },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
