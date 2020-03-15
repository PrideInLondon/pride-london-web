import React from 'react'
import { mount } from 'enzyme'
import theme from '../theme/theme'
import LetterLink from './LetterLink'

describe('LetterLink', () => {
  it('should render active StyledLetterLink with the correct styles', () => {
    const component = mount(<LetterLink letter="a" isActive />)
    expect(component).toHaveStyleRule('color', theme.colors.indigo)
  })

  it('should render disabled StyledLetterLink with the correct styles', () => {
    const component = mount(<LetterLink letter="a" isDisabled />)
    expect(component).toHaveStyleRule('color', 'grey')
  })
})
