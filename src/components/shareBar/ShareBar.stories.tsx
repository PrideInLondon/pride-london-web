import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import { ShareBar } from './ShareBar'
import { SHARE_BAR_VARIANTS } from './ShareBar.types'

export default {
  title: 'ShareBar',
}

export const Default = () => (
  <ShareBar
    variant={select('variant', SHARE_BAR_VARIANTS, SHARE_BAR_VARIANTS[0])}
    content={{
      title: text('title', 'Pride in London'),
      body: text(
        'body',
        'The UK’s biggest, most diverse Pride. A home for every part of London’s LGBT+ community'
      ),
      url: text('url', 'http://prideinlondon.org'),
    }}
  />
)

Default.storyName = 'default'
