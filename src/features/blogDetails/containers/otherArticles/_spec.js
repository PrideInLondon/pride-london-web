import React from 'react'
import { shallow } from 'enzyme'
import otherArticlesMock from './_mocks'
import OtherArticles from '.'

describe(OtherArticles.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <OtherArticles
        otherArticles={otherArticlesMock}
        categories={{
          edges: [{ node: { title: 'Partners', hexColour: '#eeeeee' } }],
        }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
