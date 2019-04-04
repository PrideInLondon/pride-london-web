import React from 'react'
import { shallow } from 'enzyme'
import ViewsCard from '.'

describe('ViewsCard', () => {
  const author = 'Bob Barker'
  const title = 'My view'
  const portraitImage = {
    file: {
      url: 'foo.bar/baz',
    },
  }

  it('renders with default values', () => {
    const props = {
      author,
      title,
      portraitImage,
    }
    const wrapper = shallow(<ViewsCard {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
