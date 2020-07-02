import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { Navigate } from './Navigate'

storiesOf(Navigate.name, module)
  .add('relative link', () => (
    <Navigate to={text('to', '/')}>A relative link</Navigate>
  ))
  .add('absolute link', () => (
    <Navigate to={text('to', 'https://prideinlondon.org')}>
      An absolute link
    </Navigate>
  ))
  .add('contact link', () => (
    <Navigate to={text('to', 'mailto:example@prideinlondon.org')}>
      A contact link
    </Navigate>
  ))
