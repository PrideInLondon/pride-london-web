import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import ViewsCard from '.'
import 'jest-styled-components'

describe('ViewsCard', () => {
  const author = { displayName: 'Bob Barker' }
  const title = 'My view'
  const featuredImage = {
    fixed: {
      base64: 'abc',
      height: 400,
      width: 400,
      src: 'src',
      srcSet: 'srcset',
    },
  }
  const slug = '123456'

  it('renders with default values', () => {
    const props = {
      author,
      title,
      featuredImage,
      slug,
    }
    const wrapper = shallow(<ViewsCard {...props} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
