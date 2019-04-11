import React from 'react'
import { shallow } from 'enzyme'
import Author from '.'

describe(Author.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <Author
        author={{
          thumbnail: {
            file: {
              url: 'imgSrc',
            },
          },
          display_name: {
            display_name: 'FullName',
          },
          jobTitle: 'Job Title',
        }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
