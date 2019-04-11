import React from 'react'
import { shallow } from 'enzyme'
import ViewsCard from '.'

describe('ViewsCard', () => {
  const author = { display_name: { display_name: 'Bob Barker' } }
  const title = 'My view'
  const headerImage = {
    file: {
      url: 'foo.bar/baz',
    },
  }

  it('renders with default values', () => {
    const props = {
      author,
      title,
      headerImage,
    }
    const wrapper = shallow(<ViewsCard {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
