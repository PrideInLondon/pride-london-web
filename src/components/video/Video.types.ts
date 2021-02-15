import { LayoutProps, SpaceProps } from 'styled-system'

export type VideoHost = 'vimeo' | 'youtube'

export interface VideoProps extends LayoutProps, SpaceProps {
  host: VideoHost
  videoId: string
  caption: string
  coverImage: string
}
