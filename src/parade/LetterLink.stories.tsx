import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import LetterLink from './LetterLink'

storiesOf('LetterLink', module).add('default', () => (
  <LetterLink
    isActive={boolean('isActive', false)}
    letter={text('Letter text', 'a')}
  />
))
