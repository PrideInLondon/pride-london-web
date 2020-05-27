import { FixedObject } from 'gatsby-image'

export interface VideoProps {
  videoId: string
  caption: string
  coverImage: {
    image: FixedObject
    alt: string
  }
}
