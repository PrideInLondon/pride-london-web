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

export interface CardContentProps {}

export interface CardTitleProps {}

export interface CardFooterProps {}
