import styled from 'styled-components'
import { compose, layout, space, LayoutProps, SpaceProps } from 'styled-system'
import { GatsbyImage } from "gatsby-plugin-image";
import { Tag } from '../../components/tag'
import { colors } from '../../theme/colors'
import { Card } from '../card'

export const ImageWrapper = styled.div<LayoutProps & SpaceProps>`
  overflow: hidden;

  ${compose(layout, space)}
`

export const StyledImage = styled(GatsbyImage)`
  transition: transform 0.15s ease-out;
  width: 100% !important;
`

export const StyledCard = styled(Card)`
  border: solid 1px ${colors.mediumGrey};

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
