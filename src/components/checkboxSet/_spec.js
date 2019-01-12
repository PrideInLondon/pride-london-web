import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import CheckboxSet from './'
import theme from '../../theme/theme'

// SVGs need to be mocked as the SVG output causes Babel to throw
jest.mock('../../theme/assets/images/icon-check.svg', () => 'foo')

describe('CheckboxSet', () => {
  describe('@renders', () => {
    it('should render', () => {
      const wrapper = shallow(<CheckboxSet filterName="test" />, {
        context: { theme },
      })

      expect(wrapper).toMatchSnapshot()
    })
  })
})
