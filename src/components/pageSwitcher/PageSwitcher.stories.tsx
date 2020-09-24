import React from 'react'
import { text } from '@storybook/addon-knobs'
import { PageSwitcher } from './PageSwitcher'

export default {
  title: 'PageSwitcher',
}

export const Default = () => (
  <PageSwitcher
    prev={{
      title: text('Previous text', 'Previous artwork title', 'Previous'),
      subtitle: text('Previous subtitle', 'Previous artist name', 'Previous'),
      url: text('Previous url', '/previous', 'Previous'),
    }}
    next={{
      title: text('Next text', 'Next artwork title', 'Next'),
      subtitle: text('Next subtitle', 'Next artist name', 'Next'),
      url: text('Next url', '/next', 'Next'),
    }}
    back={{
      title: text('Back text', 'Back to gallery'),
      url: text('Back url', '/'),
    }}
  />
)

Default.storyName = 'default'
