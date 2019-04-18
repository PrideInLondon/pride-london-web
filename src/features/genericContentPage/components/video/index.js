import React from 'react'
import PropTypes from 'prop-types'
import { VideoContainer } from './styles'

const Video = ({ videoId }) => (
  <VideoContainer>
    <iframe
      allowFullScreen
      frameBorder="0"
      src={`https://www.youtube.com/embed/${videoId['en-GB']}`}
    />
  </VideoContainer>
)

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
}

export default Video
