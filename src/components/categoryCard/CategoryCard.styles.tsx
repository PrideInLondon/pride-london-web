import React from 'react'
import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'
import { GatsbyImage } from "gatsby-plugin-image";
import { colors } from '../../theme/colors'
import { Card } from '../card'
import { CategoryCardProps } from './CategoryCard.types'

export const StyledImage = styled(GatsbyImage)<{ fluid: any }>`
  transition: transform 0.15s ease-out;
  width: 100% !important;
`

export const CardWrapper = styled((props) => (
  <Card {...props} />
))<CategoryCardProps>`
  border: solid 1px ${colors.mediumGrey};

  &:hover,
  &:focus {
    ${StyledImage} {
      transform: scale(1.05);
    }
  }

  ${compose(layout, space)}
`
