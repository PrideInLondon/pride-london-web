import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { space, layout, compose, variant, position } from 'styled-system'
import Image from 'gatsby-image'
import { colors } from '../../theme/colors'
import { mediaQueries } from '../../theme/mediaQueries'

import {
  ImageContainerProps,
  ImageElementProps,
  ImageCaptionProps,
} from './Image.types'

const StyledImageElement = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100%;
  min-width: 100%;
  padding: 10px;
`

const ImageElementOverflow = styled.div`
  overflow: hidden;
  position: relative;
  ${mediaQueries.md} {
    padding-top: 68%;
  }
`

const ImageElementWrapper = styled.div`
  transition: transform 0.15s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const ImageElement: React.FC<ImageElementProps> = ({
  image,
  ...props
}) => (
  <ImageElementOverflow>
    <ImageElementWrapper>
      <StyledImageElement fixed={image} {...props} />
    </ImageElementWrapper>
  </ImageElementOverflow>
)

export const ImageCaption = styled.div<ImageCaptionProps>`
  background-color: ${colors.white};
  color: ${colors.indigo};
  font-weight: bold;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 0.875rem;
  line-height: 1.3;
  padding: 0px 5px 10px auto;

  ${compose(space, layout, position)}
`

export const ImageContainer = styled(Link)<ImageContainerProps>`
  width: 100%;
  display: flex;
  overflow: hidden;
  text-decoration: none;

  &:hover,
  &:focus {
    ${ImageElementWrapper} {
      transform: scale(1.08);
    }
  }

  ${variant({
    variants: {
      column: {
        flexDirection: 'column',
        [ImageElementOverflow]: {
          flexBasis: 'auto',
        },
      },
      row: {
        flexDirection: 'row',
        [ImageElementOverflow]: {
          flexBasis: '50%',
        },
      },
    },
  })}
`
ImageContainer.defaultProps = {
  variant: 'column',
}
