import React from 'react'
import { storiesOf } from '@storybook/react'
import logo from '../../assets/logo.png'
import Video from './Video'

const vidId = 'liJVSwOiiwg?autoplay=1'
const coverImg = logo
const captionStr = 'Pride in London presents: You! Me! Us! We!'

storiesOf('Video', module).add('with image', () => {
  return (
    <Video videoId={vidId} coverImage={coverImg} captionString={captionStr} />
  )
})
