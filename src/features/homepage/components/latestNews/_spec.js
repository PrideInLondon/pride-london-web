import React from 'react'
import { shallow } from 'enzyme'
import LatestNews from '.'

describe(LatestNews.name, () => {
  it('renders with default values', () => {
    const title = 'Here is some news!'
    const newsCategory = {
      hexColour: '#304242',
      title: 'Amazing News!!',
    }
    const readLength = ''
    const date = '2019-03-28T20:30+00:00'
    const headerImage = { file: { url: 'backgroundimageurl/image.png' } }
    const wrapper = shallow(
      <LatestNews
        newsCategory={newsCategory}
        title={title}
        date={date}
        readLength={readLength}
        headerImage={headerImage}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
