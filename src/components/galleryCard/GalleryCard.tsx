import React from 'react'
import styled from 'styled-components'
import { Card, CardTitle, CardImage, CardContent, CardFooter } from '../card'
import { Tag } from '../../components/tag'
import { H5, H6, P } from '../typography'
import { GalleryCardProps } from './GalleryCard.types'

const StyledTag = styled(Tag)`
  display: flex;
  position: relative;
  top: -36;
  color: indigo;
  padding: 6px;
  width: max-content;
`
const StyledCardContent = styled(CardContent as any)`
  position: relative;
  width: 100%;
  margin: 20px;
`
export const GalleryCard = ({
  artist: name,
  artwork: {
    title,
    year,
    sold,
    guidePrice,
    category,
    image: { fixed, altText },
  },
}: GalleryCardProps) => {
  return (
    <Card to="/">
      <CardImage image={fixed} alt={altText} />
      <StyledCardContent>
        <StyledTag color={category.hexColour}>{category.title}</StyledTag>
        <H5 as={CardTitle}>{title}</H5>
        <P>{name}</P>
        <P>{year}</P>
        <H6 as={CardFooter}>{sold ? 'Sold' : guidePrice}</H6>
      </StyledCardContent>
    </Card>
  )
}
