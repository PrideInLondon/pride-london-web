import { storiesOf } from '@storybook/react'
import React from 'react'
import { text } from '@storybook/addon-knobs'
import { CTALink } from './CTALink'

storiesOf('CTALink', module)
  .add('with URL', () => (
    <CTALink to={text('Link URL', '/')}>
      {text('Link Text', 'This is a CTA Link')}
    </CTALink>
  ))
  .add('without arrow', () => (
    <CTALink to={text('Link URL', '/')} arrow={false}>
      {text('Link Text', 'This is a CTA Link')}
    </CTALink>
  ))
