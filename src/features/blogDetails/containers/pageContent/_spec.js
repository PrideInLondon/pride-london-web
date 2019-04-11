import React from 'react'
import { shallow } from 'enzyme'
import PageContent from '.'

describe(PageContent.name, () => {
  it('renders with default values', () => {
    //article, title, datePublished, category, author
    const title = 'Title'
    const article = {}
    const datePublished = '2019-03-28T20:30+00:00'
    const category = { title: 'Resaearch', hexColour: '#eeeeee' }
    const wrapper = shallow(
      <PageContent
        title={title}
        article={article}
        category={category}
        datePublished={datePublished}
        author={null}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
