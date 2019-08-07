import React from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import { PhotoDescription, PhotoAuthor } from './styles'

const GallerySlider = ({ images, activeIndex, onSlide }) => (
  <>
    <ImageGallery
      items={images}
      additionalClass="custom-gallery"
      onSlide={onSlide}
      lazyLoad
      showPlayButton={false}
      startIndex={activeIndex}
    />
    <PhotoDescription>{images[activeIndex].description}</PhotoDescription>
    {images[activeIndex].photographer && (
      <PhotoAuthor>
        PHOTOGRAPH: {images[activeIndex].photographer.name}
      </PhotoAuthor>
    )}
  </>
)

GallerySlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      originalAlt: PropTypes.string,
      original: PropTypes.string.isRequired,
      description: PropTypes.string,
      photographer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  activeIndex: PropTypes.number.isRequired,
  onSlide: PropTypes.func.isRequired,
}

export default GallerySlider
