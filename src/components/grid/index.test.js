import React from 'react'
import { shallow } from 'enzyme'
import { FlexColumn } from './index'

describe('The FlexColumn component', () => {
  const wrapper = shallow(
    <FlexColumn animation={false}>
      <p>Testing</p>
    </FlexColumn>
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
