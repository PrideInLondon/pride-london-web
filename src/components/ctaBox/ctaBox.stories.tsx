import React from 'react'
import { storiesOf } from '@storybook/react'
import CTABox from './CTABox'

storiesOf('CTA Box', module).add('default', () => (
  <CTABox
    title={'Hello'}
    body={'this is the body'}
    link={{ to: '/relative-url', text: 'This is a button' }}
  />
))
