import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import logo from '../../assets/logo.png'
import Video from './Video'

storiesOf('Video', module).add('default', () => {
  return (
    <Video
      videoId={text('Video Id', 'TIExvoJXwKE')}
      coverImage={{
        image: { width: 650, height: 400, src: logo, srcSet: logo },
        alt: text('Cover Image Alt Text', 'The Pride in London Logo'),
      }}
      caption={text(
        'Caption Text',
        'Pride in London presents: You! Me! Us! We!'
      )}
    />
  )
})
