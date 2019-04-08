import React from 'react'
import { shallow } from 'enzyme'
import Author from '.'

describe(Author.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <Author
        author={{
          imageSrc: 'imageSrc',
          display_name: {
            display_name: 'FullName',
          },
        }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
