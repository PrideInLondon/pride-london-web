import React from 'react'
import { text } from '@storybook/addon-knobs'
import { Navigate } from './Navigate'

export default {
  title: 'Navigate',
}

export const RelativeLink = () => (
  <Navigate to={text('to', '/')}>A relative link</Navigate>
)

RelativeLink.story = {
  name: 'relative link',
}

export const AbsoluteLink = () => (
  <Navigate to={text('to', 'https://prideinlondon.org')}>
    An absolute link
  </Navigate>
)

AbsoluteLink.story = {
  name: 'absolute link',
}

export const ContactLink = () => (
  <Navigate to={text('to', 'mailto:example@prideinlondon.org')}>
    A contact link
  </Navigate>
)

ContactLink.story = {
  name: 'contact link',
}
