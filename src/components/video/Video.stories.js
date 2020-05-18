import React from 'react'
import { storiesOf } from '@storybook/react'
// import { select } from '@storybook/addon-knobs'
import { VideoContainer } from './Video.styles'
import Video from './Video'

const vidId = {
  'en-GB': 'liJVSwOiiwg?autoplay=1',
}
const coverImg = 'https://dummyimage.com/600x400/000/fff&text=eat+biscuits'
const captionStr = 'Pride in London presents: You! Me! Us! We!'

storiesOf('Video', module).add('with image', () => {
  return (
    <VideoContainer>
      <Video videoId={vidId} coverImage={coverImg} captionString={captionStr} />
    </VideoContainer>
  )
})
