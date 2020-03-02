import React from 'react'
import { shallow } from 'enzyme'
import ShowMoreButton from './ShowMoreButton'

describe('ShowMoreButton', () => {
  const text = 'Foo'
  const onClick = jest.fn()

  let wrapper
  beforeAll(() => {
    wrapper = shallow(<ShowMoreButton text={text} onClick={onClick} />)
  })

  it('calls the onClick when clicked', () => {
    expect(onClick).not.toHaveBeenCalled()

    wrapper.find('Button').simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
