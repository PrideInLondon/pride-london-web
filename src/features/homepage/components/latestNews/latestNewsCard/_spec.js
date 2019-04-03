import React from 'react'
import { shallow } from 'enzyme'
import LatestNewsCard from '.'

describe(LatestNewsCard.name, () => {
  it('renders with default values', () => {
    const title = 'Here is some news!'
    const newsCategory = {
      hexColour: '#304242',
      title: 'Amazing News!!',
    }
    const readLength = ''
    const date = '2019-03-28T20:30+00:00'
    const images = [{ file: { url: 'backgroundimageurl/image.png' } }]
    const wrapper = shallow(
      <LatestNewsCard
        newsCategory={newsCategory}
        title={title}
        date={date}
        readLength={readLength}
        images={images}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
