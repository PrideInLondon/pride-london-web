import React from 'react'
import { shallow } from 'enzyme'
import AnnouncementCard from '../../components/announcementCard'
import AnnouncementsContainer from '.'

describe(AnnouncementsContainer.name, () => {
  it('renders with default values', () => {
    const title = 'Title title'
    const image = [{ file: { url: 'backgroundimageurl/image.png' } }]
    const wrapper = shallow(<AnnouncementCard image={image} title={title} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe(AnnouncementsContainer.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<AnnouncementsContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})
