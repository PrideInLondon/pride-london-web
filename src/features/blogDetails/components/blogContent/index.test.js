import React from 'react'
import { shallow } from 'enzyme'
import BlogContent from '.'

describe(BlogContent.name, () => {
  it('renders with default values', () => {
    const article = {
      json: {
        nodeType: 'document',
        data: {},
        content: [
          {
            nodeType: 'paragraph',
            data: {},
            content: [
              {
                nodeType: 'text',
                value: 'Hello world!',
                marks: [],
                data: {},
              },
            ],
          },
        ],
      },
    }
    const wrapper = shallow(<BlogContent article={article} />)
    expect(wrapper).toMatchSnapshot()
  })
})
