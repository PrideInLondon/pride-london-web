import React from 'react'
import { shallow } from 'enzyme'
import NewsCards from './'
import { ALL_ARTICLES } from '../../components/newsFilter/config'

describe(NewsCards.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<NewsCards selectedFilter={ALL_ARTICLES} />)
    expect(wrapper).toMatchSnapshot()
  })
})
