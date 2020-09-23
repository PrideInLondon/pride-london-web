import { FixedObject } from 'gatsby-image'
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
} from 'styled-system'

export const CARD_VARIANTS = ['column', 'row'] as const

type CardVariant = typeof CARD_VARIANTS[number]

export interface CardProps {
  variant?: ResponsiveValue<CardVariant>
}

export interface CardImageProps {
  /**
   * Fixed details from Gatsby Image
   */
  image: FixedObject
  /**
   * Alt description for image
   */
  alt: string
}

export type CardContentProps = SpaceProps & LayoutProps & PositionProps
