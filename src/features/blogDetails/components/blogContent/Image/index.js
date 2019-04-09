import React from 'react'
import PropTypes from 'prop-types'
import { ImageContainer, StyledImage } from './styles'

const Image = ({ file }) => (
  <ImageContainer>
    <StyledImage src={file['en-GB'].url} />
  </ImageContainer>
)

Image.propTypes = {
  file: PropTypes.object.isRequired,
}

export default Image
