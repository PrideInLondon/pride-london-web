import React from 'react'
import PropTypes from 'prop-types'
import { VideoContainer } from './styles'

const Video = ({ videoId }) => (
  <VideoContainer>
    <iframe
      allowFullScreen
      frameBorder="0"
      src={`https://www.youtube.com/embed/${videoId['en-GB']}`}
      title="Youtube video"
    />
  </VideoContainer>
)

Video.propTypes = {
  videoId: PropTypes.shape({
    'en-GB': PropTypes.string.isRequired,
  }).isRequired,
}

export default Video
