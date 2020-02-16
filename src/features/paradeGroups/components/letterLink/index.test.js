import React from 'react'
import { shallow, mount } from 'enzyme'
import theme from '../../../../theme/theme'
import StyledLetterLink from './styles'
import LetterLink from '.'

describe(LetterLink.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<LetterLink letter="a" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders active letter', () => {
    const wrapper = shallow(<LetterLink letter="a" isActive />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders disabled letter', () => {
    const wrapper = shallow(<LetterLink letter="a" isDisabled />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe(StyledLetterLink.name, () => {
  it('should render active StyledLetterLink with the correct styles', () => {
    const component = mount(<LetterLink letter="a" isActive />)
    expect(component).toHaveStyleRule('color', theme.colors.indigo)
  })

  it('should render disabled StyledLetterLink with the correct styles', () => {
    const component = mount(<LetterLink letter="a" isDisabled />)
    expect(component).toHaveStyleRule('color', 'grey')
  })
})
