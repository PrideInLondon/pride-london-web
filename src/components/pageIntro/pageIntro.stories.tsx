import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import PageIntro from './PageIntro'

storiesOf('Page Intro', module).add('default', () => (
  <PageIntro
    cta={{
      title: text('Title', 'Lorem Ipsum'),
      body: text('Body', 'Lorem Ipsum'),
      link: {
        to: text('Link URL', '/relative-url'),
        text: text('Link Text', 'Lorem Ipsum'),
      },
    }}
    children={text('Title', 'Lorem Ipsum')}
  />
))
