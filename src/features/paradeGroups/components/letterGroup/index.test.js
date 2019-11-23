import React from 'react'
import { shallow } from 'enzyme'
import LetterGroup from '.'

describe(LetterGroup.name, () => {
  it('should render with default props', () => {
    const wrapper = shallow(
      <LetterGroup letter="H">
        <p>Child</p>
      </LetterGroup>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
