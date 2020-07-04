import React from 'react'
import { storiesOf } from '@storybook/react'
import PageIntro from './PageIntro'

storiesOf('Page Intro', module).add('default', () => (
  <PageIntro
    cta={{
      link: { to: '/relative-url', text: 'Lorem ipsum' },
      title: 'Lorem ipsum',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
    }}
  >
    {'Lorem Ipsum'}
  </PageIntro>
))
