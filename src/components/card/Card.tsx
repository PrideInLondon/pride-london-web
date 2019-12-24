import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import theme from '../../theme/theme'
import { media } from '../../theme/media'
import { sm, md, lg } from '../../theme/breakpoints'
import {
  CardProps,
  CardImageProps,
  CardTitleProps,
  CardContentProps,
  CardFooterProps,
} from './Card.types'

export const Card: React.FC<CardProps> = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${({ color }) => color};

  &:hover,
  &:focus {
    #card-img-wrapper {
      transform: scale(1.08);
    }
  }
`

Card.defaultProps = {
  color: theme.colors.white,
}

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
    <CardImageWrapper id="card-img-wrapper">
      <StyledCardImage fixed={image} {...props} />
    </CardImageWrapper>
  </CardImageOverflow>
)

export const CardTitle: React.FC<CardTitleProps> = styled.h3`
  margin: 0 0 0.5em 0;
`

export const CardContent: React.FC<CardContentProps> = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: ${({ height: { desktop } }) => desktop};

  p,
  ul,
  ol,
  strong {
    font-size: 0.875rem;
    color: ${theme.colors.darkGrey};
    line-height: 1.3;
  }

  ${media.mobile`
    height: ${({ height: { mobile } }) => mobile};
  `};

  ${media.tablet`
    padding: 30px;
    height: ${({ height: { tablet } }) => tablet};
  `};
`

CardContent.defaultProps = {
  height: {
    desktop: `${lg / 2}px`,
    tablet: `${md / 2}px`,
    mobile: `${sm / 2}px`,
  },
}

export const CardFooter: React.FC<CardFooterProps> = styled.div`
  display: flex;

  ${media.mobile`
    margin-top: 20px;
  `};

  ${media.tablet`
    margin-top: auto;
  `};
`
