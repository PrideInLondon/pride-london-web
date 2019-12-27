import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'
import { CTALink } from './CTALink'

storiesOf('CTALink', module)
  .addDecorator(withInfo)
  .addDecorator(withKnobs)
  .add('with URL', () => (
    <CTALink to={text('Link URL', '/')}>
      {text('Link Text', 'This is a CTA Link')}
    </CTALink>
  ))
