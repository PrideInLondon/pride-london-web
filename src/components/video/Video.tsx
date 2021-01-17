import React, { useState } from 'react'
import { PlayButton } from '../playButton'
import { P } from '../typography'
import {
  StyledFigure,
  VideoContainer,
  VideoImageWrapper,
  StyledVideoImage,
  StylediFrame,
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
  coverImage: { src, alt },
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
            allow="autoplay"
          />
        </VideoContainer>
      ) : (
        <>
          <VideoImageWrapper
            role="button"
            title={`Play ${caption} video`}
            onClick={() => setClicked(true)}
          >
            <StyledVideoImage {...{ src, alt }} />
          </VideoImageWrapper>
            <PlayButton
              title={`Play ${caption} video`}
              onClick={() => setClicked(true)}
            position="absolute"
            bottom={0}
            left="lg"
          />
        </>
      )}
      <P variant="sm" fontWeight="bold" textAlign="right" as="figcaption">
        {caption}
      </P>
    </StyledFigure>
  )
}
