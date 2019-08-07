import React, { useState, useCallback, useRef } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'
import 'react-image-gallery/styles/css/image-gallery.css'
import './index.css'
import { checkBreakpoint } from '../../utilities'
import GalleryGrid from './components/GalleryGrid'
import { GalleryContainer } from './styles'
import GalleryImage from './components/GalleryImage'
import { settings } from './slickSettings'
import GalleryImageDetails from './components/GalleryImageDetails'

const Gallery = ({ images }) => {
  const imagesSlider = useRef()
  const descriptionsSlider = useRef()

  const [photoIndex, setPhotoIndex] = useState(0)

  const onPhotoClick = useCallback(index => {
    imagesSlider.current && imagesSlider.current.slickGoTo(index)
    descriptionsSlider.current && descriptionsSlider.current.slickGoTo(index)
  }, [])

  return (
    <GalleryContainer>
      <Slider
        {...settings}
        ref={imagesSlider}
        beforeChange={(oldIndex, newIndex) => {
          setPhotoIndex(newIndex)
          descriptionsSlider.current &&
            descriptionsSlider.current.slickGoTo(newIndex)
        }}
      >
        {images.map((image, index) => (
          <GalleryImage
            {...image}
            key={`${image.name}-photo`}
            photoIndex={index + 1}
            totalPhotos={images.length}
          />
        ))}
      </Slider>
      <Slider
        {...settings}
        arrows={false}
        draggable={false}
        ref={descriptionsSlider}
      >
        {images.map(image => (
          <GalleryImageDetails {...image} key={`${image.name}-description`} />
        ))}
      </Slider>
      {checkBreakpoint(550) && (
        <GalleryGrid
          images={images}
          onPhotoClick={onPhotoClick}
          activeIndex={photoIndex}
        ></GalleryGrid>
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
