import React from 'react'
import { CardTitle, CardContent, CardFooter } from '../card'
import { H5, H6, P } from '../typography'
import { md } from '../../theme/space'
import {
  StyledCard,
  ImageWrapper,
  StyledImage,
  StyledTag,
} from './GalleryCard.styles'
import { GalleryCardProps } from './GalleryCard.types'

export const GalleryCard = ({
  artist: { name },
  artwork: {
    title,
    year,
    sold,
    guidePrice,
    category,
    image: { fixed, alt },
  },
  ...props
}: GalleryCardProps) => (
  <StyledCard {...props}>
    <ImageWrapper height={fixed.height}>
      <StyledImage {...{ fixed, alt }} />
    </ImageWrapper>
    <CardContent position="relative" paddingTop={`${md * 2}px`}>
      <StyledTag color={category.hexColour}>{category.title}</StyledTag>
      <H5 as={CardTitle}>{title}</H5>
      <P>{name}</P>
      <P>{year}</P>
      <H6 as={CardFooter}>{sold ? 'Sold' : guidePrice}</H6>
    </CardContent>
  </StyledCard>
)
