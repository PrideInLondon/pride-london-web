import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CTALink } from './CTALink'

const link = {
  text: 'View all',
  url: '/',
  externalUrl: 'http://google.com',
  contactUrl: 'mailto:test@test.com',
}

describe('<CTALink/>', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(<CTALink to={link.url}>{link.text}</CTALink>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render a Link component', () => {
    const wrapper = mount(<CTALink to={link.url}>{link.text}</CTALink>)
    expect(wrapper.find('GatsbyLink')).toHaveLength(1)
  })

  it('should render an external link if it has external props', () => {
    const wrapper = mount(<CTALink to={link.externalUrl}>{link.text}</CTALink>)
    expect(wrapper.find('GatsbyLink')).toHaveLength(0)
    expect(wrapper.find('a').prop('rel')).toBe('noopener noreferrer')
    expect(wrapper.find('a').prop('target')).toBe('_blank')
  })

  it('should render a normal link without the rel attribute it is a contact link', () => {
    const wrapper = mount(<CTALink to={link.contactUrl}>{link.text}</CTALink>)
    expect(wrapper.find('GatsbyLink')).toHaveLength(0)
    expect(wrapper.find('a').prop('rel')).toBeFalsy()
    expect(wrapper.find('a').prop('target')).toBeTruthy()
  })
})
