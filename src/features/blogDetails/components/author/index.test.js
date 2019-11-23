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
          displayName: 'FullName',
          jobTitle: 'Job Title',
        }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
