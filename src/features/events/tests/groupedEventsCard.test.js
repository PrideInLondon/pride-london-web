import React from 'react'
import { shallow } from 'enzyme'
import { GroupedEventsCards } from '../index'
import { mockNodes, testEvent } from './__mocks__'
import 'jest-styled-components'

// will change in EVE-7
describe('The GroupedEventsCards component', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <GroupedEventsCards
        event={testEvent}
        index={1}
        events={mockNodes}
        toLoad={24}
      />
    )
  })

  it('Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
