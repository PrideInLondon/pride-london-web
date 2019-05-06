import React from 'react'
import { shallow } from 'enzyme'
import LatestNews from '.'

describe(LatestNews.name, () => {
  it('renders with default values', () => {
    const title = 'Here is some news!'
    const category = {
      hexColour: '#304242',
      title: 'Amazing News!!',
    }
    const readTime = ''
    const datePublished = '2019-03-28T20:30+00:00'
    const headerImage = {
      title: 'Latest News Image',
      fixed: {
        base64: 'abc',
        height: 830,
        width: 500,
        src: 'src',
        srcSet: 'srcset',
      },
    }
    const slug = 'some/slug'
    const wrapper = shallow(
      <LatestNews
        category={category}
        title={title}
        datePublished={datePublished}
        readTime={readTime}
        headerImage={headerImage}
        slug={slug}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
