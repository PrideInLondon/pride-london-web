import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledImage = styled.div`
  & img {
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`

const Image = props => {
  const { src, altText } = props
  return (
    <StyledImage>
      <img src={src} alt={altText} />
    </StyledImage>
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
}

export default Image
