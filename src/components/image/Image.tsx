import React from 'react'
import { P } from '../typography'
import { ImageProps } from './Image.types'
import { StyledFigure } from './Image.styles'

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  caption,
  ...props
}) => {
  return (
    <StyledFigure {...props}>
      <img src={src} alt={alt} />
      {caption && (
        <P variant="sm" as="figcaption" textAlign="right" fontWeight="bold">
          {caption}
        </P>
      )}
    </StyledFigure>
  )
}
