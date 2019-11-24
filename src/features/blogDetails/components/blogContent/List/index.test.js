import React from 'react'
import { shallow } from 'enzyme'
import List from '.'

describe(List.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <List>
        <ul>
          <li>some list item</li>
        </ul>
      </List>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
