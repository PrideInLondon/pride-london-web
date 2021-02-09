import React from 'react'
import { CardContent } from '../card'
import { Tag } from '../tag'
import { Wrapper } from '../wrapper'
import { CardWrapper, StyledImage } from './CategoryCard.styles'
import { CategoryCardProps } from './CategoryCard.types'

export const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  category: { color, name },
  children,
  ...props
}) => (
  <CardWrapper {...props}>
    <Wrapper overflow="hidden">
      <StyledImage fluid={image} />
    </Wrapper>
    <CardContent position="relative" paddingX="lg" paddingY="32px">
      <Tag position="absolute" top="-20px" {...{ color }}>
        {name}
      </Tag>
      {children}
    </CardContent>
  </CardWrapper>
)
