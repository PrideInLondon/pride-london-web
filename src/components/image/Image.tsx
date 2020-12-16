import React from 'react'
import { ImageProps } from './Image.types'
import {
  StyledImage,
  ImageContainer,
  StyledFigure,
  ImageWrapper,
  StyledFigureCaption,
} from './Image.styles'

export const Image: React.FC<ImageProps> = ({
  image,
  alt,
  caption,
  ...props
}) => {
  return (
    <StyledFigure>
      <ImageContainer>
        <ImageWrapper>
          <StyledImage fixed={image} alt={alt} {...props} />
          <StyledFigureCaption padding="sm">{caption}</StyledFigureCaption>
        </ImageWrapper>
      </ImageContainer>
    </StyledFigure>
  )
}
