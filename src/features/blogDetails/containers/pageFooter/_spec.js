import React from 'react'
import { shallow } from 'enzyme'
import PageFooter from '.'

describe(PageFooter.name, () => {
  it('renders with default values', () => {
    const title = 'Title'
    const headerImage = { file: { url: 'backgroundimageurl/image.png' } }
    const wrapper = shallow(
      <PageFooter title={title} headerImage={headerImage} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
