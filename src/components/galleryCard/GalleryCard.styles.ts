import styled from 'styled-components'
import { compose, layout, space, LayoutProps, SpaceProps } from 'styled-system'
import Image from 'gatsby-image/withIEPolyfill'
import { Card } from '../card'
import { Tag } from '../../components/tag'

export const ImageWrapper = styled.div<LayoutProps & SpaceProps>`
  overflow: hidden;

  ${compose(layout, space)}
`

export const StyledImage = styled(Image)`
  transition: transform 0.15s ease-out;
  width: 100% !important;
`

export const StyledCard = styled(Card)`
  &:hover,
  &:focus {
    ${StyledImage} {
      transform: scale(1.05);
    }
  }

  ${compose(layout, space)}
`

export const StyledTag = styled(Tag)`
  position: absolute;
  top: -20px;
`
