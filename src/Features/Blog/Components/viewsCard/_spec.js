import React from 'react'
import { shallow } from 'enzyme'
import ViewsCard from './'

describe('ViewsCard', () => {
  it('should render with default values', () => {
    const wrapper = shallow(<ViewsCard />)
    expect(wrapper).toMatchSnapshot()
  });
});
