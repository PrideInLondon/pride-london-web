import React from 'react'
import { shallow, mount } from 'enzyme'
import PagedCardContainer from '.'

// eslint-disable-next-line react/prop-types
const CardComponent = ({ text }) => <div>{text}</div>

describe('PagedCardContainer', () => {
  it('renders component with default props', () => {
    const wrapper = shallow(
      <PagedCardContainer CardComponent={CardComponent} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders component with specified non-default props', () => {
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

    const wrapper = mount(
      <PagedCardContainer
        pageSize={3}
        cardContent={cardContent}
        CardComponent={CardComponent}
        showMoreButtonText="Show More Foo"
      />
    )

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('CardComponent')).toHaveLength(3)
  })

  it('shows more cards when show more button is selected', () => {
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
      {
        id: 'id-foo2',
        text: 'text-foo2',
      },
      {
        id: 'id-bar2',
        text: 'text-bar2',
      },
      {
        id: 'id-baz2',
        text: 'text-baz2',
      },
    ]

    const wrapper = mount(
      <PagedCardContainer
        pageSize={3}
        cardContent={cardContent}
        CardComponent={CardComponent}
      />
    )

    expect(wrapper.find('CardComponent')).toHaveLength(3)

    wrapper
      .find('ShowMoreButton')
      .find('Button')
      .simulate('click')

    expect(wrapper.find('CardComponent')).toHaveLength(6)

    expect(wrapper).toMatchSnapshot()
  })
})
