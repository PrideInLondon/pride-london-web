import React, { useState } from 'react'
import { PlayButton } from '../playButton'
import {
  StyledFigure,
  VideoContainer,
  StyledVideoImage,
  StyledFigCaption,
  StylediFrame,
  StyledButtonContainer,
} from './Video.styles'
import { VideoHost, VideoProps } from './Video.types'

const HOSTS = {
  vimeo: 'player.vimeo.com/video',
  youtube: 'youtube.com/embed',
}

export const generateVideoUrl = (host: VideoHost, id: string) =>
  `https://${HOSTS[host]}/${id}?autoplay=1`

export const Video = ({
  host,
  videoId,
  coverImage: { image, alt },
  caption,
  ...props
}: VideoProps) => {
  const [clicked, setClicked] = useState(false)
  return (
    <StyledFigure {...props}>
      {clicked ? (
        <VideoContainer>
          <StylediFrame
            allowFullScreen
            frameBorder="0"
            src={generateVideoUrl(host, videoId)}
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
          <StyledButtonContainer>
            <PlayButton
              title={`Play ${caption} video`}
              onClick={() => setClicked(!clicked)}
            ></PlayButton>
          </StyledButtonContainer>
        </>
      )}
      <StyledFigCaption padding="sm">{caption}</StyledFigCaption>
    </StyledFigure>
  )
}
