import React from 'react'
import { shallow } from 'enzyme'
import { FlexColumn } from './index'

describe('The FlexColumn component', () => {
  const testChild = <p>Testing</p>
  let wrapper

  beforeAll(() => {
    wrapper = shallow(<FlexColumn animation={false}> {testChild}</FlexColumn>)
  })

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
