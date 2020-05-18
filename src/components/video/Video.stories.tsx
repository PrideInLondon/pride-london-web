import React from 'react'
import { storiesOf } from '@storybook/react'
// import { select } from '@storybook/addon-knobs'
import logo from '../../assets/logo.png'
import { StyledFigure, PlaceholderButton } from './Video.styles'
import Video from './Video'

const vidId = 'liJVSwOiiwg?autoplay=1'
const coverImg = logo
const captionStr = 'Pride in London presents: You! Me! Us! We!'

storiesOf('Video', module).add('with image', () => {
  return (
    <StyledFigure>
      <Video videoId={vidId} coverImage={coverImg} captionString={captionStr} />
    </StyledFigure>
  )
})

storiesOf('Video', module).add('with button', () => {
  return (
    <StyledFigure>
      <div>
        <img src={coverImg} alt={captionStr} />
      </div>
      <PlaceholderButton>Placeholder Btn</PlaceholderButton>
      <figcaption>{captionStr}</figcaption>
    </StyledFigure>
  )
})
