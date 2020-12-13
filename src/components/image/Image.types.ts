import { FixedObject } from 'gatsby-image'
import {
  SpaceProps,
  LayoutProps,
  PositionProps,
  ResponsiveValue,
} from 'styled-system'

export interface ImageContainerProps {
  variant?: ResponsiveValue<'column' | 'row'>
}

export interface ImageElementProps {
  /**
   * Fixed details from Gatsby Image
   */
  image: FixedObject
  /**
   * Alt description for image
   */
  alt: string
}

export type ImageCaptionProps = SpaceProps & LayoutProps & PositionProps
