import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Video from '.'
import 'jest-styled-components'

const videoData = {
  videoId: {
    'en-GB': 'video id',
  },
  title: {
    'en-GB': 'video title',
  },
}

describe('<Video/>', () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Video {...videoData} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
