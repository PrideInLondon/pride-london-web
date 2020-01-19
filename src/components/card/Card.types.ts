import { FixedObject } from 'gatsby-image'
import { SpaceProps, LayoutProps, ResponsiveValue } from 'styled-system'

export interface CardProps {
  variant?: ResponsiveValue<'column' | 'row'>
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

export interface CardContentProps extends SpaceProps, LayoutProps {}

export interface CardTitleProps {}

export interface CardFooterProps {}
