import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import './index.css'

const Gallery = ({ images }) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  return (
    <>
      <ImageGallery
        items={images}
        thumbnailPosition="top"
        additionalClass="custom-gallery"
        onSlide={setPhotoIndex}
        lazyLoad
        showPlayButton={false}
      />
      <p>{images[photoIndex].description}</p>
    </>
  )
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Gallery
