import React from 'react'
import { shallow } from 'enzyme'
import PageHeader from '.'

describe(PageHeader.name, () => {
  it('renders with default values', () => {
    const title = 'Title'
    const headerImage = { file: { url: 'backgroundimageurl/image.png' } }
    const wrapper = shallow(
      <PageHeader title={title} headerImage={headerImage} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
