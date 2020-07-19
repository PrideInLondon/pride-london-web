import React from 'react'
import styled from 'styled-components'
import { Card, CardTitle, CardImage, CardContent, CardFooter } from '../card'
import { Tag } from '../../components/tag'
import { H5, H6, P } from '../typography'
import { colors } from '../../theme/colors'
import { GalleryCardProps } from './GalleryCard.types'

const StyledTag = styled(Tag)`
  display: flex;
  transform: translate(5px, -35px);
  color: indigo;
  padding: 6px;
`
const StyledCardContent = styled(CardContent as any)`
  position: relative;
  width: 100%;
  margin: 20px;
`
export const GalleryCard = ({
  artWorkTitle,
  artistName,
  date,
  priceOrSold,
  image,
  altText,
  tagContent,
}: GalleryCardProps) => {
  return (
    <Card to="/">
      <CardImage image={image} alt={altText} />
      <StyledCardContent>
        <StyledTag color={colors.tomato}>{tagContent}</StyledTag>
        <H5 as={CardTitle}>{artWorkTitle}</H5>
        <P>{artistName}</P>
        <P>{date}</P>
        <H6 as={CardFooter}>{priceOrSold}</H6>
      </StyledCardContent>
    </Card>
  )
}
