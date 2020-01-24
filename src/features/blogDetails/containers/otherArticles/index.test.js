import React from 'react'
import { shallow } from 'enzyme'
import otherArticlesMock from './__mocks__'
import OtherArticles from '.'

describe(OtherArticles.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <OtherArticles
        otherArticles={otherArticlesMock}
        categories={[{ title: 'Partners', hexColour: '#eeeeee' }]}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
