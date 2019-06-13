import React from 'react'
import { shallow, mount } from 'enzyme'
import PagedCardContainer from '.'

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

describe('PagedCardContainer', () => {
  it('renders component with default props', () => {
    const wrapper = shallow(
      <PagedCardContainer CardComponent={CardComponent} />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('renders component with specified non-default props', () => {
    const wrapper = mount(
      <PagedCardContainer
        cardContent={cardContent}
        CardComponent={CardComponent}
        moreCardsToShow
        showMoreButtonText="Show More Foo"
        onShowMoreButtonClick={jest.fn()}
      />
    )

    expect(wrapper).toMatchSnapshot()

    expect(wrapper.find('CardComponent')).toHaveLength(3)
  })

  it('executes onClick when show more button is selected', () => {
    const onShowMoreButtonClick = jest.fn()

    const wrapper = mount(
      <PagedCardContainer
        CardComponent={CardComponent}
        moreCardsToShow
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
    )

    wrapper
      .find('ShowMoreButton')
      .find('Button')
      .simulate('click')

    expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1)
  })
})
