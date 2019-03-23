import React from 'react'
import { shallow } from 'enzyme'
import ViewsCard from './'

describe('ViewsCard', () => {
  const author = 'Bob Barker'
  const title = 'My view'
  const portraitPhoto = {
    file: {
      url: 'foo.bar/baz',
    },
  }

  it('renders with default values', () => {
    const props = {
      author,
      title,
      portraitPhoto,
    }
    const wrapper = shallow(<ViewsCard {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
