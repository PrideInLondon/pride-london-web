import React from 'react'
import { text } from '@storybook/addon-knobs'
import { Navigate } from './Navigate'

export default {
  title: 'Navigate',
}

export const RelativeLink = () => (
  <Navigate to={text('to', '/')}>A relative link</Navigate>
)

RelativeLink.storyName = 'relative link'

export const AbsoluteLink = () => (
  <Navigate to={text('to', 'https://prideinlondon.org')}>
    An absolute link
  </Navigate>
)

AbsoluteLink.storyName = 'absolute link'

export const ContactLink = () => (
  <Navigate to={text('to', 'mailto:example@prideinlondon.org')}>
    A contact link
  </Navigate>
)

ContactLink.storyName = 'contact link'
