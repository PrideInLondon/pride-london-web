import { FixedObject } from 'gatsby-image'

export interface CardProps {
  /**
   * Background colour for Card
   */
  color?: string
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

export interface CardContentProps {
  /**
   * Height as CSS value for the content area. This is required to allow the
   * Footer to stick to bottom via flex.
   *
   * Default is half the current width breakpoint.
   */
  height?: {
    desktop?: string
    tablet?: string
    mobile?: string
  }
}

export interface CardTitleProps {}

export interface CardFooterProps {}
