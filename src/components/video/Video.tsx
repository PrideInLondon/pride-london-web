import React, { useState } from 'react'
import { StyledFigure, VideoContainer, PlaceholderButton } from './Video.styles'
import { VideoProps } from './Video.types'

const Video = ({ videoId, coverImage, captionString }: VideoProps) => {
  const [clicked, setClicked] = useState(false)

  return (
    <StyledFigure>
      {clicked ? (
        <VideoContainer>
          <iframe
            allowFullScreen
            frameBorder="0"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Youtube video"
          />
        </VideoContainer>
      ) : (
        <div onClick={() => setClicked(!clicked)}>
          <img src={coverImage} alt={captionString} />
        </div>
      )}
      <PlaceholderButton onClick={() => setClicked(!clicked)}>
        Placeholder Btn
      </PlaceholderButton>
      <figcaption>{captionString}</figcaption>
    </StyledFigure>
  )
}

export default Video
