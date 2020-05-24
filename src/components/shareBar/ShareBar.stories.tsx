import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { ShareBar } from './ShareBar'

const CONTENT = 'Content'

const dynamicContent = () => ({
  title: text('Title', 'Pride in London', CONTENT),
  body: text(
    'Body',
    'The UK’s biggest, most diverse Pride. A home for every part of London’s LGBT+ community.',
    CONTENT
  ),
  url: text('URL', 'http://prideinlondon.org', CONTENT),
})

storiesOf('ShareBar', module)
  .add('horizontal', () => (
    <ShareBar variant="horizontal" content={dynamicContent()} />
  ))
  .add('vertical', () => (
    <ShareBar variant="vertical" content={dynamicContent()} />
  ))
