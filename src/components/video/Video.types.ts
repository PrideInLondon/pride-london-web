import { LayoutProps, SpaceProps } from 'styled-system'
import { FixedObject } from 'gatsby-image'

export type VideoHost = 'vimeo' | 'youtube'

export interface VideoProps extends LayoutProps, SpaceProps {
  host: VideoHost
  videoId: string
  caption: string
  coverImage: {
    image: FixedObject
    alt: string
  }
}
