import React from 'react'
import { shallow } from 'enzyme'
import LatestNewsCard from '.'

describe(LatestNewsCard.name, () => {
  it('renders with default values', () => {
    const title = 'Here is some news!'
    const category = {
      hexColour: '#304242',
      title: 'Amazing News!!',
    }
    const readLength = ''
    const datePublished = '2019-03-28T20:30+00:00'
    const images = [{ file: { url: 'backgroundimageurl/image.png' } }]
    const wrapper = shallow(
      <LatestNewsCard
        category={category}
        title={title}
        datePublished={datePublished}
        readLength={readLength}
        images={images}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
