import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import { ShareBar } from './ShareBar'
import { VARIANTS } from './ShareBar.types'

const CONTENT_GROUP_ID = 'Content'

storiesOf('ShareBar', module).add('default', () => (
  <ShareBar
    variant={select('variant', VARIANTS, VARIANTS[0])}
    content={{
      title: text('Title', 'Pride in London', CONTENT_GROUP_ID),
      body: text(
        'Body',
        'The UK’s biggest, most diverse Pride. A home for every part of London’s LGBT+ community',
        CONTENT_GROUP_ID
      ),
      url: text('URL', 'http://prideinlondon.org', CONTENT_GROUP_ID),
    }}
  />
))
