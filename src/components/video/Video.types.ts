import { FixedObject } from 'gatsby-image'

export type VideoHost = 'vimeo' | 'youtube'

export interface VideoProps {
  host: VideoHost
  videoId: string
  caption: string
  coverImage: {
    image: FixedObject
    alt: string
  }
}
