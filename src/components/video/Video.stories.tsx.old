import React from 'react'
import { select, text, files } from '@storybook/addon-knobs'
import logo from '../../assets/logo.png'
import { Video } from './Video'
import { VIDEO_HOSTS } from './Video.types'

export default {
  title: 'Video',
}

export const Default = () => (
  <Video
    host={select('host', VIDEO_HOSTS, VIDEO_HOSTS[1])}
    videoId={text('videoId', 'TIExvoJXwKE')}
    coverImage={{
      src: files('src', '.jpg, .png', [logo], 'coverImage')[0],
      alt: text('alt', 'The Pride in London Logo', 'coverImage'),
    }}
    caption={text('caption', 'Pride in London presents: You! Me! Us! We!')}
    maxWidth={650}
  />
)

Default.storyName = 'default'
