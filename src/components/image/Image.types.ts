import { FixedObject } from 'gatsby-image'
import { SpaceProps, LayoutProps } from 'styled-system'

export interface ImageProps extends LayoutProps, SpaceProps {
  /**
   * Fixed details from Gatsby Image
   */
  image: FixedObject
  /**
   * Alt description for image
   */
  alt: string
  caption: string
}
