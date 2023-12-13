import { GatsbyImage } from "gatsby-plugin-image";
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
} from 'styled-system'

export interface CardProps {
  variant?: ResponsiveValue<'column' | 'row'>
}

export interface CardImageProps {
  /**
   * Fixed details from Gatsby Image
   */
  image: GatsbyImage
  /**
   * Alt description for image
   */
  alt: string
}

export type CardContentProps = SpaceProps & LayoutProps & PositionProps
