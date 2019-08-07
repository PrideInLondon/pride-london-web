import React, { useRef, useCallback } from 'react'
import PropTypes from 'prop-types'
import FullScreenIcon from '../../../../theme/assets/images/icon-fullscreen.svg'
import {
  GalleryImg,
  FullScreenButton,
  GalleryImageContainer,
  ImageCounter,
} from './styles'

const GalleryImage = ({ original, photoIndex, totalPhotos }) => {
  const ref = useRef(null)

  const onFullScreenClick = useCallback(() => {
    const elem = ref.current
    if (!elem) {
      return
    }
    if (elem.requestFullscreen) {
      elem.requestFullscreen()
    } else if (elem.mozRequestFullScreen) {
      /* Firefox */
      elem.mozRequestFullScreen()
    } else if (elem.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen()
    } else if (elem.msRequestFullscreen) {
      /* IE/Edge */
      elem.msRequestFullscreen()
    }
  }, [])

  return (
    <GalleryImageContainer>
      <ImageCounter>
        <b>{photoIndex}</b> / {totalPhotos}
      </ImageCounter>
      <GalleryImg src={original} ref={ref} />
      <FullScreenButton onClick={onFullScreenClick}>
        <img src={FullScreenIcon} />
      </FullScreenButton>
    </GalleryImageContainer>
  )
}

GalleryImage.propTypes = {
  photoIndex: PropTypes.number.isRequired,
  totalPhotos: PropTypes.number.isRequired,
  original: PropTypes.string.isRequired,
}

export default GalleryImage
