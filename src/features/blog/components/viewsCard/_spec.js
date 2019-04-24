import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import ViewsCard from '.'
import 'jest-styled-components'

describe('ViewsCard', () => {
  const author = { display_name: { display_name: 'Bob Barker' } }
  const title = 'My view'
  const featuredImage = {
    file: {
      url: 'foo.bar/baz',
    },
  }
  const id = '123456'

  it('renders with default values', () => {
    const props = {
      author,
      title,
      featuredImage,
      id,
    }
    const wrapper = shallow(<ViewsCard {...props} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
