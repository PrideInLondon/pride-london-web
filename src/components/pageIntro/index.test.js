import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import PageIntro from '.'

describe('<PageIntro/>', () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <PageIntro
        cta={{
          title: 'Title',
          body: 'Lorem Ipsum',
          link: { to: '/', text: 'Button text' },
        }}
      >
        <p>Lorem ipsum dolor sit amet</p>
      </PageIntro>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
