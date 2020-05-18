import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { VideoContainer } from './Video.styles'

const Video = ({ videoId, coverImage, captionString }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <VideoContainer onClick={() => setClicked(!clicked)}>
      {clicked ? (
        <iframe
          allowFullScreen
          frameBorder="0"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Youtube video"
        />
      ) : (
        <figure>
          <img src={coverImage} alt={captionString} />
          <figcaption>{captionString}</figcaption>
        </figure>
      )}
    </VideoContainer>
  )
}

Video.propTypes = {
  videoId: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired,
  captionString: PropTypes.string.isRequired,
}

export default Video
