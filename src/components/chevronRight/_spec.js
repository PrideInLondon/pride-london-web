import React from 'react'
import { shallow } from 'enzyme'

import ChevronRight from './'

describe('ChevronRight', () => {
  it('should render the correct tree', () => {
    const tree = shallow(<ChevronRight />)
    expect(tree).toMatchSnapshot()
  })
})
