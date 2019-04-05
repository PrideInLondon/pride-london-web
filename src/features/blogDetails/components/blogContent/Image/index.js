import React from 'react'
import PropTypes from 'prop-types'
import { ImageContainer, StyledImage } from './styles'

const Image = ({ src }) => (
  <ImageContainer>
    <StyledImage src={src} />
  </ImageContainer>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
