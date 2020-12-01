import React from 'react'
import PropTypes from 'prop-types'
import { ConsentGate } from '@metomic/react'
import { VideoContainer } from './Video.styles'

const Video = ({ videoId }) => (
  <VideoContainer>
    <ConsentGate micropolicy="media" placeholder="@metomic/youtube">
      <iframe
        allowFullScreen
        frameBorder="0"
        src={`https://www.youtube.com/embed/${videoId['en-GB']}`}
        title="Youtube video"
      />
    </ConsentGate>
  </VideoContainer>
)

Video.propTypes = {
  videoId: PropTypes.shape({
    'en-GB': PropTypes.string.isRequired,
  }).isRequired,
}

export default Video
