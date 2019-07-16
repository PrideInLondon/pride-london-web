import React from 'react'
import PropTypes from 'prop-types'
import { ThumbnailsContainer, BackButton, Thumbnail } from './styles'

const GalleryGrid = ({ images, activeIndex, onPhotoClick }) => {
  return (
    <>
      <BackButton small flexwidth onClick={() => onPhotoClick(activeIndex)}>
        Back to image
      </BackButton>
      <ThumbnailsContainer>
        {images.map((image, index) => (
          <Thumbnail onClick={() => onPhotoClick(index)} key={image.name}>
            <img src={image.thumbnail} alt={image.thumbnailAlt} />
          </Thumbnail>
        ))}
      </ThumbnailsContainer>
    </>
  )
}

GalleryGrid.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      thumbnailAlt: PropTypes.string,
      thumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeIndex: PropTypes.number.isRequired,
  onPhotoClick: PropTypes.func.isRequired,
}

export default GalleryGrid
