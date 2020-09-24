import React from 'react'
import { text, boolean } from '@storybook/addon-knobs'
import { CTALink } from './CTALink'

export default {
  title: 'CTALink',
}

export const Default = () => (
  <CTALink to={text('Link URL', '/')} arrow={boolean('arrow', true)}>
    {text('Link Text', 'This is a CTA Link')}
  </CTALink>
)

Default.storyName = 'default'
