import React from 'react'
import styled from 'styled-components'
import { space, layout, compose, variant } from 'styled-system'
import Image from 'gatsby-image'
import { colors } from '../../theme/colors'
import { mediaQueries } from '../../theme/mediaQueries'

import {
  CardProps,
  CardImageProps,
  CardTitleProps,
  CardContentProps,
  CardFooterProps,
} from './Card.types'

const StyledCardImage = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100%;
  min-width: 100%;
`

const CardImageOverflow = styled.div`
  overflow: hidden;
  flex-basis: 40%;
  flex-shrink: 0;
  height: auto;
  position: relative;
  padding-top: 0;
  min-height: 180px;
`

const CardImageWrapper = styled.div`
  transition: transform 0.15s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const CardImage: React.FC<CardImageProps> = ({ image, ...props }) => (
  <CardImageOverflow>
    <CardImageWrapper>
      <StyledCardImage fixed={image} {...props} />
    </CardImageWrapper>
  </CardImageOverflow>
)

export const CardTitle = styled.h3<CardTitleProps>`
  margin: 0 0 0.5em 0;
  font-size: 1.25rem;

  ${mediaQueries.md} {
    font-size: 1.5rem;
  }

  ${mediaQueries.mdMax} {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    /* Multi-line ellipsis, only works in webkit browsers */
    @supports (-webkit-line-clamp: 2) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      /* stylelint-disable */
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      /* stylelint-enable */
    }
  }
`

export const CardContent = styled.div<CardContentProps>`
  background-color: ${colors.white};
  color: ${colors.darkGrey};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 0.875rem;
  line-height: 1.3;
  padding: 20px;

  ${compose(space, layout)}
`

export const CardFooter = styled.div<CardFooterProps>`
  display: flex;
  margin-top: auto;
`
export const Card = styled.div<CardProps>`
  width: 100%;
  display: flex;
  overflow: hidden;

  &:hover,
  &:focus {
    ${CardImageWrapper} {
      transform: scale(1.08);
    }
  }

  ${variant({
    variants: {
      column: {
        flexDirection: 'column',
        borderRadius: '5px',
        [CardImageOverflow]: {
          flexBasis: '40%',
        },
        [CardContent]: {
          flexBasis: '60%',
          margin: 0,
        },
      },
      row: {
        flexDirection: 'row',
        borderRadius: 0,
        [CardImageOverflow]: {
          flexBasis: '50%',
        },
        [CardContent]: {
          flexBasis: 'calc(50% + 60px)',
          margin: '25px 0 25px -60px',
          zIndex: '1',
        },
      },
    },
  })}
`
Card.defaultProps = {
  variant: 'column',
}
