import React from 'react'
import styled from 'styled-components'
import { layout, LayoutProps } from 'styled-system'
import { FixedObject } from 'gatsby-image'
import {
  Card,
  CardTitle,
  CardImage,
  CardContent,
  CardFooter,
} from '../components/card'
import { Tag } from '../components/tag'
import { H5, H6, P } from '../components/typography'
import { Category } from '../components/categoryFilter/CategoryFilter.types'

export interface GalleryEntry extends LayoutProps {
  to: string
  artist: {
    name: string
  }
  artwork: {
    title: string
    year: string
    sold: boolean
    guidePrice: string
    image: FixedObject
    category: Category
  }
}

const StyledCard = styled(Card)`
  ${layout}
`

const StyledTag = styled(Tag)`
  width: fit-content;
  position: relative;
  top: -40px;
`

export const GalleryCard = ({
  to,
  artist: { name },
  artwork: { title, year, sold, guidePrice, image, category },
  ...props
}: GalleryEntry) => (
  <StyledCard to={to} {...props}>
    <CardImage image={image} alt="" />
    <CardContent>
      <StyledTag color={category.color}>{category.name}</StyledTag>
      <H5 as={CardTitle}>{title}</H5>
      <P>{name}</P>
      <P>{year}</P>
      <H6 as={CardFooter}>{sold ? 'Sold' : guidePrice}</H6>
    </CardContent>
  </StyledCard>
)
