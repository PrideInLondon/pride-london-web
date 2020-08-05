import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { PageSwitcher } from './PageSwitcher'

storiesOf('PageSwitcher', module).add('default', () => {
  return (
    <PageSwitcher
      prev={{
        title: text('Previous text', 'Previous artwork title'),
        subtitle: text('Previous subtitle', 'Previous artist name'),
        url: text('Previous url', '/previous'),
      }}
      next={{
        title: text('Next text', 'Next artwork title'),
        subtitle: text('Next subtitle', 'Next artist name'),
        url: text('Next url', '/next'),
      }}
      back={{
        title: text('Back text', 'Back to gallery'),
        url: text('Back url', '/'),
      }}
    />
  )
})
