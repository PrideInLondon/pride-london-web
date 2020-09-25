import React from 'react'
import { text } from '@storybook/addon-knobs'
import PageIntro from './PageIntro'

export default {
  title: 'PageIntro',
}

export const Default = () => (
  <PageIntro
    cta={{
      title: text('title', 'Lorem Ipsum'),
      body: text(
        'body',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      ),
      link: {
        to: text('Link URL', '/relative-url'),
        text: text('Link Text', 'This is a button'),
      },
    }}
  >
    {text(
      'children',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    )}
  </PageIntro>
)

Default.storyName = 'default'
