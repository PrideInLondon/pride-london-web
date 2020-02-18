import React from 'react'
import { mount } from 'enzyme'
import theme from '../../../../theme/theme'
import StyledLetterLink from './styles'
import LetterLink from '.'

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
