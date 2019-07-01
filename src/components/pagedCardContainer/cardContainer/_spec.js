import React from 'react'
import { shallow } from 'enzyme'
import CardContainer from '.'

describe('CardContainer', () => {
  it('renders component CardContainer', () => {
    // eslint-disable-next-line react/prop-types
    const CardComponent = ({ text }) => <div>{text}</div>

    const cardContent = [
      {
        id: 'id-foo',
        text: 'text-foo',
      },
      {
        id: 'id-bar',
        text: 'text-bar',
      },
      {
        id: 'id-baz',
        text: 'text-baz',
      },
    ]

    const wrapper = shallow(
      <CardContainer cardContent={cardContent} CardComponent={CardComponent} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})
