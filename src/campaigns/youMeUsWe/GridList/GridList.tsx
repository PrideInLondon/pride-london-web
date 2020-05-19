import React from 'react'
import Link from 'gatsby-link' // lgtm [js/unused-local-variable]
import { CTALink } from '../../../components/ctaLink'
import { handleUrl } from '../../../utils/location-utils'
import {
  Count,
  GridItemContent,
  StyledGridItem,
  Title,
} from './GridList.styles'

interface GridItemProps {
  title: string
  to?: string
  linkText?: string
}

export const GridItem: React.FC<GridItemProps> = ({
  title,
  to,
  linkText,
  ...props
}) => {
  return (
    <StyledGridItem {...props}>
      <GridItemContent<'a' | 'div' | typeof Link> {...(to && handleUrl(to))}>
        <div>
          <Title>{title}</Title>
          {to && linkText && <CTALink>{linkText}</CTALink>}
        </div>
        <Count />
      </GridItemContent>
    </StyledGridItem>
  )
}
