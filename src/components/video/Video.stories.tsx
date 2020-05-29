import React from 'react'
import { storiesOf } from '@storybook/react'
import { select, text } from '@storybook/addon-knobs'
import logo from '../../assets/logo.png'
import { Video } from './Video'

const hosts = {
  Vimeo: 'vimeo',
  YouTube: 'youtube',
} as const

storiesOf('Video', module).add('default', () => (
  <Video
    host={select('Host', hosts, hosts.YouTube)}
    videoId={text('Video Id', 'TIExvoJXwKE')}
    coverImage={{
      image: {
        width: 650,
        height: 365,
        src: logo,
        srcSet: logo,
      },
      alt: text('Cover Image Alt Text', 'The Pride in London Logo'),
    }}
    caption={text('Caption Text', 'Pride in London presents: You! Me! Us! We!')}
    width={650}
  />
))
