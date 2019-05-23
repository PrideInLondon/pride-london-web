import React from 'react'
import { shallow } from 'enzyme'
import LetterLink from '.'

describe(LetterLink.name, () => {
  it('should render correctly', () => {
    const wrapper = shallow(<LetterLink letter="a" />)
    expect(wrapper).toMatchSnapshot()
  })
})
