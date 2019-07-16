import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import 'react-image-gallery/styles/css/image-gallery.css'
import './index.css'
import GalleryGrid from './components/GalleryGrid'
import GallerySlider from './components/GallerySlider'
import { GalleryContainer } from './styles'

const Gallery = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [thumbanilsVisible, toggleThumbnailsVisibility] = useState(false)

  const onSelectPhoto = useCallback(photoIndex => {
    setPhotoIndex(photoIndex)
    toggleThumbnailsVisibility(false)
  }, [])

  const showThumbnails = useCallback(() => {
    toggleThumbnailsVisibility(true)
  }, [])

  return (
    <GalleryContainer>
      {thumbanilsVisible && (
        <GalleryGrid
          images={images}
          activeIndex={photoIndex}
          onPhotoClick={onSelectPhoto}
        />
      )}
      {!thumbanilsVisible && (
        <GallerySlider
          images={images}
          activeIndex={photoIndex}
          onSlide={setPhotoIndex}
          onViewAllButtonClick={showThumbnails}
        />
      )}
    </GalleryContainer>
  )
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      originalAlt: PropTypes.string,
      original: PropTypes.string.isRequired,
      description: PropTypes.string,
      thumbnailAlt: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
      photographer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
}

export default Gallery
