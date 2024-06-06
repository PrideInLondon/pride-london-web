import React from 'react'
import { CTALink } from '../ctaLink'
import { handleUrl } from '../../utils/location-utils'
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
}) => (
  <StyledGridItem {...props}>
    <GridItemContent<any> {...(to && handleUrl(to))}>
      <div>
        <Title>{title}</Title>
        {to && linkText && <CTALink>{linkText}</CTALink>}
      </div>
      <Count />
    </GridItemContent>
  </StyledGridItem>
)

GridItem.defaultProps = {
  to: '/error',
  linkText: 'missing link(!)',
}
