import React from 'react'
import { ImageProps } from './Image.types'
import {
  StyledImageElement,
  ImageOverflow,
  ImageWrapper,
  StyledImageCaption,
} from './Image.styles'

export const Image: React.FC<ImageProps> = ({
  image,
  alt,
  caption,
  ...props
}) => {
  return (
    <ImageOverflow>
      <ImageWrapper>
        <StyledImageElement fixed={image} alt={alt} {...props} />
        <StyledImageCaption padding="sm">{caption}</StyledImageCaption>
      </ImageWrapper>
    </ImageOverflow>
  )
}
