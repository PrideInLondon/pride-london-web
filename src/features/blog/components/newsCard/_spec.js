import React from 'react'
import { shallow } from 'enzyme'
import NewsCard from './'
import { PARTNERS } from '../newsFilter/config';

describe(NewsCard.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<NewsCard type={PARTNERS} />)
    expect(wrapper).toMatchSnapshot()
  })
})
