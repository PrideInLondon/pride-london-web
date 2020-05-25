import React, { useState } from 'react'
import {
  StyledFigure,
  VideoContainer,
  PlaceholderButton,
  StyledVideoImage,
  StyledFigCaption,
  StylediFrame,
} from './Video.styles'
import { VideoProps } from './Video.types'

const Video = ({
  videoId,
  coverImage: { image, alt },
  caption,
}: VideoProps) => {
  const [clicked, setClicked] = useState(false)

  return (
    <StyledFigure>
      {clicked ? (
        <VideoContainer>
          <StylediFrame
            allowFullScreen
            frameBorder="0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={caption}
          />
        </VideoContainer>
      ) : (
        <>
          <div
            role="button"
            title={`Play ${caption} video`}
            onClick={() => setClicked(!clicked)}
          >
            <StyledVideoImage fixed={image} alt={alt} />
          </div>
          <PlaceholderButton
            title={`Play ${caption} video`}
            onClick={() => setClicked(!clicked)}
          >
            Placeholder Btn
          </PlaceholderButton>
        </>
      )}
      <StyledFigCaption>{caption}</StyledFigCaption>
    </StyledFigure>
  )
}

export default Video
