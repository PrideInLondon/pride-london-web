import React, { useState } from 'react'
import { StyledFigure, VideoContainer } from './Video.styles'
import { VideoProps } from './Video.types'

const Video = ({ videoId, coverImage, captionString }: VideoProps) => {
  const [clicked, setClicked] = useState(false)

  return (
    <StyledFigure onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <VideoContainer>
          <iframe
            allowFullScreen
            frameBorder="0"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="Youtube video"
          />
        </VideoContainer>
      ) : (
        <div>
          <img src={coverImage} alt={captionString} />
        </div>
      )}
      <figcaption>{captionString}</figcaption>
    </StyledFigure>
  )
}

export default Video
