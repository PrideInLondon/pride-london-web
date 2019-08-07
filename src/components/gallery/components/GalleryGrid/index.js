import React from 'react'
import PropTypes from 'prop-types'
import { ThumbnailsContainer, Thumbnail } from './styles'

const GalleryGrid = ({ images, activeIndex, onPhotoClick }) => {
  return (
    <>
      <ThumbnailsContainer>
        {[...images].map((image, index) => (
          <Thumbnail
            active={index === activeIndex}
            onClick={() => onPhotoClick(index)}
            key={image.name}
          >
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
