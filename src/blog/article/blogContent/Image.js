import React from 'react'
import PropTypes from 'prop-types'
import { ImageContainer, StyledImage } from './Image.styles'

const Image = ({ file }) => (
  <ImageContainer>
    <StyledImage src={file['en-GB'].url} />
  </ImageContainer>
)

Image.propTypes = {
  file: PropTypes.object.isRequired,
}

export default Image
