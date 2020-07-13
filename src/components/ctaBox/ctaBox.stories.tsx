import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import CTABox from './CTABox'

storiesOf('CTA Box', module).add('default', () => (
  <CTABox
    title={text('Title', 'Lorem Ipsum')}
    body={text('Body', 'Lorem Ipsum')}
    link={{
      to: text('Link URL', '/relative-url'),
      text: text('Link Text', 'Lorem Ipsum'),
    }}
  />
))
