import React from 'react'
import { shallow } from 'enzyme'
import PageFooter from '.'

describe(PageFooter.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<PageFooter otherArticles={{}} />)
    expect(wrapper).toMatchSnapshot()
  })
})
