import React from 'react'
import { shallow } from 'enzyme'
import { AnimatedFlexColumn } from './index'

describe('The FlexColumn component', () => {
  const wrapper = shallow(
    <AnimatedFlexColumn animation={false}>
      <p>Testing</p>
    </AnimatedFlexColumn>
  )

  it('Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('render', () => {
    expect(
      wrapper
        .find('p')
        .first()
        .text()
    ).toBe('Testing')
  })
})
