import React from 'react'
import { P } from '../typography'
import { ImageProps } from './Image.types'
import { StyledFigure } from './Image.styles'

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  caption,
  ...props
}) => (
  <StyledFigure {...props}>
    <img {...{ src, alt }} />
    {caption && (
      <P variant="sm" as="figcaption" textAlign="right" fontWeight="bold">
        {caption}
      </P>
    )}
  </StyledFigure>
)
