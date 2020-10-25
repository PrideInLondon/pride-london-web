import React from 'react'
import { storiesOf } from '@storybook/react'
import LetterLink from './LetterLink'

storiesOf('LetterLink', module).add('default', () => (
  <LetterLink letter="a" isActive />
))
