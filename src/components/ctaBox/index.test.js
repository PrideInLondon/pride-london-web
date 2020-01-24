import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import CTABox from '.'

describe('<CTABox/>', () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <CTABox
        title="Title"
        body="Lorem Ipsum"
        link={{ to: '/', text: 'Button text' }}
      />
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
